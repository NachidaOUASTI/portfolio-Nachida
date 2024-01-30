import React from 'react';
import skills from "../../data/skills.json"
import history from "../../data/history.json"
import styles from './Experience.module.css';
import { getImageUrl } from '../../utils';

export default function Experience() {
  return (
    /* on pourra pointer cette section à partir de la vanvar qui contient href =#experience */
      <section id="experience" className={styles.container}>
          <h2 className={styles.title}>Experience</h2>
          <div className={styles.content}>
       {/*    Lorsque on utilise la fonction de rappel de la méthode map en JavaScript, le deuxième paramètre représente l'index de l'élément actuel dans le tableau. donc le premier skill, html aura l'index 0 donc key=0 et ainsi de suite */}
              <div className={styles.skills}>{skills.map((skill, index) => {
                  return (
                      <div key={index} className={styles.skill}>
                          <div className={styles.skillImageContainer}>
                              <img src={getImageUrl(skill.imageSrc)} alt={skill.title} />
                          </div>
                          <p>{skill.title}</p>
                    
                      </div>
                  );
              })}
              </div>
         
          <ul className={styles.history}>
              {history.map((historyItem, index) => {
                  return (
                      <li key={index} className={styles.historyItem}>
                          <img src={getImageUrl(historyItem.imageSrc)} alt={`${historyItem.organisation}Logo`} />
                        <div className={styles.historyItemDetails}>
                              <h3>{`${historyItem.role},${historyItem.organisation}`}</h3>
                              <p>{`${historyItem.startDate}-${historyItem.endDate}`}</p>
                              <ul>
                                  {historyItem.experiences.map((experience, index) => {
                                      return <li key={index}>{experience}</li>;
                                  })}
                              </ul>
                             
                        </div>                              
                      </li> 
                  )
              })
                  
              }
          </ul>
          </div>
      </section>
  );
}
