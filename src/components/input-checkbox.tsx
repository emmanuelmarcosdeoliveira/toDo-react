import { cva, type VariantProps } from "class-variance-authority";
import type React from "react";
import CheckIcon from "../assets/icons/check.svg?react";
import Icon from "./icon";

export const inputCheckBoxWrapperVariants = cva(
	`inline-flex
  items-center justify-center  relative group
  
  `
);

export const inputCheckBoxVariants = cva(
	`appearance-none
  peer  flex items-center justify-center  cursor-pointer border-2 border-solid transition overflow-hidden border-green-base hover:border-green-dark hover:bg-green-dark/20
  checked:border-green-base checked:bg-green-base group-hover:checked:border-green-dark group-hover:checked:bg-green-dark
  `,
	{
		variants: {
			size: {
				md: "h-5 w-5 rounded-sm",
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
		Omit<React.ComponentProps<"input">, "size" | "disabled"> {}

export default function InputCheckbox({
	size,
	disabled,
	className,
	...props
}: InputCheckboxProps) {
	return (
		<label className={inputCheckBoxWrapperVariants({ className })}>
			<input
				className={inputCheckBoxVariants({ size, disabled })}
				type="checkbox"
				{...props}
			/>
			<Icon className={inputCheckBoxIconVariants({ size })} svg={CheckIcon} />
		</label>
	);
}
