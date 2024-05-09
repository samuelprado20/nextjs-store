import Link from "next/link"
import { ShoppingCart } from '../ShoppingCart' 
import styles from './Header.module.sass'
import { validateAccessToken } from "@/utils/auth/validateAccessToken"

export const Header = async () => {
  const customer  = await validateAccessToken()

  return (
    <header className={styles.Header}>
      <nav>
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
      <div className={styles.Header__user}>
        {customer?.firstName 
          ? (<span>Hello {customer.firstName}</span>)
          : (<Link href='/login'>Log in</Link>)
        }
        <ShoppingCart />
      </div>
    </header>
  )
}
