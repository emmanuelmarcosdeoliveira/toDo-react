import { cva, cx, type VariantProps } from "class-variance-authority";
import type React from "react";
import { textVariants } from "./Text";

export const inputTextVariants = cva(
	"border-gray-200 border-b border-solid bg-transparent outline-none focus:border-pink-base",
	{
		variants: {
			size: {
				md: "px-2 pb-2",
			},
			disabled: {
				true: "pointer-events-none",
			},
		},
		defaultVariants: {
			size: "md",
			disabled: false,
		},
	}
);

interface InputTextProps
	extends VariantProps<typeof inputTextVariants>,
		Omit<React.ComponentProps<"input">, "size" | "disabled"> {}

export default function InputText({
	size,
	disabled,
	className,
	...props
}: InputTextProps) {
	return (
		<input
			className={cx(
				inputTextVariants({ size, disabled }),
				textVariants(),
				className
			)}
			{...props}
		/>
	);
}
