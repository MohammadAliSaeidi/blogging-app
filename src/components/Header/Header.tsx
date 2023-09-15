import React from "react";
import UserAvatarOrLogin from "../UserAvatarOrLogin";
import Button from "../Button";
import WriteNewPost from "../WriteNewPost";

export default function Header() {
	return (
		<header className="blurred-glass text-white w-screen mx-auto border-b z-50 fixed">
			<div className="max-w-screen-lg mx-auto flex flex-row items-center h-12 py-1.5 ">
				<UserAvatarOrLogin />
				<WriteNewPost />
			</div>
		</header>
	);
}
