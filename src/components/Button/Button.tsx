import React from "react";

interface Props {
	children: string | JSX.Element | JSX.Element[] | React.ReactNode;
	mode?: "button-icon" | "button-filled" | "button-outline";
	type?: "button" | "submit" | "reset";
	size?: "small" | "normal" | "large";
	onClick?: (event: React.MouseEvent) => void;
	className?: string;
	disabled?: boolean;
}

export default function Button({ onClick, children, mode, type, className, size, disabled: disabled }: Props) {
	let sizeStyle: string;

	switch (size) {
		case "small":
			sizeStyle = "text-sm";
			break;

		case "normal":
			sizeStyle = "text-base";
			break;

		case "large":
			sizeStyle = "text-lg";
			break;

		default:
			sizeStyle = "";
	}

	return (
		<button
			disabled={disabled}
			className={`${mode || "button-filled"} ${sizeStyle} ${className}`}
			type={type || "button"}
			draggable={false}
			onClick={onClick}
		>
			{children}
		</button>
	);
}
