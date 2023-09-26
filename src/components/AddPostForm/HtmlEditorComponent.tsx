import { useController, useFormContext } from "react-hook-form";
import React, { useRef } from "react";
import { Editor } from "@tinymce/tinymce-react";
import { useTheme } from "next-themes";
import Script from "next/script";
import "../../utils/prismjs/prism.css"

export const HtmlEditorComponent = ({ name }: { name: any }) => {
	const { control } = useFormContext<PostFormData>();
	const editorRef = useRef<unknown>();
	const { theme } = useTheme();
	const {
		field: { onChange, ...field },
	} = useController({ control, name });

	return (
		<>
			<Script src="/prism.js" />
			<Editor
				tinymceScriptSrc={process.env.NEXT_PUBLIC_BASE_URL + "/tinymce/tinymce.min.js"}
				onInit={(evt, editor) => (editorRef.current = editor)}
				{...field}
				onEditorChange={onChange}
				init={{
					skin: theme === "dark" ? "dark-high-contrast" : "oxide",
					content_css: "dark-high-contrast",
					ui_mode: "split",
					selector: "textarea#emoticons",
					menubar: false,
					height: 600,
					plugins: ["emoticons", "codesample"],
					toolbar:
						"undo redo | blocks | bold italic strikethrough | " +
						"alignleft aligncenter alignright alignjustify | " +
						"outdent indent | numlist bullist | emoticons | codesample",
					codesample_languages: [
						{ text: "C#", value: "csharp" },
						{
							text: "SQL",
							value: "sql",
						},
					],
					content_style: "body { font-family:Roboto,Helvetica,Arial,sans-serif; font-size:16px }",
				}}
			/>
		</>
	);
};
