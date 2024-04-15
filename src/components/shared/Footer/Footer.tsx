import styles from './Footer.module.sass'
export const Footer = () => {
  return(
    <footer>
      <p>Future World © {new Date().getFullYear()}</p>
    </footer>
  )
}