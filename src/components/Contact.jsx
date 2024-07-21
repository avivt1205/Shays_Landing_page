import React, { useState, useEffect } from 'react'
import ContactForm from './ContactForm';
import styles from '../styles/contactForm.module.css';
import Header from './Header';

const Contact = () => {
  const [fromInfo, setFormInfo] = useState({
    full_name: '',
    message: '',
    to_email:'',
    phone: '',
  });

  const [ showSuccessMsg, setShowSuccessMsg ] = useState(false);
  const [ showErrorMsg, setShowErrorMsg ] = useState(false);

  const handleFormInfo = (event) => {
    const {name, value} = event.target;

    setFormInfo((prevFormInfo) => {
      return {
       ...prevFormInfo,
        [name]: value,
      };
    });
  };

  const handleSendEmail = (evt) => {
    evt.preventDefault();
    ContactForm(fromInfo);
    setShowSuccessMsg(true);
    setShowErrorMsg(!setShowSuccessMsg);
    setFormInfo({
      full_name: '',
      message: '',
      to_email:'',
      phone: '',
    });    
  }

  useEffect(() => {
    if(showSuccessMsg) {
      const timer = setTimeout(() => {
        setShowSuccessMsg(false);
      }, 3000)

      return () => clearTimeout(timer);
    } else if (showErrorMsg) {
      const timer = setTimeout(() => {
        setShowErrorMsg(false);
      }, 3000)

      return () => clearTimeout(timer);
    }
  }, [showSuccessMsg, showErrorMsg])

  return (
    <section id='contact' className='seperator'>
      <div className={styles.contact_wrapper}>
      <Header category="צרו קשר" title="מעניין אתכם? רוצים לקבל שיחת ייעוץ להתחלת תהליך? שלחו לי מייל ואחזור אליכם"/>

      {showSuccessMsg && (
        <div className={styles.success_msg}>
          הפנייה נשלחה בהצלחה
        </div>
      )}
      { showErrorMsg && (
        <div className={styles.error_msg}>
          לצערנו שליחת הפנייה כשלה 
        </div>
      )}

      <form onSubmit={handleSendEmail}>
        <div className={styles.input_wrapper}>
            <label htmlFor="full_name">שם מלא</label>
            <input type="text" name="full_name" value={fromInfo.full_name} onChange={handleFormInfo}/>
        </div>
        <div className={styles.input_wrapper}>
            <label htmlFor="to_email">אימייל</label>
            <input type="email" name="to_email" onChange={handleFormInfo} value={fromInfo.to_email}/>
        </div>
        <div className={styles.input_wrapper}>
            <label htmlFor="phone">טלפון</label>
            <input type="number" name="phone" value={fromInfo.phone} onChange={handleFormInfo}/>
        </div>
        <div className={styles.textarea_wrapper}> 
            <label htmlFor="message">תוכן הפניה</label>
            <textarea name="message" placeholder='תוכן הפנייה...' onChange={handleFormInfo} value={fromInfo.message}/>
        </div>
        <div className='btn'>
          <input type="submit" value="שליחה" disabled={!fromInfo.to_email || !fromInfo.message || !fromInfo.full_name}/>
        </div>
               
      </form>

      </div>
    </section>
  )
}

export default Contact