import Image from "next/image";
import Link from "next/link";
import MenuIcon from "~/assets/Menu.svg";
import QuestionIcon from "~/assets/Question.svg";
import SettingsIcon from "~/assets/Setting.svg";
import MenuButton from "./menu-button";
export default function Navigation() {
	return (
		<nav className="flex justify-between">
			<div>
				<p>Juda</p>
			</div>
			<div>
				<ul className="flex gap-14">
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
					<Link href={"/"}>Sign Out</Link>
					<Link href={"/"}>Sign In</Link>
				</div>
			</div>
		</nav>
	);
}
