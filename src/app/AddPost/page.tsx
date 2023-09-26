import AddPostForm from "@/components/AddPostForm/AddPostForm";
import Header from "@/components/Header";
import React from "react";

export default function page() {
	return (
		<>
			<Header>
			</Header>
			<div className="page-content">
				<AddPostForm />
			</div>
		</>
	);
}
