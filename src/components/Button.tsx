import type { IColors } from "../inrerfaces/Colors";
import { Icon } from "./Icon";

interface IProps {
  variant: 'text' | 'contained' | 'outlined' | 'watercolor'
  children?: React.ReactNode,
  href?: string,
  reload?: boolean,
  external?: boolean,
  disabled?: boolean,
  color?: IColors,
  span?: boolean,
  size?: 'sm' | 'md' | 'lg',
  startIcon?: string,
  endIcon?: string,
  className: string
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [x: string]: any;
}

export const Button = ({variant, children, href, external, disabled, color, span, size, startIcon, endIcon, className, ...rest}: IProps) => {
  const getClass = () => `
    btn 
    text-decoration-none
    ${!className.includes("rounded") && "rounded-pill"}
    ${disabled ? `disabled` : ""}
    ${color && variant == 'text' ? `text-${color} border-0` : ""}
    ${color && variant == 'contained' ? `btn-${color}` : ""}
    ${color && variant == 'outlined' ? `btn-outline-${color}` : ""}
    ${color && variant == 'watercolor' ? `watercolor-${color}` : ""}
    ${size == 'sm' ? `btn-sm` : ""}
    ${size == 'md' ? `` : ""}
    ${size == 'lg' ? `btn-lg` : ""}
    ${startIcon && !children && !endIcon ? "rounded-circle border-0 lh-0 p-2" : ""}
    ${className}
  `;

  if (href) {
    return (
      <a className={getClass()} href={href} target={external ? "_blank" : "_top"} {...rest}>
        {startIcon && <Icon className={`${children && "me-1"}`} icon={startIcon} />}
        {children}
        {endIcon && <Icon className="ms-1" icon={endIcon} />}
      </a>
    )
  }

  if (span) {
    return (
      <span className={getClass()} {...rest}>
        {startIcon && <Icon className={`${children && "me-1"}`} icon={startIcon} />}
        {children}
        {endIcon && <Icon className="ms-1" icon={endIcon} />}
      </span>
    )
  }

  return (
    <button className={getClass()} disabled={disabled} {...rest}>
      {startIcon && <Icon className={`${children && "me-1"}`} icon={startIcon} />}
      {children}
      {endIcon && <Icon className="ms-1" icon={endIcon} />}
    </button>
  )
}
