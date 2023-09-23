import NextAuth from "next-auth/next";
import CredentialsProvider from "next-auth/providers/credentials";
import prisma from "../../../../../lib/dbConnectPostgres";
import { PrismaAdapter } from "@auth/prisma-adapter";
import { compare } from "bcryptjs";

const handler = NextAuth({
	adapter: PrismaAdapter(prisma),
	providers: [
		CredentialsProvider({
			name: "Credentials",
			id: "Credentials",
			credentials: {
				usernameOrEmail: {
					label: "Username or Email",
					type: "text",
					placeholder: "example@email.com",
				},
				password: { label: "Password", type: "password" },
			},

			authorize: async (credentials) => {
				if (!credentials) return null;

				const user = await prisma.user.findFirst({
					where: {
						OR: [{ email: credentials.usernameOrEmail }, { username: credentials.usernameOrEmail }],
					},
				});

				if (user && user.password) {
					const isValid = await compare(credentials.password, user.password);
					console.log("isValid", isValid);
					if (isValid) return user;
				}
				return null;
			},
		}),
	],
	pages: {
		signIn: "/auth/signin",
	},
	secret: process.env.NEXTAUTH_SECRET as string,
	// TODO: convert session strategy to the database
	session: {
		strategy: "jwt",
	},
});

export { handler as GET, handler as POST };
