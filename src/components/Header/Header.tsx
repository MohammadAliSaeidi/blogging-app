import React from "react";
import UserAvatarOrLogin from "../UserAvatarOrLogin";

export default function Header() {
	return (
		<header className="blurred-glass text-white w-screen mx-auto border-b">
			<div className="max-w-screen-lg mx-auto flex flex-row items-center h-12 py-1.5 ">
				<UserAvatarOrLogin />
			</div>
		</header>
	);
}
