
import React from "react";

import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export default function Hero() {
    return (
     <section className={styles.container}>
        <div className={styles.content}>
            <h1 className={styles.title}> Hi, I&apos;m Nachida!</h1>
            <p className={styles.description}> I&apos;m a full-stack developper using React and NodeJs.</p>
                <a href="mailto:n_o_78@yahoo.com" className={styles.contactBtn}>Contact me</a>
                </div>
                <img src={getImageUrl("hero/heroImage.png")} alt="Hero image of me" className={styles.heroImg} />
            <div className={styles.topBlur} />
            <div className={styles.bottomBlur} />
        
   </section>
  );
}
