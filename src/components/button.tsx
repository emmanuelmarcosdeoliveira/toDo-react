import { cva, type VariantProps } from "class-variance-authority";
import type React from "react";
import SpinnerIcon from "../assets/icons/spinner.svg?react";
import Icon from "./icon";
import Text from "./Text";

export const buttonVariants = cva(
	`flex
   items-center  justify-center
   cursor-pointer transition rounded-lg group gap-2
   `,
	{
		variants: {
			variant: {
				primary: "bg-gray-200 hover:bg-pink-light",
			},
			size: {
				md: "h-14 px-5 py-4",
			},
			disabled: {
				true: "pointer-events-none opacity-50",
			},
      handling: {
        true:  "pointer-events-none" 
      }
		},
		defaultVariants: {
			variant: "primary",
			size: "md",
			disabled: false,
      handling: false
		},
	}
);

export const buttonIconVariants = cva("transition", {
	variants: {
		variant: {
			primary: "fill-pink-base",
		},
		size: {
			md: "h-5 w-5",
		},
	},
	defaultVariants: {
		variant: "primary",
		size: "md",
	},
});

export const buttonTextVariants = cva("", {
	variants: {
		variant: {
			primary: "text-gray-400",
		},
	},
	defaultVariants: {
		variant: "primary",
	},
});

interface ButtonProps
	extends Omit<React.ComponentProps<"button">, "size" | "disabled">,
		VariantProps<typeof buttonVariants> {
	icon?: React.ComponentProps<typeof Icon>["svg"];
  handling?: boolean
}

export default function Button({
	variant,
	size,
	disabled,
	className,
  handling,
	children,
	icon,
	...props
}: ButtonProps) {
	return (
		<button
			className={buttonVariants({ variant, size, disabled, handling, className })}
			{...props}
		>
			{icon && (
				<Icon
					className={buttonIconVariants({ variant, size })}
					animate={handling}
          svg={handling ? SpinnerIcon :  icon}
				/>
			)}
			<Text className={buttonTextVariants({ variant })} variant="body-md-bold">
				{children}
			</Text>
		</button>
	);
}
