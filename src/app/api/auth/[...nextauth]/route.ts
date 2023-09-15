import NextAuth from "next-auth/next";
import CredentialsProvider from "next-auth/providers/credentials";
import prisma from "../../../../../lib/dbConnectPostgres";


const handler = NextAuth({
	providers: [
		CredentialsProvider({
			name: "Credentials",
			credentials: {
				username: {
					label: "Username",
					type: "text",
					placeholder: "Eldercare5064",
				},
				password: { label: "Password", type: "password" },
			},

			async authorize(credentials, req) {
				if (!credentials) return null;

				const user = await prisma.user.findUnique({
					where: {
						username: credentials.username,
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
	secret: process.env.NEXTAUTH_SECRET as string,
});

export { handler as GET, handler as POST };
