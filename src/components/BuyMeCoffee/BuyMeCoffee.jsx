import cn from "classnames"

import styles from "./BuyMeCoffee.module.scss"
import ScreenEgg from "../ScreenEgg/ScreenEgg"

const BuyMeCoffee = ({ className }) => {
  return (
    <ScreenEgg type="right">
      <div className={cn(className, styles.buyCoffee)}>
        <a href="#" target="_blank" className={styles.buyCoffeeButton}>
          Buy me a coffee...
        </a>
      </div>
    </ScreenEgg>
  )
}

export default BuyMeCoffee
