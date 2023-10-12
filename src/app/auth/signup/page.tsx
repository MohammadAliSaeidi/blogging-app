"use client";

import AuthenticationFormLayout from "@/app/_components/AuthenticationFormLayout";
import Button from "@/app/_components/Button";
import Header from "@/app/_components/Header";
import DarkModeToggle from "@/app/_components/Header/DarkModeToggle";
import TextInput from "@/app/_components/TextInput";
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
	const [error, setError] = useState<string>("");
	const router = useRouter();

	const { register, handleSubmit, formState } = useForm<IFormValues>({
		defaultValues: { email: "", password: "", username: "" },
	});

	const openSignUpPage = () => {
		router.push(`signin`);
	};

	const onSubmit = async (data: IFormValues) => {
		setIsLoading(true);
		setError("");
		try {
			await axios.post("/api/register", data, { validateStatus: () => false });
			setIsLoading(false);
		} catch (e: any) {
			console.log(e);
			setError(e.response.data.message);
			setIsLoading(false);
		}
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
						{error !== "" && <div className="form-error self-stretch text-center">{error}</div>}
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
