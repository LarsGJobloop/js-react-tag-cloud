import { TagCloud as TagCloudBase } from '@frank-mayer/react-tag-cloud'

import styles from './styles.module.css'

export function TagCloud() {
  return (
    <TagCloudBase
      options={(window) => ({
        radius: Math.min(500, window.innerWidth, window.innerHeight) / 2,
        maxSpeed: "fast",
      })}
      onClick={(tag) => alert(tag)}
      onClickOptions={{ passive: true }}
    >
      {[
        "VSCode",
        "TypeScript",
        "React",
        "Preact",
        "Parcel",
        "Jest",
        "Next",
        "ESLint",
        "Framer Motion",
        "Three.js",
      ]}
    </TagCloudBase>
  )
}