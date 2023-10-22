import styles from "./button.module.css"
import React from "react"

interface ButtonProps {
    children: React.ReactNode,
    onClick?: () => void
}

const Button: React.FC<ButtonProps> = ({children,onClick}) => {
  return <a onClick={onClick} className={`${styles.button} btn`}>{children}</a>
}

export default Button
