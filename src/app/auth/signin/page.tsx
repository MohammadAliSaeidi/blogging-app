"use client";

import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import { signIn, useSession } from "next-auth/react";
import { useState } from "react";
import DarkModeToggle from "@/app/_components/Header/DarkModeToggle";
import Header from "@/app/_components/Header";
import Button from "@/app/_components/Button";
import AuthenticationFormLayout from "@/app/_components/AuthenticationFormLayout";
import TextInput from "@/app/_components/TextInput";

export interface IFormValues {
	usernameOrEmail: string;
	password: string;
}

export default function SignIn() {
	const { handleSubmit, register, formState } = useForm<IFormValues>({
		defaultValues: { usernameOrEmail: "", password: "" },
	});
	const [loading, setLoading] = useState<boolean>(false);
	const { status } = useSession();
	const router = useRouter();

	const onSubmit = async (data: IFormValues) => {
		try {
			setLoading(true);
			await signIn("Credentials", {
				redirect: false,
				usernameOrEmail: data.usernameOrEmail,
				password: data.password,
				callbackUrl: "/",
			});
			setLoading(false);
		} catch (error: any) {
			console.error(error);
		}
		if (status === "authenticated") {
			console.log(status);
			router.push("/");
		}
	};

	return (
		<>
			<Header>
				<DarkModeToggle />
				<Button size="small" onClick={() => router.push(`signup`)}>
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
						<Button
							disabled={!formState.isValid}
							size="large"
							type="submit"
							style="button-filled-invert"
							className="mt-3"
							loading={loading}
						>
							Log in
						</Button>
					</form>
				</section>
			</AuthenticationFormLayout>
		</>
	);
}
