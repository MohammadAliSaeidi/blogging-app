import dbConnect from "../../../../lib/dbConnect";
import PostModel from "../../../../models/PostModel";

export async function POST(request: Request) {
	await dbConnect();

	const data = await request.json();
	
	try {
		const newPost = await PostModel.create(data);
		return new Response("Post was added successfully", { status: 201 });
	} catch (error) {
		return new Response("Adding new Post was failed", { status: 400 });
	}
}
