import { cva, type VariantProps } from "class-variance-authority";
import type React from "react";

export const iconsVariants = cva("", {
	variants: {
		animate: {
			true: "animate-spin",
			false: "",
		},
	},
	defaultVariants: {
		animate: false,
	},
});

interface IconProps
	extends React.ComponentProps<"svg">,
		VariantProps<typeof iconsVariants> {
	svg: React.FC<React.ComponentProps<"svg">>;
}

export default function Icon({
	svg: SvgComponent,
	animate = false,
	className,
	...props
}: IconProps) {
	return (
		<SvgComponent
			className={iconsVariants({ animate, className })}
			{...props}
		/>
	);
}
