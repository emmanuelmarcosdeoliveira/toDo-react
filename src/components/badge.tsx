import { cva, type VariantProps } from "class-variance-authority";
import Text from "./Text";

export const badgeVariants = cva(
	"inline-flex items-center justify-center rounded-full ",
	{
		variants: {
			variant: {
				primary: "bg-green-light",
				secondary: "bg-pink-light",
			},
			size: {
				sm: "px-2 py-0.5",
			},
		},
		defaultVariants: {
			variant: "primary",
			size: "sm",
		},
	}
);

export const badgeTextVariants = cva("", {
	variants: {
		variant: {
			primary: "text-green-dark",
			secondary: "text-pink-dark",
		},
	},
	defaultVariants: {
		variant: "primary",
	},
});

interface BadgeProps
	extends React.ComponentProps<"div">,
		VariantProps<typeof badgeVariants> {}

export default function Badge({
	children,
	className,
	size,
	variant,
}: BadgeProps) {
	return (
		<div className={badgeVariants({ variant, size, className })}>
			<Text className={badgeTextVariants({ variant })} variant="body-sm-bold">
				{children}
			</Text>
		</div>
	);
}
