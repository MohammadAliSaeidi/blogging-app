import React, { useState } from "react";

export default function Header({ children }: { children?: React.ReactNode }) {
	return (
		<header className="blurred-glass text-white w-screen mx-auto z-50 fixed border-0 border-b">
			<div className="max-w-screen-lg mx-auto flex flex-row items-center gap-2 h-12 py-1.5 ">{children}</div>
		</header>
	);
}
