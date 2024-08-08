import React from 'react'
import '../styles/tipography.css';
import styles from '../styles/About.module.css';
import Header from './Header';

import { aboutEducation, aboutProfessions, aboutExternalCourses} from '../content/SiteData';

const About = () => {
  return (
    <section id='about' className='seperator'>
      <div className={styles.about_wrapper}>
        <Header category="קצת עלי" title="נסיון מקצועי, תארים וקורסי השלמה"/>
        <div className={styles.cubes_wrapper}>
          <div className={styles.cube}>
            <img src={"/professionalism.png"} className={styles.cube_icon}/>
            <h4 className='subheadline flex gap_block'>
              ניסיון מקצועי
            </h4>
            <ul className={styles.cube_content_wrapper}>
              {aboutProfessions.map((profession, key) => {
                return (
                  <li className={styles.cube_content} key={profession.title}>
                    <span className={styles.list_icon}></span>
                    <h5 className='cube_content_title'>{profession.title}</h5>                   
                  </li>
                )
              })}
            </ul>
          </div>
          <div className={styles.cube}>
          <img src={'/expertise.png'} className={styles.cube_icon}/>
            <h4 className='subheadline flex gap_block'>
              תארים אקדמיים וקורסי השלמה
            </h4>
            <ul className={styles.cube_content_wrapper}>
              {aboutEducation.map((education, key) => {
                return (
                  <li className={styles.cube_content} key={education.title}>
                    <span className={styles.list_icon}></span>
                    <h5 className='cube_content_title'>{education.title}</h5>                   
                  </li>
                )
              })}
            </ul>
            <h5 className='intro_title gap_block'>הכשרות וקורסים נוספים</h5>
            <ul className={styles.cube_content_wrapper}>
            {aboutExternalCourses.map((course, key) => {
                return (
                  <li className={styles.cube_content} key={course.title}>
                    <span className={styles.list_icon}></span>
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