export default function AuthenticationFormLayout({ children }: { children: React.ReactNode }) {
	return (
		<div className="text-white absolute left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%]">{children}</div>
	);
}
