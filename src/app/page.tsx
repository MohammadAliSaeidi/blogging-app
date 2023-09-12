import prisma from "../../lib/dbConnectPostgres";

export default async function Home() {
	const users = await prisma.user.findMany();
	return (
		<div className="page-content">
			Home page
			<ul>
				{users.map((user) => {
					return <li key={user.id}>{user.name}</li>;
				})}
			</ul>
		</div>
	);
}