"use client";

import React from "react";
import { FormProvider, useForm } from "react-hook-form";
import { HtmlEditorComponent } from "@/components/AddPostForm/HtmlEditorComponent";
import Button from "../Button";

export default function AddPostForm() {
	const methods = useForm<PostFormData>();

	const onSubmit = methods.handleSubmit((data) => {
		console.log("data", data);

		fetch("api/AddPost", {
			method: "POST",
			body: JSON.stringify(data),
		})
			.then((response) => console.log(response))
			.catch((error) => console.log(error));
	});

	return (
		<FormProvider {...methods}>
			{/* onSubmit={onSubmit} */}
			<form className="flex flex-col gap-2" onSubmit={(e) => e.preventDefault()}>
				<input {...methods.register("title")} className="input" type={"text"} placeholder={"title"} />
				<HtmlEditorComponent name="content" />

				<button draggable={false}></button>
				<div className="flex flex-row-reverse gap-2 justify-start">
					<Button type="submit">
						Post
						<svg
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 24 24"
							fill="currentColor"
							className="w-5 h-5"
						>
							<path d="M3.478 2.405a.75.75 0 00-.926.94l2.432 7.905H13.5a.75.75 0 010 1.5H4.984l-2.432 7.905a.75.75 0 00.926.94 60.519 60.519 0 0018.445-8.986.75.75 0 000-1.218A60.517 60.517 0 003.478 2.405z" />
						</svg>
					</Button>
					<Button type="submit" style="button-outline">
						{" "}
						Save as draft
						<svg
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 24 24"
							strokeWidth={1.5}
							stroke="currentColor"
							className="w-6 h-6"
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"
							/>
						</svg>
					</Button>
				</div>
			</form>
		</FormProvider>
	);
}
