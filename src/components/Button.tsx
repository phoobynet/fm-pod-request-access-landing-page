import { ButtonHTMLAttributes } from 'react'
import styles from './Button.module.scss'

export default function Button (props: Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'className'>) {
  return (
    <button {...props} className={styles.button}>Request Access</button>
  )
}
