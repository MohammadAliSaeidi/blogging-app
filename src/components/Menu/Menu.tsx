"use client";

import React, { Key, ReactNode, useState } from "react";

interface Props {
	defaultState?: "Open" | "Closed";
	customMenuButton: ReactNode;
	children: ReactNode;
}

export default function Menu(props: Props) {
	const { children, defaultState, customMenuButton } = props;

	const [isOpen, setIsOpen] = useState<boolean>(defaultState === "Open");

	return (
		<div className="relative" onClick={() => setIsOpen((value) => !value)}>
			{customMenuButton}
			{isOpen && (
				<div className="shadow-md shadow-black/50 m-2 -translate-x-[50%] left-[50%] blurred-glass [&>*]:px-8 [&>*]:py-2 absolute rounded-sm bg-zinc-900">
					{children}
				</div>
			)}
		</div>
	);
}
