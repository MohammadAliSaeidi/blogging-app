import React from "react";
import Loading from "../Loading";

interface Props {
	children: string | JSX.Element | JSX.Element[] | React.ReactNode;
	style?: "button-icon" | "button-filled-isochromatic" | "button-filled-invert" | "button-outline";
	type?: "button" | "submit" | "reset";
	size?: "small" | "normal" | "large";
	onClick?: (event: React.MouseEvent) => void;
	className?: string;
	disabled?: boolean;
	loading?: boolean;
}

export default function Button({
	onClick,
	loading = false,
	children,
	style,
	type,
	className,
	size,
	disabled: disabled,
}: Props) {
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
			disabled={disabled || loading}
			className={`${style || "button-filled-isochromatic"} ${sizeStyle} ${className}`}
			type={type || "button"}
			draggable={false}
			onClick={(e: React.MouseEvent) => {
				if (!loading && onClick) onClick(e);
			}}
		>
			{loading ? <Loading /> : children}
		</button>
	);
}
