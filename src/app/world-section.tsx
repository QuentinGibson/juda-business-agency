import Image from "next/image";
import client1 from "~/assets/images/client1.jpg";
import client2 from "~/assets/images/client2.jpg";
import client3 from "~/assets/images/client3.jpg";

function WorldSection() {
	const clients = [
		{ id: 1, src: client1, alt: "Client 1" },
		{ id: 2, src: client2, alt: "Client 2" },
		{ id: 3, src: client3, alt: "Client 3" },
	];
	return (
		<div className="bg-black/65">
			<section className="text-white container py-30">
				<div className="grid grid-row-3">
					<div>
						<h1 className="text-[30px] text-brand">Business Agency Website</h1>
					</div>
					<div className="flex gap-x-10 justify-between">
						<span className="text-[70px] w-[692px]">
							World of Business Opportunities and Success.
						</span>
						<div className="flex flex-col gap-4 w-[181px]">
							<span className="font-medium text-lg font-poppins">
								Our AI Generation Tools.
							</span>
							<span className="font-poppins">
								Unlock creativity and productivity
							</span>
						</div>
						<div className="flex gap-x-11">
							<div className="flex flex-col w-[133px] gap-y-5">
								<span className="font-medium text-4xl">472+</span>
								<span className="text-xl uppercase font-light">
									Expert Solutions
								</span>
							</div>
							<div className="flex flex-col w-[133px] gap-y-5">
								<span className="font-medium text-4xl">597+</span>
								<span className="text-xl uppercase font-light">
									Enterprises To Thrive
								</span>
							</div>
						</div>
					</div>
					<div className="flex gap-x-50">
						<div className="flex flex-col justify-around">
							<div>
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
							<span className="font-medium">
								From innovative marketing strategies to operational excellence,
								we provide expert guidance to help your
							</span>
						</div>
						<div className="p-20 border border-white/30 bg-white/6 rounded-4xl flex gap-x-24">
							<div className="flex flex-col w-[212px]">
								<span className="text-[59px]">52k+</span>
								<span className="text-[22px]">
									Your Success Is Our Business
								</span>
							</div>
							<div className="flex flex-col gap-y-9">
								<div>
									<span className="bg-brand rounded-4xl px-2 py-1 text-black">
										Helping Businesses
									</span>
								</div>
								<span className="font-medium w-[336px]">
									From innovative marketing strategies to operational
									excellence, we provide expert guidance to help your
								</span>
							</div>
						</div>
					</div>
				</div>
			</section>
		</div>
	);
}

export default WorldSection;
