import { InputHTMLAttributes } from 'react'
import styles from './Input.module.scss'

export default function Input (props: Omit<InputHTMLAttributes<HTMLInputElement>, 'className'>) {
  return <input {...props} className={styles.input} />
}
