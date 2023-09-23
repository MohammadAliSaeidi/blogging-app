import mongoose from "mongoose";

export interface PostModel extends mongoose.Document {
	title: string;
	content: string;
}

const PostSchema = new mongoose.Schema<PostModel>({
	title: {
		type: String,
		required: [true, "Please enter a title for the post."],
		maxlength: [60, "Title cannot be more that 60 characters"],
	},
	content: {
		type: String,
		required: [true, "The post content cannot be empty"],
	},
});

export default mongoose.models.PostModel || mongoose.model<PostModel>("PostModel", PostSchema);
