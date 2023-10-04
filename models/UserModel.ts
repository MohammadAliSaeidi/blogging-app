import { Document, ObjectId, Schema, model, models } from "mongoose";

interface UserModel extends Document {
	username: string;
	email: string;
	password: string;
	image: string;
	createdAt: Date;
	updatedAt: Date;
	role: string;
	bio: string;
	following: ObjectId[];
	followers: ObjectId[];
	posts: ObjectId[];
}

const UserSchema = new Schema<UserModel>({
	username: {
		type: String,
		required: [true, "Username is required"],
		maxlength: [30, "Username must be less than 30 characters"],
		minlength: [4, "Username must be more than 4 characters"],
		unique: true,
		trim: true,
		lowercase: true,
	},
	email: {
		type: String,
		required: [true, "Email is required"],
		unique: true,
		trim: true,
		lowercase: true,
	},
	password: {
		type: String,
		required: [true, "Password is required"],
		minlength: [8, "Password must be more than 8 characters"],
		maxlength: [100, "Password must be less than 100 characters"],
		trim: true,
	},
	image: {
		type: String,
	},
	createdAt: {
		type: Date,
		default: Date.now,
	},
	updatedAt: {
		type: Date,
		default: Date.now,
	},
	role: {
		type: String,
		default: "user",
	},
	bio: {
		type: String,
		default: "",
	},
	following: {
		type: [Schema.Types.ObjectId],
		ref: "User",
		default: [],
	},
	followers: {
		type: [Schema.Types.ObjectId],
		ref: "User",
		default: [],
	},
	posts: {
		type: [Schema.Types.ObjectId],
		ref: "Post",
		default: [],
	},
});

export default models.UserModel || model<UserModel>("UserModel", UserSchema);
