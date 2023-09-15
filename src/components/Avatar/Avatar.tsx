import Image from "next/image";
import Menu from "../Menu";
import { MouseEvent } from "react";
import { signOut } from "next-auth/react";
import MenuItem from "../Menu/MenuItem";

export interface Props {
	image: string | null | undefined;
}

export default function Avatar(props: Props) {
	const { image } = props;

	return (
		<Menu
			customMenuButton={
				<div className="overflow-clip rounded-full">
					{image ? (
						<Image
							src={image as string}
							width={36}
							height={36}
							alt={"Picture of the user"}
						/>
					) : (
						<div className="w-9 h-9 bg-gray-400"></div>
					)}
				</div>
			}
		>
			<MenuItem
				onClick={(event: React.MouseEvent) => {
					event.preventDefault();
					signOut();
				}}
			>
				Logout
				<svg
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 20 20"
					fill="currentColor"
					className="w-5 h-5"
				>
					<path
						fillRule="evenodd"
						d="M3 4.25A2.25 2.25 0 015.25 2h5.5A2.25 2.25 0 0113 4.25v2a.75.75 0 01-1.5 0v-2a.75.75 0 00-.75-.75h-5.5a.75.75 0 00-.75.75v11.5c0 .414.336.75.75.75h5.5a.75.75 0 00.75-.75v-2a.75.75 0 011.5 0v2A2.25 2.25 0 0110.75 18h-5.5A2.25 2.25 0 013 15.75V4.25z"
						clipRule="evenodd"
					/>
					<path
						fillRule="evenodd"
						d="M6 10a.75.75 0 01.75-.75h9.546l-1.048-.943a.75.75 0 111.004-1.114l2.5 2.25a.75.75 0 010 1.114l-2.5 2.25a.75.75 0 11-1.004-1.114l1.048-.943H6.75A.75.75 0 016 10z"
						clipRule="evenodd"
					/>
				</svg>
			</MenuItem>
		</Menu>
	);
}
