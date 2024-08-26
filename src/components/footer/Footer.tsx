import React from 'react';
import styles from "./Footer.module.scss"
import {ReactComponent as FooterLogo} from "../../assets/icons/footer-logo.svg";

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <FooterLogo/>
            <p>© 2024 Benetton Усі права захищені.</p>
        </footer>
    );
};

export default Footer;