import React from "react";
import styles from "./About.module.css";
import { getImageUrl } from "../../utils";




export default function About() {
  return (
    /* id="about" permet de se direger vers le href=#about qu'on retrouve dans navbar.jsx l23 */
    <section className={styles.container} id="about">
          <h2 className={styles.title}>About</h2>
      <div className={styles.content}>
        <img src={getImageUrl("about/aboutImage.png")}
          alt="Moi assise avec un ordinateur" className={styles.aboutImage
          } />
              <ul className={styles.aboutItems}>
                  <li className={styles.aboutItem}>
                      <img src={getImageUrl("about/cursorIcon.png")}
                      alt="Icone curseur" />
                      <div className={styles.aboutItemText}>
                          <h3>Frontend Developer</h3>
                          <p>I&apos;m a frontend developer usin React and NodeJs.</p>
                        
                    </div>
                  </li>
                  <li className={styles.aboutItem}>
                      <img src={getImageUrl("about/serverIcon.png")}
                        alt="Icone serveur" />
                      <div className={styles.aboutItemText}>
                          <h3>Backend Developer</h3>
              <p>PostgreSql and API </p>     
              
                     </div>
                  </li>
                  <li className={styles.aboutItem}>
                      <img src={getImageUrl("about/cursorIcon.png")}
                     alt="Icone curseur" />
                      <div className={styles.aboutItemText}>
                          <h3>UI Designer</h3>
                          <p>
                          I&apos;m a frontend developer usin React and NodeJs.
                          </p>                        
                    </div>
                  </li>
            </ul>
     </div>
   </section>
  );
}

/* 56min environ */