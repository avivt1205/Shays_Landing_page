import emailjs from '@emailjs/browser';

const ContactForm = (info) => {

  const templateParams = {
    phone: info.phone,
    message: info.message,
    full_name: info.full_name,
    to_email: info.to_email,
    subject: 'פנייה חדשה מהאתר' 
  };
  emailjs.init(import.meta.env.VITE_MAIL_PUBLIC_KEY);
  emailjs.send(
    import.meta.env.VITE_MAIL_SERVICE_ID,
    import.meta.env.VITE_MAIL_TEMPLATE_ID,
    templateParams
  )
  .then((response) => {
    console.log('SUCCESS!', response.status, response.text);
  })
  .catch((error) => {
    console.log('FAILED...', error);
  });
};

export default ContactForm