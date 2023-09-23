import { RegisterOptions, UseFormRegister, FieldValues, Path } from "react-hook-form";

type Props<TFormValues extends FieldValues> = {
	label: string;
	id?: string;
	type?: "normal" | "password";
	register?: UseFormRegister<TFormValues>;
	registerOptions?: RegisterOptions;
	registerLabel?: Path<TFormValues>;
};

export default function TextInput<TFormValues extends FieldValues>({
	id = "",
	label,
	type = "normal",
	register,
	registerOptions,
	registerLabel,
}: Props<TFormValues>) {
	return (
		<label className="flex flex-col gap-2 text-sm text-neutral-500 dark:text-neutral-400">
			{label}
			<input
				id={id}
				{...(register && registerLabel && register(registerLabel, registerOptions))}
				type={type}
				className="input"
			/>
		</label>
	);
}
