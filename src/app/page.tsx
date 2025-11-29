import Navigation from "./navigation";

export default function HomePage() {
	return (
		<main>
			<div className="bg-black/50">
				<div className="h-dvh bg-[url('/bg-business.jpg')] bg-position-[-750px_-200px] bg-size-[150%_auto] bg-no-repeat">
					<Navigation />
				</div>
			</div>
		</main>
	);
}
