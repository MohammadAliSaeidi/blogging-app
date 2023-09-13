"use client";
import { signIn } from "next-auth/react";

import { useSession } from "next-auth/react";
import React from "react";
import Avatar from "../Avatar";

export default function UserAvatarOrLogin() {
	const { status, data } = useSession();

	return (
		<>
			{status === "authenticated" && <Avatar image={data.user?.image} />}
			{status === "unauthenticated" && (
				<button
					onClick={(e) => {
						e.preventDefault();
						signIn();
					}}
					className="button bg-rose-700  hover:bg-rose-800"
				>
					Login
				</button>
			)}
		</>
	);
}
