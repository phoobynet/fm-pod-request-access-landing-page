import { InputHTMLAttributes } from 'react'
import styles from './Input.module.scss'

type Props = Omit<InputHTMLAttributes<HTMLInputElement>, 'className'>

export default function Input (props: Props) {
  return (
    <input {...props} className={styles.input} />
  )
}
