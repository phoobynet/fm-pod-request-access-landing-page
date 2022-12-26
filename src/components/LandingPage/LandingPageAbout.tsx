import { PropsWithChildren } from 'react'
import styles from './LandingPageAbout.module.scss'

export default function LandingPageAbout ({ children }: PropsWithChildren) {
  return (
    <p className={styles.landingPageAbout}>{children}</p>
  )
}
