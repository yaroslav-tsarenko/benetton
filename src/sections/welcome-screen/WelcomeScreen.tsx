import React, {FC} from 'react';
import styles from "./WelcomeScreen.module.scss"
import { ReactComponent as PrimaryLogo } from "../../assets/images/primary-logo.svg";
import {Fade} from "react-awesome-reveal";

interface WelcomeScreenProps {
    onClick: () => void;
}

const WelcomeScreen: FC<WelcomeScreenProps> = ({onClick}) => {
    return (
            <div className={styles.welcomeScreen}>
                <div className={styles.glowEffect}>
                    <PrimaryLogo/>
                </div>
                <div className={styles.welcomeScreenLogo}>
                    <button onClick={onClick}>CLICK ME</button>
                </div>
            </div>

    );
};

export default WelcomeScreen;