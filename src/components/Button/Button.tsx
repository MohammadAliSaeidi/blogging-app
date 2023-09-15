import React from "react";

interface Props {
	children: string | JSX.Element | JSX.Element[] | React.ReactNode;
	mode?: "button-filled" | "button-outline" | "button-no-bg" | undefined;
	type?: "button" | "submit" | "reset" | undefined;
	onClick?: (event: React.MouseEvent) => void;
}

export default function Button({ onClick, children, mode, type }: Props) {
	let styles: string;

	return (
		<button
			className={mode || "button-filled"}
			type={type || "button"}
			draggable={false}
			onClick={onClick}
		>
			{children}
		</button>
	);
}
