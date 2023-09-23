"use client";

import AuthenticationFormLayout from "@/components/AuthenticationFormLayout";
import Button from "@/components/Button";
import Header from "@/components/Header";
import TextInput from "@/components/TextInput";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import DarkModeToggle from "@/components/Header/DarkModeToggle";

export interface IFormValues {
	usernameOrEmail: string;
	password: string;
}

export default function SignIn() {
	const { handleSubmit, register, formState } = useForm<IFormValues>({
		defaultValues: { usernameOrEmail: "", password: "" },
	});

	const router = useRouter();

	const onSubmit = (data: IFormValues) => {
		console.log(data);
	};

	const openSignUpPage = () => {
		router.push(`signup`);
	};

	return (
		<>
			<Header>
				<DarkModeToggle />
				<Button size="small" onClick={openSignUpPage}>
					Sign up
				</Button>
			</Header>
			<AuthenticationFormLayout>
				<h1 className="h1">Log in to Blogger</h1>
				<section className="flex flex-col gap-2 my-8">
					<form className="flex flex-col items-stretch w-96 gap-3" onSubmit={handleSubmit(onSubmit)}>
						<TextInput<IFormValues>
							registerLabel="usernameOrEmail"
							register={register}
							registerOptions={{ required: true }}
							label="Username or Email"
						/>
						<TextInput
							registerLabel="password"
							register={register}
							registerOptions={{ required: true }}
							label="Password"
							type="password"
						/>
						<Button disabled={!formState.isValid} size="large" type="submit" className="mt-3">
							Log in
						</Button>
					</form>
				</section>
			</AuthenticationFormLayout>
		</>
	);
}
