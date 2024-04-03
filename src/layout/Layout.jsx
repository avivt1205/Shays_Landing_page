import React from 'react'
import styles from '../styles/Main.module.css'
import Hero from '../components/Hero'
import About from '../components/About'
import Systems from '../components/Systems'
import Contact from '../components/Contact'

const Layout = () => {
  return (
    <div className={styles.main_layout}>
      <Hero />
      <About />
      <Systems />
      <Contact />
    </div>
  )
}

export default Layout