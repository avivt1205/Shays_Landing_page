import "../src/styles/index.css";
import '../src/styles/tipography.css';
import styles from '../src/styles/Main.module.css'
import Hero from '../src/components/Hero'
import About from '../src/components/About'
import Systems from '../src/components/Systems'
import Contact from '../src/components/Contact'
function App() {

  return (
      <main className='site-container'>
        <div className={styles.main_layout}>
          <Hero />
          <About />
          <Systems />
          <Contact />
        </div>
      </main>
  )
}

export default App
