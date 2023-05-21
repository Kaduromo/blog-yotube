import cn from "classnames"

import styles from "./Cover.module.scss"

const Cover = ({ className, title }) => {
  return (
    <div className={cn(className, styles.cover)}>
      <h1
        className={styles.coverTitle}
        dangerouslySetInnerHTML={{ __html: title }}
      />
    </div>
  )
}

export default Cover
