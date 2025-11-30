import CallToAction from "./call-to-action";
import Navigation from "./navigation";

export default function HomePage() {
	return (
		<main>
			<div className="relative min-h-dvh overflow-hidden">
				<div className="absolute inset-0 bg-[url('/bg-business.jpg')] bg-position-[90%_30%] bg-size-[150%_auto] bg-no-repeat" />
				<div className="absolute bg-black/50 inset-0" />

				<div className="relative z-10 h-full">
					<div className="p-10">
						<Navigation />
					</div>
					<div className="px-11">
						<CallToAction />
					</div>
				</div>
			</div>
		</main>
	);
}
