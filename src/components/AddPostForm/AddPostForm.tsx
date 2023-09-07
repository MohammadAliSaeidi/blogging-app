"use client";

import React, { useRef } from "react";
import { Editor } from "@tinymce/tinymce-react";

export default function AddPostForm() {
	const editorRef = useRef(null);
	const log = (e: any) => {
		e.preventDefault();
		if (editorRef.current) {
			console.log(editorRef.current.getContent());
		}
	};
	return (
		<form>
			<label>
				Title
				<input className="input" type="text" />
			</label>
			<Editor
				onInit={(evt, editor) => (editorRef.current = editor)}
				initialValue="<p>Type your post content here...</p>"
				init={{
					content_css: "dark",
					skin: "oxide-dark",
					selector: "textarea#emoticons",
					menubar: false,
					height: 300,
					plugins: "emoticons",
					toolbar:
						"undo redo | blocks | bold italic strikethrough | " +
						"alignleft aligncenter alignright alignjustify | " +
						"outdent indent | numlist bullist | emoticons",
					content_style:
						"body { font-family:Roboto,Helvetica,Arial,sans-serif; font-size:16px }",
				}}
			/>
			<button onClick={log}>Log editor content</button>
		</form>
	);
}
