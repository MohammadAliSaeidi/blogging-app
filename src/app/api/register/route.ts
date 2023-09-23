import prisma from "../../../../lib/dbConnectPostgres";
import { hash } from "bcryptjs";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
	try {
		const { username, email, password } = (await req.json()) as {
			username: string;
			email: string;
			password: string;
		};
		const hashed_password = await hash(password, 12);

		const user = await prisma.user.create({
			data: { username: username, password: hashed_password, email: email },
		});

		return NextResponse.json({
			user: {
				username: user.name,
				email: user.email,
			},
		});
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
