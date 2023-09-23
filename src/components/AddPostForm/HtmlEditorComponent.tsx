import { useController, useFormContext } from "react-hook-form";
import { Editor } from "@tinymce/tinymce-react";
import React from "react";

export const HtmlEditorComponent = ({ name }: { name: any }) => {
	const { control } = useFormContext<PostFormData>();
	const {
		field: { onChange, ...field },
	} = useController({ control, name });

	return (
		<Editor
			apiKey={"k9uiw5426yiym6l1en4jwcsm1v3n1lwjxgftji1e35gzptry"}
			{...field}
			onEditorChange={onChange}
			init={{
				ui_mode: "split",
				selector: "textarea#emoticons",
				menubar: false,
				height: 300,
				plugins: "emoticons",
				toolbar:
					"undo redo | blocks | bold italic strikethrough | " +
					"alignleft aligncenter alignright alignjustify | " +
					"outdent indent | numlist bullist | emoticons",
				content_style: "body { font-family:Roboto,Helvetica,Arial,sans-serif; font-size:16px }",
			}}
		/>
	);
};
