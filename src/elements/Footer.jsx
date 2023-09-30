import React from 'react';
import { ImFacebook, ImInstagram, ImTwitter, ImGithub } from "react-icons/im";
import styles from "./Footer.css";

const Footer = () => {
    return (
      <footer>
        <div className={styles.social_container}>
          <h5>Hit us up on our socials!</h5>
          <div className={styles.social_icons}>
            
            <a href="https://www.instagram.com/emma.leephotos/" target="_blank" className={styles.circle}>
              <ImInstagram size="1.5em" color="red" />
            </a>
          </div>
        </div>
       
      </footer>
    );
  };

export default Footer