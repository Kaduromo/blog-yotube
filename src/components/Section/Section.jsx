import cn from "classnames"

import styles from "./Section.module.scss"

const Section = ({ className, children }) => {
  return <section className={cn(className, styles.section)}>{children}</section>
}

export default Section
