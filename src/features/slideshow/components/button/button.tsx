import clsx from "clsx";
import { forwardRef, type ButtonHTMLAttributes, type ReactNode } from "react";
import { styles, type ButtonStyleProps } from "./button.styles";

/** Custom content props for the shared button component. */
interface ButtonContentProps {
  /** Icon shown before the button label. */
  leftIcon?: ReactNode;
  /** Icon shown after the button label. */
  rightIcon?: ReactNode;
}

/** Props for the shared button component used across app actions. */
export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> &
  ButtonStyleProps &
  ButtonContentProps;

/** Shared app button with Panda recipe variants for intent, size, and shape. */
export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      children,
      className,
      fullWidth,
      leftIcon,
      rightIcon,
      selected,
      shape,
      size,
      tone,
      type = "button",
      variant,
      ...buttonProps
    },
    ref,
  ) => (
    <button
      className={clsx(
        styles.button({ fullWidth, selected, shape, size, tone, variant }),
        className,
      )}
      ref={ref}
      type={type}
      {...buttonProps}
    >
      {leftIcon === undefined ? null : <span className={styles.icon}>{leftIcon}</span>}
      {children}
      {rightIcon === undefined ? null : <span className={styles.icon}>{rightIcon}</span>}
    </button>
  ),
);

Button.displayName = "Button";
