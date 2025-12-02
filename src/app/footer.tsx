import Form from "next/form";
import Image from "next/image";
import Link from "next/link";
import facebook from "~/assets/brands/Facebook Icon.svg";
import linkdin from "~/assets/brands/Linkedin Icon.svg";
import twitter from "~/assets/brands/Twitter Icon.svg";
import mail from "~/assets/Mail icon.svg";

function Footer() {
	return (
		<footer className="bg-black text-white">
			<div className="container py-30 h-[700px]">
				<div className="grid grid-cols-3 h-full">
					<div className="flex flex-col justify-between h-full">
						<div className="flex flex-col gap-y-5">
							<Link href="/">
								<span className="text-brand text-[40px] font-medium">Juda</span>
							</Link>
							<span className="text-[25px] w-[219px]">
								Business Agency Website
							</span>
						</div>
						<span className="w-[274px]">
							From innovative marketing <br /> strategies to operational
							excellence, we provide expert
						</span>
					</div>
					<div className="flex flex-col justify-between h-full">
						<div className="flex gap-x-33">
							<div className="flex flex-col gap-y-9.5">
								<span className="font-medium text-[23px]">Explore</span>
								<ul className="text-[19px] text-white/80 flex flex-col gap-y-4">
									<li>Resources</li>
									<li>Blog</li>
									<li>Documents</li>
								</ul>
							</div>

							<div className="flex flex-col gap-y-9.5">
								<span className="font-medium text-[23px]">Menu</span>
								<ul className="text-[19px] text-white/80 flex flex-col gap-y-4">
									<li>Home</li>
									<li>About</li>
									<li>Contact</li>
								</ul>
							</div>
						</div>
						<div className="flex gap-5">
							<Image src={facebook} alt="Facebook" />
							<Image src={linkdin} alt="Linkdin" />
							<Image src={twitter} alt="Twitter" />
						</div>
					</div>

					<div className="flex flex-col justify-between h-full">
						<div className="flex flex-col gap-y-7">
							<span className="uppercase font-medium text-xl">
								Office Location
							</span>
							<span className="text-[18px] text-white/80">
								Address Line Lorem Ipsum Dolore Sit Amet
							</span>
						</div>
						<div className="flex flex-col gap-y-7 border-b-white/80 border-b pb-6">
							<span className="font-medium text-xl">Newsletter</span>
							<Form
								action={async (result) => {
									"use server";
									console.log(result);
								}}
							>
								<div className="flex justify-between">
									<input
										type="text"
										name="email"
										className="text-xl w-1 grow"
										placeholder="Enter your email address"
									/>
									<Image src={mail} alt="Envolope Icon" />
								</div>
							</Form>
						</div>
						<span>
							© By Enative Design. Recreated by quentmadeit. All rights
							reserved.
						</span>
					</div>
				</div>
			</div>
		</footer>
	);
}

export default Footer;
