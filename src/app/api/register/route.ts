import { hash } from "bcryptjs";
import { NextResponse } from "next/server";
import UserModel from "../../../../models/UserModel";
import dbConnect from "../../../../lib/dbConnectMongo";

const SALT = 12;

type UserInput = {
	username: string;
	email: string;
	password: string;
};

type UserOutput = {
	_id: string;
	username: string;
	email: string;
};

type ErrorOutput = {
	status: string;
	message: string;
};

export async function POST(req: Request): Promise<NextResponse> {
	await dbConnect();
	const userInput = (await req.json()) as UserInput;
	const isValid = validateUserInput(userInput);
	if (!isValid) {
		return new NextResponse(
			JSON.stringify({
				status: "error",
				message: "Input validation failed",
			} as ErrorOutput),
			{ status: 400 },
		);
	}

	let hashedPassword: string;
	try {
		hashedPassword = await hash(userInput.password, SALT);
	} catch (error: any) {
		return new NextResponse(
			JSON.stringify({
				status: "error",
				message: error.message,
			} as ErrorOutput),
			{ status: 500 },
		);
	}

	let userExists: boolean;
	try {
		userExists =
			(await UserModel.exists({
				$or: [{ username: userInput.username }, { email: userInput.email }],
			})) !== null;
	} catch (error: any) {
		return new NextResponse(
			JSON.stringify({
				status: "error",
				message: "There was an internal error while processing your request",
			} as ErrorOutput),
			{ status: 500 },
		);
	}

	if (userExists) {
		return new NextResponse(
			JSON.stringify({
				status: "error",
				message: "User already exists",
			} as ErrorOutput),
			{ status: 409},
		);
	}

	let user: UserOutput;
	try {
		user = await UserModel.create({
			username: userInput.username,
			email: userInput.email,
			password: hashedPassword,
			createdAt: Date.now(),
			updatedAt: Date.now()
		});
	} catch (error: any) {
		return new NextResponse(
			JSON.stringify({
				status: "error",
				message: error.message,
			} as ErrorOutput),
			{ status: 500 },
		);
	}

	return new NextResponse(JSON.stringify(user), { status:201});
}

function validateUserInput(userInput: UserInput): boolean {
	const { username, password, email } = userInput;

	const usernameRegex = /^[^\s\u200c]{5,16}$/;
	const passwordRegex = /^.{8,30}$/;
	const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
	if (
		!username ||
		!email ||
		!password ||
		!usernameRegex.test(username) ||
		!passwordRegex.test(password) ||
		!emailRegex.test(email)
	) {
		return false;
	}
	return true;
}
