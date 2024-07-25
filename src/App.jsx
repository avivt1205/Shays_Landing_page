import "../src/styles/index.css";
import '../src/styles/tipography.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styles from '../src/styles/Main.module.css'
import Hero from '../src/components/Hero'
import About from '../src/components/About'
import Systems from '../src/components/Systems'
import Contact from '../src/components/Contact'
import Whatsapp from "./components/Whatsapp";
function App() {
  // Scroll to Systems section when clicked
  function scrollToElem(str) {  
    const element = document.querySelector(str.target.name);
    if(element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }  
}

  return (
      <main className='site-container'>
        <div className={styles.main_layout}>
          <Hero scrollToElem={scrollToElem}/>
          <About />
          <Systems />
          <Contact />
        </div>
        <Whatsapp />
      </main>
  )
}

export default App
