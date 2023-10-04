import { Document, Schema, models, model } from "mongoose";

export interface PostModel extends Document {
	title: string;
	content: string;
	userId: Schema.Types.ObjectId;
}

const PostSchema = new Schema<PostModel>({
	title: {
		type: String,
		required: [true, "Please enter a title for the post."],
		maxlength: [60, "Title cannot be more that 60 characters"],
		minlength: [3, "Title cannot be less than 3 characters"],
		trim: true,
	},
	content: {
		type: String,
		// required: [true, "The post content cannot be empty"],
	},
	userId: {
		type: Schema.Types.ObjectId,
		ref: "User",
		// required: [true, "Post without userId is not valid"],
	},
});

export default models.PostModel || model<PostModel>("PostModel", PostSchema);
