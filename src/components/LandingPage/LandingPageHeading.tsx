import styles from './LandingPageHeading.module.scss'
import { PropsWithChildren } from 'react'

export default function LandingPageHeading ({ children }: PropsWithChildren) {
  return (
    <h1 className={styles.landingPageHeading}>
      {children}
    </h1>
  )
}
