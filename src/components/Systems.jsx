import React from 'react'
import styles from '../styles/Systems.module.css';
import Gallery from './Gallery';

const Systems = () => {
  return (
    <section id='systems' className='seperator'>
      <div className={styles.systems_wrapper}>
        <h2 className='headline flex'>המומחיות שלי</h2>
        <h3 className={`${styles.systems_intro_title} intro_title gap_block flex line_height`}>מטפלת בילדים, נוער ומבוגרים בגישה הדינמית בשילוב כלים קוגנטייבים התנהגותיים ומיינדפולנס.</h3>
        <div className={`${styles.systems_expertise_gallery}`}> 
          <Gallery />
        </div>
      </div>
    </section>
  )
}

export default Systems