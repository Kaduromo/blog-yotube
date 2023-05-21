import cn from "classnames"

import styles from "./ScreenEgg.module.scss"

const ScreenEgg = ({ className, type, children }) => {
  return (
    <div
      className={cn(className, styles.screenEgg, {
        [styles.screenEggLeft]: type === "left",
        [styles.screenEggRight]: type === "right",
      })}
    >
      {children}
    </div>
  )
}

export default ScreenEgg
