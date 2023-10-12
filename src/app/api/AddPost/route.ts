import { NextRequest, NextResponse } from "next/server";
import dbConnect from "../../../../lib/dbConnectMongo";
import PostModel from "../../../../models/PostModel";

const validateData = (data: any): boolean => {
	// TODO: add post function validation needs to be implemented correctly 
	return data && typeof data === "object" && data.title && data.content;
};

export async function POST(request: NextRequest) {
	await dbConnect();

	const data = await request.json();

	if (!validateData(data)) {
		return new NextResponse("Invalid data", { status: 400 });
	}

	try {
		const newPost = await PostModel.create(data);
		return new NextResponse("Post was added successfully", { status: 201 });
	} catch (error) {
		return new NextResponse("Adding new post failed", { status: 500 });
	}
}
