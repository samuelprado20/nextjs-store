import Link from "next/link"
import styles from './Header.module.css'
import { validateAccessToken } from "@/utils/auth/validateAccessToken"

export const Header = async () => {
  const customer  = await validateAccessToken()

  return (
    <header>
      <nav>
        <div className={styles.Header__info}>
          {customer?.firstName 
            ? (<span>Hello {customer.firstName}</span>)
            : (<Link href='/login'>Log in</Link>)
          }
        </div>
        <ul className={styles.Header__list}>
          <li>
            <Link href='/'>
              Home
            </Link>
          </li>
          <li>
            <Link href='/store'>
              Store
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}
