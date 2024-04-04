import React from 'react'
import '../styles/tipography.css';
import styles from '../styles/About.module.css';

import { aboutEducation, aboutProfessions, aboutExternalCourses} from '../content/SiteData';

const About = () => {
  return (
    <section id='about' className='seperator'>
      <div className={styles.about_wrapper}>
        <h2 className='headline'>קצת עלי</h2>
        <div className={styles.cubes_wrapper}>
          <div className={styles.cube}>
            <img src='../../../../../' className={styles.cube_icon}/>
            <h4 className='subheadline flex gap_block'>
              ניסיון מקצועי
            </h4>
            <ul className='cube_content_wrapper'>
              {aboutProfessions.map((profession) => {
                return (
                  <li className='cube_content'>
                    <h5 className='cube_content_title'>{profession.title}</h5>                   
                  </li>
                )
              })}
            </ul>
          </div>
          <div className={styles.cube}>
            <img src='../../../../../' className={styles.cube_icon}/>
            <h4 className='subheadline flex gap_block'>
              תארים אקדמיים וקורסי השלמה
            </h4>
            <ul className='cube_content_wrapper'>
              {aboutEducation.map((education) => {
                return (
                  <li className='cube_content'>
                    <h5 className='cube_content_title'>{education.title}</h5>                   
                  </li>
                )
              })}
            </ul>
            <h5 className='intro_title gap_block'>הכשרות וקורסים נוספים</h5>
            <ul className='cube_content_wrapper'>
            {aboutExternalCourses.map((course) => {
                return (
                  <li className='cube_content'>
                    <h5 className='cube_content_title'>{course.title}</h5>                   
                  </li>
                )
              })}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About