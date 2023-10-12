import Header from "./_components/Header";
import DarkModeToggle from "./_components/Header/DarkModeToggle";
import UserAvatarOrLogin from "./_components/UserAvatarOrLogin";
import WriteNewPost from "./_components/WriteNewPost";

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
