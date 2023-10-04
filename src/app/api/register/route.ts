import { hash } from "bcryptjs";
import { NextResponse } from "next/server";
import UserModel from "../../../../models/UserModel";
import dbConnect from "../../../../lib/dbConnectMongo";

export async function POST(req: Request) {
	try {
		await dbConnect();

		const { username, email, password } = (await req.json()) as {
			username: string;
			email: string;
			password: string;
		};
		const hashed_password = await hash(password, 12);

		const user = await UserModel.create({ username: username, email: email, password: hashed_password });

		return NextResponse.json(user);
	} catch (error: any) {
		return new NextResponse(
			JSON.stringify({
				status: "error",
				message: error.message,
			}),
			{ status: 500 },
		);
	}
}
