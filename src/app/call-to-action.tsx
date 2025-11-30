import Image from "next/image";
import Link from "next/link";
import arrow from "~/assets/arrow.svg";
import downwardArrow from "~/assets/arrow_outward.svg";
import client1 from "~/assets/images/client1.jpg";
import client2 from "~/assets/images/client2.jpg";
import client3 from "~/assets/images/client3.jpg";

function CallToAction() {
	const clients = [
		{ id: 1, src: client1, alt: "Client 1" },
		{ id: 2, src: client2, alt: "Client 2" },
		{ id: 3, src: client3, alt: "Client 3" },
	];

	return (
		<div className="text-white">
			<div className="grid grid-cols-[50%_35%] justify-between items-end">
				{/*Left Side*/}
				<div className="gap-y-12 flex flex-col">
					<h1 className="text-[70px] font-normal">
						Unlock Your Business Potential with Our Expert Solutions.
					</h1>
					<span className="text-xs text-white/80 font-medium w-[55%] inline-block">
						From innovative marketing strategies to operational excellence, we
						provide expert guidance to help your business grow, scale, and
						thrive.
					</span>
					<div className="flex gap-4">
						<CtaFact value={"472+"} description="Expert Solutions" />
						<CtaFact value={"597+"} description={"Enterprises to thrvie"} />
					</div>
					<div className="flex gap-4">
						<Link
							type="button"
							href="/"
							className="uppercase bg-[#D0FF00] px-6 py-1 rounded-4xl text-black text-lg font-medium flex justify-center items-center gap-2"
						>
							Read More
							<Image src={arrow} alt="arrow" />
						</Link>
						<Link
							type="button"
							href="/"
							className="uppercase bg-white px-6 py-1 rounded-4xl text-black text-lg font-medium flex justify-center items-center gap-2"
						>
							Learn More
							<Image src={arrow} alt="arrow" />
						</Link>
					</div>
				</div>
				{/* Right Side */}
				<div>
					<div className="relative w-full max-w-[580px]">
						<svg
							className="w-full h-auto"
							viewBox="0 0 580 453"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
						>
							<foreignObject x="-13.2" y="-13.2" width="606.4" height="479.4">
								<div
									style={{
										backdropFilter: "blur(6.6px)",
										clipPath: "url(#bgblur_0_1_22_clip_path)",
										height: "100%",
										width: "100%",
									}}
								></div>
							</foreignObject>
							<g data-figma-bg-blur-radius="13.2">
								<path
									d="M0 41C0 18.3563 18.3563 0 41 0H443C465.644 0 484 18.3563 484 41V55C484 77.0914 501.909 95 524 95H539C561.644 95 580 113.356 580 136V412C580 434.644 561.644 453 539 453H311.252C289.876 453 269.376 429 248 429H41C18.3563 429 0 410.644 0 388V41Z"
									fill="white"
									fillOpacity="0.06"
								/>
								<path
									d="M41 0.5H443C465.368 0.5 483.5 18.6325 483.5 41V55C483.5 77.3675 501.632 95.5 524 95.5H539C561.368 95.5 579.5 113.632 579.5 136V412C579.5 434.368 561.368 452.5 539 452.5H311.252C300.724 452.5 290.377 446.585 279.875 440.566C269.439 434.586 258.847 428.5 248 428.5H41C18.6325 428.5 0.5 410.368 0.5 388V41C0.5 18.9818 18.0705 1.06791 39.9551 0.513672L41 0.5Z"
									stroke="white"
									strokeOpacity="0.29"
								/>
							</g>
							<defs>
								<clipPath
									id="bgblur_0_1_22_clip_path"
									transform="translate(13.2 13.2)"
								>
									<path d="M0 41C0 18.3563 18.3563 0 41 0H443C465.644 0 484 18.3563 484 41V55C484 77.0914 501.909 95 524 95H539C561.644 95 580 113.356 580 136V412C580 434.644 561.644 453 539 453H311.252C289.876 453 269.376 429 248 429H41C18.3563 429 0 410.644 0 388V41Z" />
								</clipPath>
							</defs>
						</svg>
						<div
							className="absolute inset-0 py-8 px-10 xl:py-14 xl:px-10"
							style={{
								clipPath: "url(#bgblur_0_1_22_clip_path)",
							}}
						>
							<div className="w-full h-full flex flex-col items-start justify-between">
								<span className="text-3xl xl:text-[47px] font-medium leading-tight">
									Your Partner in Business Growth
								</span>
								<span className="font-medium text-sm xl:text-base">
									From innovative marketing strategies to operational
									excellence, we provide expert
								</span>
								<div className="inline-flex items-center gap-4 bg-brand rounded-full lg:px-4 px-6 py-1 shadow-lg self-end">
									<div className="flex -space-x-3">
										{clients.map((client) => (
											<div
												key={client.id}
												className="relative size-10 xl:size-12 rounded-full border-2 border-brand overflow-hidden bg-gray-200"
											>
												<Image
													className="object-cover"
													fill
													alt={client.alt}
													src={client.src}
													sizes="48px"
													quality={95}
												/>
											</div>
										))}
									</div>
									<div className="flex flex-col">
										<span className="text-black font-bold text-xl">1000k+</span>
										<span className="text-black text-xs py-0.5 rounded-full">
											Our Client Here
										</span>
									</div>
								</div>
							</div>
						</div>
						<div className="absolute top-[-2%] right-0 bg-brand rounded-full flex justify-center items-center shadow-lg size-16 2xl:size-18">
							<Image alt="arrow pointed downward" src={downwardArrow} />
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

function CtaFact({
	value,
	description,
}: {
	value: string;
	description: string;
}) {
	return (
		<div className="flex flex-col w-30">
			<span className="font-medium text-3xl">{value}</span>
			<span className="text-lg uppercase font-extralight">{description}</span>
		</div>
	);
}

export default CallToAction;
