import React from "react";
import Header from "../_components/Header";
import AddPostForm from "../_components/AddPostForm";

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
