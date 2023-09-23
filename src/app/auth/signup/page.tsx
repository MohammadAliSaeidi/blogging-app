"use client";

import AuthenticationFormLayout from "@/components/AuthenticationFormLayout";
import Button from "@/components/Button";
import Header from "@/components/Header";
import DarkModeToggle from "@/components/Header/DarkModeToggle";
import TextInput from "@/components/TextInput";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";

interface IFormValues {
	email: string;
	username: string;
	password: string;
}

export default function SignUp() {
	const [loading, setIsLoading] = useState<boolean>(false);
	const router = useRouter();

	const { register, handleSubmit, formState } = useForm<IFormValues>({
		defaultValues: { email: "", password: "", username: "" },
	});

	const openSignUpPage = () => {
		router.push(`signin`);
	};

	const onSubmit = async (data: IFormValues) => {
		setIsLoading(true);
		const response = await axios.post("/api/register", data);
		setIsLoading(false);
	};

	return (
		<>
			<Header>
				<DarkModeToggle />
				<Button size="small" onClick={openSignUpPage}>
					Log in
				</Button>
			</Header>
			<AuthenticationFormLayout>
				<h1 className="h1">Sign up in Blogger</h1>
				<section className="relative flex flex-col gap-2 my-8">
					<form className="flex flex-col items-stretch w-96 gap-3" onSubmit={handleSubmit(onSubmit)}>
						<TextInput<IFormValues>
							registerLabel="email"
							register={register}
							registerOptions={{ required: true }}
							label="Email"
						/>
						<TextInput<IFormValues>
							registerLabel="username"
							register={register}
							registerOptions={{ required: true }}
							label="Username"
						/>
						<TextInput
							registerLabel="password"
							register={register}
							registerOptions={{ required: true }}
							label="Password"
							type="password"
						/>
						<Button
							loading={loading}
							disabled={!formState.isValid}
							size="large"
							style="button-filled-invert"
							type="submit"
							className="mt-3"
						>
							Sign up
						</Button>
					</form>
				</section>
			</AuthenticationFormLayout>
		</>
	);
}
