import cn from "classnames"
import { AiOutlineArrowLeft } from "react-icons/ai"

import styles from "./Article.module.scss"
import Link from "next/link"

const Article = ({ className, backUrl, children }) => {
  return (
    <article className={cn(className, styles.article)}>
      <Link href={backUrl} className={styles.articleBack}>
        <AiOutlineArrowLeft />
      </Link>
      <div className={styles.articleContent}>{children}</div>
    </article>
  )
}

export default Article
