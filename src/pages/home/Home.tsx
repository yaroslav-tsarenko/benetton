import React, { useState, useEffect } from 'react';
import styles from "./Home.module.scss";
import WelcomeScreen from "../../sections/welcome-screen/WelcomeScreen";
import MainContent from "../../sections/main-content/MainContent";

const Home = () => {
    const [showHomePage, setShowHomePage] = useState(false);
    const [showMainContent, setShowMainContent] = useState(false);
    const [hideWelcomeScreen, setHideWelcomeScreen] = useState(false);

    const handleClick = () => {
        setShowHomePage(true);
    };

    useEffect(() => {
        if (showHomePage) {
            const hideTimer = setTimeout(() => {
                setHideWelcomeScreen(true);
            }, 1000);
            const showTimer = setTimeout(() => {
                setShowMainContent(true);
            }, 1200);
            return () => {
                clearTimeout(hideTimer);
                clearTimeout(showTimer);
            };
        }
    }, [showHomePage]);

    return (
        <div className={styles.container}>
            <div className={`${styles.content} ${!showHomePage ? styles.show : styles.hide} ${hideWelcomeScreen ? styles.hidden : ''}`}>
                <WelcomeScreen onClick={handleClick}/>
            </div>
            <div className={`${styles.content} ${showMainContent ? styles.show : styles.hide}`}>
                <MainContent/>
            </div>
        </div>
    );
};

export default Home;