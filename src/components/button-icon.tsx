import { cva, type VariantProps } from "class-variance-authority";
import type React from "react";
import Icon from "./icon";

export const buttonIconVariants = cva(
	"group inline-flex cursor-pointer items-center justify-center transition",
	{
		variants: {
			variant: {
				primary: "bg-green-base hover:bg-green-dark",
				secondary: "bg-gray-200 hover:bg-pink-base",
				tertiary: "bg-transparent hover:bg-gray-200",
			},
			size: {
				sm: "h-6 w-6 rounded p-1",
			},
			disabled: {
				true: "pointer-events-none opacity-50",
			},
		},
		defaultVariants: {
			variant: "primary",
			size: "sm",
			disabled: false,
		},
	}
);

export const buttonIconIconVariants = cva("transition", {
	variants: {
		variant: {
			primary: "fill-white",
			secondary: "fill-pink-base group-hover:fill-white ",
			tertiary: "fill-gray-300 group-hover:fill-gray-400",
		},
		size: {
			sm: "h-4 w-4",
		},
	},
	defaultVariants: {
		variant: "primary",
		size: "sm",
	},
});

interface ButtonIconProps
	extends VariantProps<typeof buttonIconVariants>,
		Omit<React.ComponentProps<"button">, "size" | "disabled"> {
	icon: React.ComponentProps<typeof Icon>["svg"];
}

export default function ButtonIcon({
	variant,
	size,
	disabled,
	className,
	icon,
	...props
}: ButtonIconProps) {
	return (
		<button
			className={buttonIconVariants({ variant, size, disabled, className })}
			{...props}
		>
			<Icon className={buttonIconIconVariants({ variant, size })} svg={icon} />
		</button>
	);
}
