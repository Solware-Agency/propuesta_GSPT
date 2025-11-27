import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface CardProps {
  children: ReactNode;
  variant?: "glass" | "neuo";
  className?: string;
}

const Card = ({ children, variant = "glass", className }: CardProps) => {
  return (
    <div
      className={cn(
        "p-6 sm:p-8",
        variant === "glass" && "glass-surface",
        variant === "neuo" && "neuo-card",
        className
      )}
    >
      {children}
    </div>
  );
};

export default Card;
