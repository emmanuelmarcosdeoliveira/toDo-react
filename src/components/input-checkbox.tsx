import { cva, type VariantProps } from "class-variance-authority";
import type React from "react";
import CheckIcon from "../assets/icons/check.svg?react";
import Icon from "./icon";
import Skeleton from "./skeleton";

export const inputCheckBoxWrapperVariants = cva(
	`inline-flex
  items-center justify-center  relative group
  
  `
);

export const inputCheckBoxVariants = cva(
	`appearance-none
  peer  flex items-center justify-center  cursor-pointer  transition overflow-hidden
  `,
	{
		variants: {
			variant: {
				none: "",
				default: `
         border-2 
        border-solid
        border-green-base hover:border-green-dark hover:bg-green-dark/20
        checked:border-green-base checked:bg-green-base group-hover:checked:border-green-dark group-hover:checked:bg-green-dark

        `,
			},
			size: {
				md: "h-5 w-5 rounded-sm",
			},
			disabled: {
				true: "pointer-events-none",
			},
		},
		defaultVariants: {
			variant: "default",
			size: "md",
			disabled: false,
		},
	}
);

export const inputCheckBoxIconVariants = cva(
	"-translate-y-1/2 absolute top-1/2 left-1 hidden fill-white peer-checked:block",
	{
		variants: {
			size: {
				md: "h-3 w-3",
			},
		},
		defaultVariants: {
			size: "md",
		},
	}
);

interface InputCheckboxProps
	extends VariantProps<typeof inputCheckBoxVariants>,
		Omit<React.ComponentProps<"input">, "size" | "disabled"> {
	loading?: boolean;
}

export default function InputCheckbox({
	variant,
	size,
	loading,
	disabled,
	className,
	...props
}: InputCheckboxProps) {
	if (loading) {
		return (
			<Skeleton
				className={inputCheckBoxVariants({ variant: "none", size })}
				rounded="sm"
			/>
		);
	}
	return (
		<label className={inputCheckBoxWrapperVariants({ className })}>
			<input
				className={inputCheckBoxVariants({ variant, size, disabled })}
				type="checkbox"
				{...props}
			/>
			<Icon className={inputCheckBoxIconVariants({ size })} svg={CheckIcon} />
		</label>
	);
}
