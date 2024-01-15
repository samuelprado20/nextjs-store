'use client'
import Image from 'next/image'
import classNames from 'classnames/bind'
import { useState } from 'react'
import styles from './Description.module.sass'

const PLACEHOLDER_IMAGE = 'data:image/jpeg;base64,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'

export const Description = () => {
  const [hasBorder, setBorder] = useState(false)
  
  const handleClick = () => setBorder(!hasBorder)

  const cx = classNames.bind(styles)

  const buttonStyles = cx('Description__button' , {
    'Description__button--border': hasBorder
  })

  return (
    <section className={styles.Description}>
      <button onClick={handleClick} className={buttonStyles}>
        <div className={styles.Description__imageContainer}>
          <Image
            src="/images/description.jpeg"
            alt="products marketplace"
            fill
            placeholder='blur'
            blurDataURL={PLACEHOLDER_IMAGE}
          />
        </div>
      </button>
      <div className={styles.Description__text}>
        <h2>Bring the future today</h2>
        <p>Future World: Your Gateway to Tomorrow's Tech! Dive into a world of cutting-edge gadgets and gear. Stay ahead of the curve and redefine your digital lifestyle with us.</p>
      </div>
    </section>
  )
}