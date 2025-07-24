import { cva, cx, type VariantProps } from "class-variance-authority";
import Skeleton from "./skeleton";
import Text from "./Text";

export const badgeVariants = cva(
	"inline-flex items-center justify-center rounded-full ",
	{
		variants: {
			variant: {
				none: "",
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
			none: "",
			primary: "text-green-dark",
			secondary: "text-pink-dark",
		},
	},
	defaultVariants: {
		variant: "primary",
	},
});

export const badgeSkeletonVariants = cva("", {
	variants: {
		size: {
			sm: "h-6 w-6",
		},
	},
	defaultVariants: {
		size: "sm",
	},
});

interface BadgeProps
	extends React.ComponentProps<"div">,
		VariantProps<typeof badgeVariants> {
	loading?: boolean;
}

export default function Badge({
	children,
	loading,
	className,
	size,
	variant,
}: BadgeProps) {
	if (loading) {
		return (
			<Skeleton
				className={cx(
					badgeVariants({ variant: "none" }),
					badgeSkeletonVariants({ size }),
					className
				)}
				rounded="full"
			/>
		);
	}
	return (
		<div className={badgeVariants({ variant, size, className })}>
			<Text className={badgeTextVariants({ variant })} variant="body-sm-bold">
				{children}
			</Text>
		</div>
	);
}
