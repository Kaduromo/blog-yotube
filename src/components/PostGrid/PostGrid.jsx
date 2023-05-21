import cn from "classnames"

import styles from "./PostGrid.module.scss"

const PostGrid = ({ className, children }) => {
  return <div className={cn(className, styles.postGrid)}>{children}</div>
}

export default PostGrid
