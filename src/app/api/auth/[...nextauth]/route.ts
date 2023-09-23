import NextAuth from "next-auth/next";
import CredentialsProvider from "next-auth/providers/credentials";
import prisma from "../../../../../lib/dbConnectPostgres";
import { PrismaAdapter } from "@auth/prisma-adapter";

const handler = NextAuth({
	adapter: PrismaAdapter(prisma),
	providers: [
		CredentialsProvider({
			name: "Credentials",
			id: "Credentials",
			credentials: {
				email: {
					label: "Email",
					type: "text",
					placeholder: "example@email.com",
				},
				password: { label: "Password", type: "password" },
			},

			authorize: async (credentials, req) => {
				if (!credentials) return null;
				const user = await prisma.user.findUnique({
					where: {
						email: credentials.email,
						password: credentials.password,
					},
				});

				if (user) {
					return user;
				}
				return null;
			},
		}),
	],
	pages: {
		signIn: "/auth/signin",
		signOut: "/auth/signout",
	},
	secret: process.env.NEXTAUTH_SECRET as string,
});

export { handler as GET, handler as POST };
