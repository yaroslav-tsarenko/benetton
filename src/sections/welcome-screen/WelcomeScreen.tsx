import React, {FC, useState} from 'react';
import styles from "./WelcomeScreen.module.scss"
import {ReactComponent as PrimaryLogo} from "../../assets/images/primary-logo.svg";
import {useLinkStore} from "../../store/linkStore";
import ReCAPTCHA from "react-google-recaptcha";

interface WelcomeScreenProps {
    onClick: () => void;
}

const WelcomeScreen: FC<WelcomeScreenProps> = ({onClick}) => {

    const captchaStatus = useLinkStore((state) => state.getCaptchaStatus());
    const [isCaptchaCompleted, setIsCaptchaCompleted] = useState(false);

    const handleCaptchaChange = (value: string | null) => {
        if (value) {
            setIsCaptchaCompleted(true);
        }
    };


    return (
        <div className={styles.welcomeScreen}>
            <div className={styles.glowEffect}>
                <PrimaryLogo/>
            </div>
            <div className={styles.welcomeScreenLogo}>
                {captchaStatus === 'on' && !isCaptchaCompleted ? (
                        <ReCAPTCHA
                            sitekey="6Lcu-ogpAAAAAEOc-_bYulbAKG6_8lZboQ66BTS0"
                            onChange={handleCaptchaChange}
                        />
                ) : (
                    <button onClick={onClick}>CLICK ME</button>
                )}
            </div>
        </div>

    );
};

export default WelcomeScreen;