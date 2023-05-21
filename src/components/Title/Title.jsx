import cn from "classnames"

import styles from "./Title.module.scss"

const Title = ({ className, type, children }) => {
  return (
    <>
      {type === "small" ? (
        <h3 className={cn(className, styles.title, styles.titleSmall)}>
          {children}
        </h3>
      ) : (
        <h2 className={cn(className, styles.title, styles.titleMedium)}>
          {children}
        </h2>
      )}
    </>
  )
}

export default Title
