import Header from "@/components/Header";
import DarkModeToggle from "@/components/Header/DarkModeToggle";
import UserAvatarOrLogin from "@/components/UserAvatarOrLogin";
import WriteNewPost from "@/components/WriteNewPost";

export default async function Home() {
	return (
		<>
			<Header>
				<UserAvatarOrLogin />
				<WriteNewPost />
				<DarkModeToggle />
			</Header>
			<div className="page-content text-white h-[300vh]">Home page</div>
		</>
	);
}
