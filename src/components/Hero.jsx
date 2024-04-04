import React from 'react'
import styles from '../styles/Hero.module.css'

const Hero = () => {
  return (
    <section id='hero'>
      <div className={styles.hero_wrapper}>
        <div className={styles.hero_right}>
          <img src='../src/assets/avatar.jpg' className='hero_right_image'/>
        </div>
        <div className={styles.hero_left}>
          <div className={styles.hero_left_conetnt}>
            <span className='intro_title gap_block flex'>מטפלת בילדים, נוער ומבוגרים בגישה הדינמית בשילוב כלים קוגנטייבים התנהגותיים ומיינדפולנס.</span>
            <h1 className='headline_primary flex gap_block'>שי לינדמן טל</h1>
            <span className='line_height flex'>
            יש סיבות רבות להגיע לטיפול, המשותף להם הינו האומץ לגעת בכאב ולשתף אותו עם האחר.<br/>
בעבורי המפגש הבינאישי עם מטופלים הינו זכות גדולה. אני מאמינה כי טיפול מיטבי הינו טיפול המהווה מרחב בטוח ומכיל בו נתבונן יחד, בסקרנות משותפת לתוך הנפש, ניגע בקושי ובכאב, בחוזקות וביכולת וזאת על מנת לטפח יכולת לשאת את אתגרי המציאות ולחיות חיים אותנטיים בעלי משמעות ורווחה.<br/>
אני מאמינה בהתאמת הטיפול לצרכי המטופל ולרצונו, משתמשת בפסיכותרפיה ארוכה וקצרת מועד, עושה שימוש בכלים גופניים, חווייתיים, ממוקדי רגש ומשלבת כלים קוגניטיביים - התנהגותיים.        
            </span>
            <button class="btn btn_primery">שיטות טיפול</button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero