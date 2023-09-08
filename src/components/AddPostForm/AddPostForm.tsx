"use client";

import React from "react";
import { FormProvider, useForm } from "react-hook-form";
import { HtmlEditorComponent } from "@/components/AddPostForm/HtmlEditorComponent";

export default function AddPostForm() {
	const methods = useForm<PostFormData>();

	const onSubmit = methods.handleSubmit((data) => {
        console.log('data', data);
        
		fetch("api/AddPost", {
			method: "POST",
			body: JSON.stringify(data),
		})
			.then((response) => console.log(response))
			.catch((error) => console.log(error));
	});

	return (
		<FormProvider {...methods}>
			<form onSubmit={onSubmit}>
				<input
					{...methods.register("title")}
					type={"text"}
					placeholder={"title"}
				/>
				<HtmlEditorComponent name="content" />
				<input type="submit" />
			</form>
		</FormProvider>
	);
}
