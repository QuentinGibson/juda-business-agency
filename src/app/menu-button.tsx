import Link from "next/link";
import type { ReactNode } from "react";
import { cn } from "~/lib/utils";

export default function MenuButton({
	children,
	active = false,
}: {
	children: ReactNode;
	active?: boolean;
}) {
	return (
		<li className={cn(["text-white text-sm", { "text-[#D0FF00]": active }])}>
			<Link href={"/"}>{children}</Link>
		</li>
	);
}
