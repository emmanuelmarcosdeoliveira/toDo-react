import { cva, type VariantProps } from "class-variance-authority";
import type React from "react";
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
		},
		defaultVariants: {
			variant: "primary",
			size: "md",
			disabled: false,
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
}

export default function Button({
	variant,
	size,
	disabled,
	className,
	children,
	icon: IconComponent,
	...props
}: ButtonProps) {
	return (
		<button
			className={buttonVariants({ variant, size, disabled, className })}
			{...props}
		>
			{IconComponent && (
				<Icon
					className={buttonIconVariants({ variant, size })}
					svg={IconComponent}
				/>
			)}
			<Text className={buttonTextVariants({ variant })} variant="body-md-bold">
				{children}
			</Text>
		</button>
	);
}
