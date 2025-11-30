import Image from "next/image";
import Link from "next/link";
import upwardArrow from "~/assets/upwardArrow.svg";
import upwardArrowBrand from "~/assets/upwardArrowBrand.svg";
import CallToAction from "./call-to-action";
import Navigation from "./navigation";

export default function HomePage() {
	return (
		<main>
			<section className="relative min-h-dvh overflow-hidden">
				<div className="absolute inset-0 bg-[url('/bg-business.jpg')] bg-position-[90%_30%] bg-size-[150%_auto] bg-no-repeat" />
				<div className="absolute bg-black/50 inset-0" />

				<div className="relative z-10 h-full">
					<div className="">
						<Navigation />
					</div>
					<div className="">
						<CallToAction />
					</div>
				</div>
			</section>
			<section className="h-dvh">
				<div className="grid grid-rows-3">
					<div className="flex justify-between">
						<h1 className="text-[70px] max-w-2xl leading-tight">
							Helping Businesses Like Yours Reach New Heights
						</h1>
						<div className="flex items-center">
							<Link
								type="button"
								href="/"
								className="uppercase bg-[#D0FF00] px-6 py-1 rounded-4xl text-black text-lg font-medium flex justify-center items-center gap-2"
							>
								Read More
								<Image src={upwardArrow} alt="arrow" />
							</Link>
							<Link
								type="button"
								href="/"
								className="uppercase bg-black px-6 py-1 rounded-4xl text-brand text-lg font-medium flex justify-center items-center gap-2"
							>
								Learn More
								<Image src={upwardArrowBrand} alt="arrow" />
							</Link>
						</div>
					</div>
					<div></div>
					<div></div>
				</div>
			</section>
		</main>
	);
}
