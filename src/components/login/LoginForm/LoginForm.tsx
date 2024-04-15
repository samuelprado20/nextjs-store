"use client"
import { handleLogin } from '@/actions'
import styles from './LoginForm.module.sass'

export const LoginForm = () => {
  const handleSubmit = async (event) => {
    event.preventDefault()
    const formData = new FormData(event.target)
    await handleLogin(formData)
  }
  return (
    <div className={styles.NewAccountForm}  >
      <h1 className={styles.NewAccountForm__title}>Login</h1>
      <form onSubmit={handleSubmit} className={styles.NewAccountForm__form}>
        <input type="text" name="email" placeholder="Email" pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$" />
        <input type="password" name="password" placeholder="Password" />
        <input type="submit" name="submit" value="Login" />
      </form>
    </div>
  )
}