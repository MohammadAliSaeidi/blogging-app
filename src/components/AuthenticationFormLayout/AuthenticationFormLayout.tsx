export default function AuthenticationFormLayout({ children }: { children: React.ReactNode }) {
	return (
		<div className="relative text-white w-screen h-screen flex justify-center items-center flex-col">
			{children}
		</div>
	);
}
