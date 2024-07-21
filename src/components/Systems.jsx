import React from 'react'
import styles from '../styles/Systems.module.css';
import Gallery from './Gallery';
import Header from './Header';
const Systems = () => {
  return (
    <section id='systems' className='seperator'>
      <div className={styles.systems_wrapper}>
      <Header category="המומחיות שלי" title="מטפלת בילדים, נוער ומבוגרים בגישה הדינמית בשילוב כלים קוגנטייבים התנהגותיים ומיינדפולנס."/>
        <div className={`${styles.systems_expertise_gallery}`}> 
          <Gallery />
        </div>
      </div>
    </section>
  )
}

export default Systems