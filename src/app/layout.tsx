import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Providers from "./_components/Providers";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "Blogging App",
	description: "Generated by create next app",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang="en">
			<body className={inter.className + " min-h-full dark:bg-black"}>
				<Providers>
					<main>
						<div>{children}</div>
					</main>
				</Providers>
			</body>
		</html>
	);
}
