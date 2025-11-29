import type { ReactNode } from "react";

export default function MenuButton({
	children,
	active = false,
}: {
	children: ReactNode;
	active?: boolean;
}) {
	return <li>{children}</li>;
}
