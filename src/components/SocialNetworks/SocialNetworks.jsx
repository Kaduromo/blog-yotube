import { createElement } from "react"
import cn from "classnames"
import { AiOutlineGithub, AiFillInstagram } from "react-icons/ai"

import ScreenEgg from "../ScreenEgg/ScreenEgg"
import styles from "./SocialNetworks.module.scss"

const socialNetworks = [
  {
    id: 1,
    href: "https://github.com/Kaduromo",
    icon: AiOutlineGithub,
  },
  {
    id: 2,
    href: "https://www.instagram.com/vitalya_1806/",
    icon: AiFillInstagram,
  },
]
const SocialNetworks = ({ className }) => {
  return (
    <ScreenEgg type="left">
      <ul className={cn(className, styles.list)}>
        {socialNetworks.map(({ id, href, icon }) => (
          <li key={id} className={styles.listItem}>
            <a href={href} target="_blank" className={styles.listLink}>
              {createElement(icon, { color: "black", size: 50 })}
            </a>
          </li>
        ))}
      </ul>
    </ScreenEgg>
  )
}

export default SocialNetworks
