"use client";
import { signIn } from "next-auth/react";

import { useSession } from "next-auth/react";
import React from "react";
import Avatar from "../Avatar";
import Button from "../Button";

export default function UserAvatarOrLogin() {
	const { status, data } = useSession();

	return (
		<>
			{status === "authenticated" && <Avatar email={data.user?.email} image={data.user?.image} />}
			{status === "unauthenticated" && (
				<Button
					onClick={(e) => {
						e.preventDefault();
						signIn();
					}}
				>
					Log in
				</Button>
			)}
		</>
	);
}