import React from "react";
import Avatar from "../Avatar";

export default function Header() {
	return (
		<header className="text-white bg-gray-800 w-screen">
			<div className="max-w-screen-lg mx-auto flex flex-row items-center h-12 ">
                <Avatar />
			</div>
		</header>
	);
}
