import Image from "next/image";
import Link from "next/link";
import leftOutwardArrow from "~/assets/arrow_outward_left.svg";
import officeGroup from "~/assets/images/group-office.jpg";
import laptopOffice from "~/assets/images/laptop-office.jpg";
import logo5 from "~/assets/logo/Frame.png";
import logo1 from "~/assets/logo/logoipsum-220.png";
import logo2 from "~/assets/logo/logoipsum-285.png";
import logo3 from "~/assets/logo/logoipsum-297.png";
import logo4 from "~/assets/logo/logoipsum-330.png";
import upwardArrow from "~/assets/upwardArrow.svg";
import upwardArrowBrand from "~/assets/upwardArrowBrand.svg";
import BrighterFuture from "./brighter-future";
import CallToAction from "./call-to-action";
import Innovation from "./innovation";
import Navigation from "./navigation";
import WorldSection from "./world-section";

export default function HomePage() {
	const logos = [
		{ id: 1, src: logo1, alt: "A logo Ipsum" },
		{ id: 2, src: logo2, alt: "A logo Ipsum" },
		{ id: 3, src: logo3, alt: "A logo Ipsum" },
		{ id: 4, src: logo4, alt: "A logo Ipsum" },
		{ id: 5, src: logo5, alt: "A logo Ipsum" },
	];
	return (
		<main>
			<section className="relative min-h-dvh pb-50 overflow-hidden">
				<div className="absolute inset-0 bg-[url('/bg-business.jpg')] bg-position-[90%_30%] bg-size-[150%_auto] bg-no-repeat" />
				<div className="absolute bg-black/50 inset-0" />
				<div className="relative z-10 h-full">
					<div className="pt-10 container">
						<Navigation />
					</div>
					<div className="pt-20 container">
						<CallToAction />
					</div>
				</div>
			</section>
			<section className="container py-30">
				<div className="grid grid-rows-[270px_580px_50px] gap-30">
					<div className="flex justify-between">
						<h1 className="text-[70px] max-w-2xl leading-tight">
							Helping Businesses Like Yours Reach New Heights
						</h1>
						<div className="flex gap-x-5 items-center">
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
					<div className="grid grid-cols-3 items-end">
						<div className="flex flex-col justify-between h-full">
							<div className="flex flex-col">
								<span className="text-[59px]">52K+</span>
								<span className="text-[22px]">
									Your Success Is Our Business
								</span>
							</div>
							<div className="flex flex-col">
								<span className="text-[59px]">
									Your Partner in Business Growth
								</span>
								<span className="text-[22px]">
									Empower your business with our comprehensive agency solutions
									tailored to meet your unique needs.
								</span>
							</div>
						</div>
						<div className="relative w-full max-w-[383px]">
							<svg
								className="w-full h-auto"
								viewBox="0 0 383 442"
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
							>
								<defs>
									<clipPath id="image-clip">
										<path d="M32 87C14.3269 87 0 101.327 0 119V404C0 424.987 17.0132 442 38 442H345C365.987 442 383 424.987 383 404V38C383 17.0132 365.987 0 345 0H130C112.327 0 98 14.3269 98 32V49C98 69.9868 80.9868 87 60 87H32Z" />
									</clipPath>
								</defs>
							</svg>

							<div
								className="absolute inset-0"
								style={{ clipPath: "url(#image-clip)" }}
							>
								<Image
									className="w-full h-full object-cover"
									src={laptopOffice}
									alt="Four people group up to look at a laptop"
									fill
								/>
							</div>

							<div className="absolute -top-10 -left-5 size-20 bg-brand rounded-full flex justify-center items-center">
								<Image
									src={leftOutwardArrow}
									alt="Arrow pointing up and left"
								/>
							</div>
						</div>
						<div className="rounded-4xl overflow-hidden h-[550px] relative">
							<Image
								fill
								className="object-cover"
								src={officeGroup}
								alt="A group of people working in the office"
							/>
						</div>
					</div>
					<div className="flex gap-24 py-15">
						{logos.map((logo) => (
							<div key={logo.id}>
								<Image
									width={192}
									height={50}
									className=""
									src={logo.src}
									alt={logo.alt}
								/>
							</div>
						))}
					</div>
				</div>
			</section>
			<BrighterFuture />
			<WorldSection />
			<Innovation />
		</main>
	);
}
