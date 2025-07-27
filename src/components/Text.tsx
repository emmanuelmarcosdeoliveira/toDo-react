import { cva, type VariantProps } from "class-variance-authority";
import React from "react";

export const textVariants = cva("font-sans text-gray-400", {
	variants: {
		variant: {
			"body-sm-bold": "font-semibold text-sm leading-5",
			"body-md": "font-normal text-base leading-6",
			"body-md-bold": "font-semibold text-base leading-6",
		},
	},
	defaultVariants: {
		variant: "body-md",
	},
});

interface TextProps extends VariantProps<typeof textVariants> {
	as?: keyof React.JSX.IntrinsicElements;
	className?: string;
	children?: React.ReactNode;
}

export default function Text({
	as = "span",
	variant,
	className,
	children,
	...props
}: TextProps) {
	return React.createElement(
		as,
		{
			className: textVariants({ variant, className }),
			...props,
		},
		children
	);
}
