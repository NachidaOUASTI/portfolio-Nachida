
import styles from './App.module.css'
import About from './components/About/About'
import Experience from './components/Experience/Experience'
import Hero from './components/Hero/Hero'
import Navbar from './components/Navbar/Navbar'

function App() {
 

  return (
    // styles car on a mis en place les modules css (dans le fichier vite.config.js) 
    // App c'est le nom de la classe dans le css App.module.css
    <div className={styles.App}>
      <Navbar />
      <Hero />
      <About />
      <Experience/>
    </div>  
  )
}

export default App
