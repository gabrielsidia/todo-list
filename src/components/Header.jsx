import React from 'react'
import styles from './Header.module.css'
import { Rocket } from 'phosphor-react'

const Header = () => {
  return (
    <div>
        <header className={styles.nav}>
          <Rocket size={30} color='#4ea8de'/>
          <h1 className={styles.title}>
            <span className={styles.firstTitle}>to</span>
            <span className={styles.secondTitle}>doList</span>
          </h1>
        </header>
    </div>
  )
}

export default Header
