import Image from "next/image";
import Menu from "../Menu";

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
		/>
	);
}
