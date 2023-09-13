"use client";

import React, { useState } from "react";

export interface Props {
	defaultState?: "Open" | "Closed";
	customMenuButton: React.ReactNode;
}

export default function Menu(props: Props) {
	const { defaultState, customMenuButton } = props;

	const [isOpen, setIsOpen] = useState<boolean>(
		defaultState === "Open"
	);

	return (
		<div onClick={() => setIsOpen((value) => !value)}>
			{customMenuButton}
			{isOpen && <div className="absolute rounded-sm bg-zinc-900">test</div>}
		</div>
	);
}
