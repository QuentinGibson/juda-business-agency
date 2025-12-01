import Image from "next/image";
import Link from "next/link";
import contract from "~/assets/contract_edit.svg";
import upwardArrow from "~/assets/upwardArrow.svg";
import upwardArrowBrand from "~/assets/upwardArrowBrand.svg";

function BrighterFuture() {
	return (
		<section className="container py-30">
			<div className="mx-auto w-[1200px]">
				<h1 className="text-[70px] text-center">
					Together, We Build a Brighter Future for Your Business.
				</h1>
			</div>
			<div className="grid grid-cols-2 mt-30">
				<div className="relative w-full max-w-[821px]">
					<svg
						className="w-full h-auto"
						viewBox="0 0 821 637"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
					>
						<defs>
							<clipPath id="custom-shape-clip">
								<path d="M766.37 487.003C796.541 487.003 821 462.583 821 432.459L821 64.2844C821 28.7811 792.174 -1.26004e-06 756.614 -2.81438e-06L64.3856 -3.30727e-05C28.8264 -3.4627e-05 2.54448e-05 28.7811 2.38929e-05 64.2844L1.66869e-06 572.716C1.16784e-07 608.219 28.8264 637 64.3856 637L616.137 637C646.308 637 670.767 612.58 670.767 582.456L670.767 551.288C670.767 515.784 699.593 487.003 735.153 487.003L766.37 487.003Z" />
							</clipPath>
						</defs>

						{/* Content with gradient - INSIDE foreignObject */}
						<foreignObject
							x="0"
							y="0"
							width="821"
							height="637"
							clipPath="url(#custom-shape-clip)"
						>
							<div className="w-full h-full grid grid-cols-2 p-20">
								<div className="flex flex-col gap-y-12">
									<div className="bg-brand flex justify-center items-center size-20 rounded-full">
										<Image src={contract} alt="A paper and pen" />
									</div>
									<h2 className="text-black text-4xl font-medium">
										Brighter Future for Your Business
									</h2>
									<span className="text-base">
										From innovative marketing strategies to operational
										excellence, we provide expert guidance to help your
									</span>
									<div>
										<Link
											type="button"
											href="/"
											className="uppercase bg-black px-6 py-1 rounded-4xl text-brand text-lg font-medium inline-flex justify-center items-center gap-2"
										>
											Read More
											<Image src={upwardArrowBrand} alt="arrow" />
										</Link>
									</div>
								</div>
								<div className="justify-self-end mt-10">
									<div className="flex flex-col gap-y-25">
										<div className="flex flex-col gap-y-4">
											<span className="text-4xl font-medium">472+</span>
											<span className="uppercase font-normal text-lg">
												Expert Solutions
											</span>
										</div>

										<div className="flex flex-col gap-y-4">
											<span className="text-4xl font-medium">597+</span>
											<span className="uppercase font-normal text-lg">
												Enterprises to Thrive
											</span>
										</div>
									</div>
								</div>
							</div>
						</foreignObject>

						{/* Border outline */}
						<path
							d="M820.5 64.2842L820.5 432.459C820.5 462.306 796.266 486.503 766.37 486.503L735.152 486.503C699.318 486.503 670.267 515.507 670.267 551.287L670.267 582.456C670.266 612.303 646.033 636.5 616.137 636.5L64.3857 636.5C29.102 636.5 0.500099 607.942 0.500002 572.716L0.500024 64.2841C0.500158 29.0578 29.102 0.499965 64.3858 0.499967L756.614 0.499997C791.898 0.499999 820.5 29.0579 820.5 64.2842Z"
							stroke="black"
							strokeOpacity="0.22"
							fill="none"
						/>
					</svg>
					<div className="absolute bg-brand rounded-full flex items-center justify-center size-20 bottom-0 right-4">
						<Image
							src={upwardArrow}
							alt="Arrow pointing upwards"
							sizes="34px"
						/>
					</div>
				</div>
				<div className="relative w-full max-w-[566px] justify-self-end flex flex-col gap-y-12">
					<svg
						className="w-full h-auto"
						viewBox="0 0 566 468"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
					>
						<defs>
							<clipPath id="shape-clip-path">
								<path d="M37.6622 103.373C16.862 103.373 4.18683e-06 120.203 3.93926e-06 140.963L5.28305e-07 423.5C2.3653e-07 447.968 19.873 467.803 44.3876 467.803L521.612 467.803C546.127 467.803 566 447.968 566 423.5L566 44.3028C566 19.8351 546.127 9.80652e-05 521.612 9.77729e-05L141.233 9.32369e-05C120.433 9.29889e-05 103.571 16.8298 103.571 37.5903L103.571 59.0704C103.571 83.5381 83.6981 103.373 59.1835 103.373L37.6622 103.373Z" />
							</clipPath>
						</defs>

						{/* Background shape */}
						<path
							d="M37.6622 103.373C16.862 103.373 4.18683e-06 120.203 3.93926e-06 140.963L5.28305e-07 423.5C2.3653e-07 447.968 19.873 467.803 44.3876 467.803L521.612 467.803C546.127 467.803 566 447.968 566 423.5L566 44.3028C566 19.8351 546.127 9.80652e-05 521.612 9.77729e-05L141.233 9.32369e-05C120.433 9.29889e-05 103.571 16.8298 103.571 37.5903L103.571 59.0704C103.571 83.5381 83.6981 103.373 59.1835 103.373L37.6622 103.373Z"
							fill="white"
						/>
						<path
							d="M0.500001 423.5L0.500004 140.963C0.500021 120.48 17.1371 103.874 37.6621 103.874L59.1836 103.874C83.9733 103.873 104.071 83.8153 104.071 59.0708L104.071 37.5903C104.071 17.1069 120.708 0.50049 141.233 0.50049L521.612 0.500495C545.852 0.500495 565.5 20.1125 565.5 44.3032L565.5 423.5C565.5 447.691 545.852 467.303 521.612 467.303L44.3877 467.303C20.1483 467.303 0.500013 447.691 0.500001 423.5Z"
							stroke="black"
							strokeOpacity="0.22"
							fill="none"
						/>

						{/* Content using foreignObject */}
						<foreignObject
							x="0"
							y="0"
							width="566"
							height="468"
							clipPath="url(#shape-clip-path)"
						>
							<div className="w-full h-full p-16">
								<div className="grid grid-rows-2 justify-items-end">
									<div className="inline-flex flex-col w-[300px] gap-y-4 items-end">
										<span className="text-black text-sm text-center bg-brand px-2.5 py-1.5 rounded-4xl">
											Helping Businesses
										</span>
										<span className="text-black text-sm text-end">
											From innovative marketing strategies to operational
											excellence
										</span>
									</div>
									<div className="flex flex-col w-[200px] justify-self-start">
										<span className="text-[59px]">52K+</span>
										<span className="text-xl">
											Your Success Is Our Business
										</span>
									</div>
								</div>
							</div>
						</foreignObject>
					</svg>
					<div className="flex justify-end gap-x-5">
						<Link
							type="button"
							href="/"
							className="uppercase bg-brand px-6 py-4 rounded-4xl text-black text-lg font-medium flex justify-center items-center gap-2"
						>
							Read More
							<Image src={upwardArrow} alt="arrow" />
						</Link>
						<Link
							type="button"
							href="/"
							className="uppercase bg-black px-6 py-4 rounded-4xl text-brand text-lg font-medium flex justify-center items-center gap-2"
						>
							Learn More
							<Image src={upwardArrowBrand} alt="arrow" />
						</Link>
					</div>
				</div>
			</div>
		</section>
	);
}

export default BrighterFuture;
