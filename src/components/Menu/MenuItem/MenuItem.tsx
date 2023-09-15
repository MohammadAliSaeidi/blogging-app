import { Key, ReactNode } from "react";

interface Props {
	onClick?: (event: React.MouseEvent) => void;
	children?: ReactNode;
}

export default function MenuItem(props: Props) {
	const { onClick, children } = props;

	return (
		<div
			className="flex flex-row gap-2 justify-center items-center cursor-pointer hover:bg-gray-600/10 rounded-sm"
			onClick={onClick}
		>
			{children}
		</div>
	);
}
