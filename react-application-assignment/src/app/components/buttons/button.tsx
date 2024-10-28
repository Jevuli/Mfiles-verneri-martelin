import { MouseEventHandler } from "react";

interface ButtonProps {
  disabled?: boolean;
  children: string;
  onClick: MouseEventHandler;
}

export default function Button(props: ButtonProps) {
  const disabledClasses = () => {
    if (props.disabled) {
      return 'border-grey-300 bg-grey-100 cursor-not-allowed';
    } else {
      return 'border-blue-300 bg-blue-100  hover:bg-blue-300 hover:border-blue-500 active:bg-blue-500';
    }
  }

  const classes = `
    p-5 w-full border-2
    ${disabledClasses()}
  `;
  return (
    <button className={classes} onClick={(event) => props.disabled ? null : props.onClick(event)}>
      {props.children}
    </button>
  );
}
