import Image from "next/image";
import contractIcon from "~/assets/contract_edit.svg";
import whiteBoard from "~/assets/images/whiteboard-office.jpg";
import arrowOutward from "~/assets/upwardArrow.svg";

function Innovation() {
	return (
		<section className="container py-30">
			<div className="flex text-white justify-between">
				<div className="relative w-[580px] h-[925px] rounded-4xl overflow-hidden">
					<Image
						fill
						src={whiteBoard}
						alt="Company around whiteboard."
						className="object-cover"
					/>
					<div className="absolute bg-black/50 z-10 w-full h-full"></div>
					<div className="absolute grid grid-rows-2 z-20 p-13 py-10 h-full">
						<div className="inset-0 inline-flex items-start w-[400px] gap-3 h-1 flex-wrap">
							<span className="px-2 py-1 bg-brand text-black text-xs rounded-4xl">
								Helping Businesses
							</span>
							<span className="bg-white/17 px-2 py-1 text-white rounded-4xl text-xs">
								Reach New Heights
							</span>
							<span className="bg-white/17 px-2 py-1 text-white rounded-4xl text-xs">
								Partner in Business Growth and Success.
							</span>
						</div>
						<div className="self-end flex flex-col gap-12 mb-10">
							<span className="text-[47px] font-medium">
								Your Partner in Business Growth
							</span>
							<span className="font-medium w-[400px]">
								From innovative marketing strategies to operational excellence,
								we provide expert
							</span>
						</div>
					</div>
				</div>
				<div className="text-black text-[70px] w-[751px] flex flex-col gap-y-38">
					<h1>Innovation, Growth, and Excellence for Your Business.</h1>
					<div className="flex items-start justify-between">
						<div className="relative w-full max-w-[329px]">
							<svg
								className="w-full h-auto"
								viewBox="0 0 329 446"
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
							>
								<defs>
									<clipPath id="content-clip">
										<path d="M251.749 28.9922C251.819 13.5284 239.341 0.935162 223.877 0.864469L34.8789 0.000466931C16.6537 -0.0828494 1.81167 14.6241 1.72835 32.8493L0.000349136 410.845C-0.0829672 429.071 14.6239 443.913 32.8492 443.996L293.846 445.189C312.072 445.272 326.914 430.565 326.997 412.34L328.396 106.343C328.466 90.8796 315.988 78.2864 300.524 78.2157L284.524 78.1425C266.299 78.0592 251.592 63.2172 251.675 44.992L251.749 28.9922Z" />
									</clipPath>
								</defs>

								{/* Background shape */}
								<path
									d="M251.749 28.9922C251.819 13.5284 239.341 0.935162 223.877 0.864469L34.8789 0.000466931C16.6537 -0.0828494 1.81167 14.6241 1.72835 32.8493L0.000349136 410.845C-0.0829672 429.071 14.6239 443.913 32.8492 443.996L293.846 445.189C312.072 445.272 326.914 430.565 326.997 412.34L328.396 106.343C328.466 90.8796 315.988 78.2864 300.524 78.2157L284.524 78.1425C266.299 78.0592 251.592 63.2172 251.675 44.992L251.749 28.9922Z"
									fill="white"
								/>

								{/* Content overlay using foreignObject */}
								<foreignObject
									x="0"
									y="0"
									width="329"
									height="446"
									clipPath="url(#content-clip)"
								>
									<div className="bg-white">
										<div className="flex flex-col px-15 py-10 gap-y-12">
											<div className="size-24 rounded-full flex items-center justify-center border border-black/29">
												<Image alt="Contract and pen" src={contractIcon} />
											</div>
											<span className="text-xl font-medium  w-[183px] inline-block">
												Brighter Future for Your Business.
											</span>
											<span className="text-base ">
												Empower your business with our comprehensive agency
												solutions
											</span>
										</div>
									</div>
								</foreignObject>

								{/* Border */}
								<path
									d="M34.8766 0.500462L223.875 1.36446C239.062 1.43389 251.318 13.8022 251.249 28.9899L251.175 44.9897C251.091 63.4911 266.021 78.5579 284.522 78.6425L300.522 78.7157C315.709 78.7851 327.965 91.1534 327.896 106.341L326.497 412.338C326.415 430.287 311.798 444.771 293.849 444.689L32.8514 443.496C14.9024 443.414 0.41829 428.797 0.500344 410.848L2.22835 32.8516L2.24293 32.0127C2.76814 14.4534 17.208 0.41969 34.8766 0.500462Z"
									stroke="black"
									strokeOpacity="0.22"
									fill="none"
								/>
							</svg>
							<div className="absolute flex justify-center items-center size-26 bg-brand rounded-full -right-10 -top-15">
								<div className="size-12 relative">
									<Image
										alt="Arrow Outward"
										src={arrowOutward}
										fill
										sizes="48px"
									/>
								</div>
							</div>
						</div>
						<div className="flex flex-col items-end h-full justify-between">
							<div className="bg-black flex justify-center items-center px-7 rounded-4xl py-10">
								<span className="text-base w-[177px] text-brand">
									Business
									<br /> Opportunities and Success.
								</span>
							</div>
							<div className="flex gap-14">
								<div className="flex flex-col">
									<span className="font-medium text-4xl">472+</span>
									<span className="text-xl w-[133px]">Expert Solutions.</span>
								</div>

								<div className="flex flex-col">
									<span className="font-medium text-4xl">597+</span>
									<span className="text-xl w-[133px]">
										Enterprises to Thrive.
									</span>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}

export default Innovation;
