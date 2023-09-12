import React from "react";

interface Props {
	children:
		| string
		| JSX.Element
		| JSX.Element[]
		| React.ReactNode
		| undefined;
	mode?: "button-filled" | "button-outline" | undefined;
	type?: "button" | "submit" | "reset" | undefined;
}

export default function Button({ children, mode, type }: Props) {
	let styles: string;

	return (
		<button
			className={mode || "button-filled"}
			type={type}
			draggable={false}
		>
			{children}
		</button>
	);
}
