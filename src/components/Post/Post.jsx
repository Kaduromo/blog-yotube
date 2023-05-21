import Link from "next/link"
import Image from "next/image"
import cn from "classnames"

import styles from "./Post.module.scss"
import { Title } from "@/components"
import { urlFor } from "@/lib/client"

const Post = ({ className, title, image, description, slug }) => {
  return (
    <div className={cn(className, styles.post)}>
      <Link
        href={`/post/${encodeURIComponent(slug.current)}`}
        className={cn(className, styles.postLink)}
      >
        <Title type="small" className={cn(className, styles.postTitle)}>
          {title}
        </Title>
        <div className={cn(className, styles.postContent)}>
          <div>
            <Image
              src={urlFor(image).url()}
              alt={image.caption}
              width="100"
              height="100"
            />
          </div>
          <p className={cn(className, styles.postDescription)}>{description}</p>
        </div>
      </Link>
    </div>
  )
}

export default Post
