import { ButtonHTMLAttributes } from 'react'
import styles from './Button.module.scss'

type Props = Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'className'>

export default function Button (props: Props) {
  return (
    <button {...props} className={styles.button}>Request Access</button>
  )
}
