import React , {useState} from "react";
import styles from "./Navbar.module.css";
import{getImageUrl} from "../../utils";

export default function Navbar() {
// On définit la variable d'état menuOpen initialisée à false(menu fermé)
//Si on souhaite la modifier on appelera  la fonction setMenuOpen
const[menuOpen, setMenuOpen]=useState(false)

  return (
    <nav className={styles.navbar}>
      <a className={styles.title} href="/">
        Portfolio
      </a>
      <div className={styles.menu}>
         {/* ici on va ajouter une image et pour cela on utilise la fonction getImageUrl définie dans utils.js  
         et dans source on ajoute le chemin de l'image qui se trouve dans le dossier assets */}
              <img className={styles.menuBtn} src={menuOpen ? getImageUrl("nav/closeIcon.png") : getImageUrl("nav/menuIcon.png")} alt="menu-button" onClick={() => setMenuOpen(!menuOpen)} />
           {/*  on a ajouté l ecouteur d'événement onClick sur le bouton menu, quand on click on enclanche la fonction setMenuOpen pour mettre à jour la variable d'état menuOpen */}
              <ul className={`${styles.menuItems} ${menuOpen && styles.menuOpen}`} onClick={()=>setMenuOpen(false)}>
         {/*   conditional rendering sur la variable d'état menuOpen : si menuOpen true on ajoute la className styles.menuOpen en plus de la classe déjà présente styles.menuItems . De plus, quand on clique sur un des element de la liste le menu se ferme */}
          <li>
            <a href="#about">À propos</a>
          </li>
          <li>
            <a href="#experience">Expériences</a>
          </li>
          <li>
            <a href="#projects">Projets</a>
          </li>
          <li>
            <a href="#contacts">Contacts</a>
          </li>
        </ul>
      </div>
      <p></p>
    </nav>
  );
}
