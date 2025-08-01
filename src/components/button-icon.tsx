import { cva, type VariantProps } from "class-variance-authority";
import type React from "react";
import SpinnerIcon from "../assets/icons/spinner.svg?react";
import Icon from "./icon";
import Skeleton from "./skeleton";
export const buttonIconVariants = cva(
	"group inline-flex cursor-pointer items-center justify-center transition",
	{
		variants: {
			variant: {
				none: "",
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
      handling: {
        true: "pointer-events-none"

      }
		},
		defaultVariants: {
			variant: "primary",
			size: "sm",
			disabled: false,
      handling: false
		},
	}
);

export const buttonIconIconVariants = cva("transition", {
	variants: {
		variant: {
			none: "",
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
	loading?: boolean;
  handling?: boolean
}

export default function ButtonIcon({
	variant,
	size,
	disabled,
  handling,
	className,
	icon,
	loading,
	...props
}: ButtonIconProps) {
	if (loading) {
		return (
			<Skeleton
				className={buttonIconVariants({
					variant: "none",
					size,
					className,
				})}
				rounded="sm"
			/>
		);
	}
	return (
		<button
			className={buttonIconVariants({ variant, size, disabled, className, handling })}
			{...props}
		>
			<Icon className={buttonIconIconVariants({ variant, size })} svg={handling ? SpinnerIcon:  icon} 
      animate={handling}
      />
		</button>
	);
}
