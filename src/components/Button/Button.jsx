import cn from "classnames"

import styles from "./Button.module.scss"

const Button = ({ className, children, onClick, disabled }) => {
  return (
    <button
      className={cn(className, styles.button)}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  )
}

export default Button
