import { NextRequest, NextResponse } from "next/server";
import dbConnect from "../../../../lib/dbConnectMongo";
import PostModel from "../../../../models/PostModel";

const DEFAULT_SKIP = 0;
const DEFAULT_LIMIT = 10;

const parseQueryParam = (value: string | null): number => {
	return Number(value) || 0;
};

export async function GET(request: NextRequest) {
	await dbConnect();

	const searchParams = request.nextUrl.searchParams;

	const skip = parseQueryParam(searchParams.get("skip")) || DEFAULT_SKIP;
	const limit = parseQueryParam(searchParams.get("limit")) || DEFAULT_LIMIT;

	try {
		const posts = await PostModel.find().skip(skip).limit(limit);

		return new NextResponse(JSON.stringify(posts), { status: 200 });
	} catch (error) {
		return new NextResponse(JSON.stringify(error), { status: 500 });
	}
}
