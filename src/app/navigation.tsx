import Image from "next/image";
import Link from "next/link";
import MenuIcon from "~/assets/Menu.svg";
import QuestionIcon from "~/assets/Question.svg";
import SettingsIcon from "~/assets/Setting.svg";
import MenuButton from "./menu-button";
export default function Navigation() {
	return (
		<nav className="">
			<div className="flex justify-between items-center px-10 py-6 bg-white/10 w-full rounded-[66px] border border-white/20 backdrop-blur-md">
				<div>
					<Link href={"/"}>
						<p className="text-white text-[32px] ">Juda</p>
					</Link>
				</div>
				<div className="flex justify-center">
					<ul className="flex gap-14 justify-center align-middle">
						<MenuButton active>Home</MenuButton>
						<MenuButton>About Us</MenuButton>
						<MenuButton>Services</MenuButton>
						<MenuButton>Features</MenuButton>
						<MenuButton>Contact</MenuButton>
					</ul>
				</div>
				<div className="flex gap-4">
					<Image
						src={QuestionIcon}
						alt="questionmark icon"
						width={32}
						height={32}
					/>
					<Image src={SettingsIcon} alt="gear icon" width={32} height={32} />
					<Image src={MenuIcon} alt="dots in a grid" width={32} height={32} />
					<div className="flex gap-4">
						<Link
							className="bg-[#D0FF00] px-5 py-4 text-sm rounded-4xl font-semibold"
							href={"/"}
						>
							Sign Out
						</Link>
						<Link
							className="bg-white px-5 py-4 text-sm rounded-4xl font-semibold"
							href={"/"}
						>
							Sign In
						</Link>
					</div>
				</div>
			</div>
		</nav>
	);
}
