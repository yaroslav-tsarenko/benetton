import React, {FC, useEffect, useState} from 'react';
import styles from "./WelcomeScreen.module.scss"
import {ReactComponent as PrimaryLogo} from "../../assets/images/primary-logo.svg";
import axios from "axios";
import {BACKEND_URL} from "../../constants/constants";
import ReCAPTCHA from "react-google-recaptcha";

interface WelcomeScreenProps {
    onClick: () => void;
}

const WelcomeScreen: FC<WelcomeScreenProps> = ({onClick}) => {

    const [isCaptchaCompleted, setIsCaptchaCompleted] = useState(false);

    const handleCaptchaChange = (value: string | null) => {
        if (value) {
            setIsCaptchaCompleted(true);
        }
    };

    const [settings, setSettings] = useState({
        captcha: false,
        writeUsLink: "",
        workWithUsLink: "",
        whereToBuyLink: "",
        whereWorkLink: "",
        reviewsLink: "",
        rulesLink: "",
        autoSale1Link: "",
        autoSale2Link: "",
        autoSale3Link: "",
        telegramChatLink: "",
        telegramBot1Link: "",
        telegramBot2Link: "",
        wannaWorkLink: "",
        wholesaleLink: "",
        LABRCLink: "",
        PSYLABLink: "",
        RCCLUBLink: "",
        LEGALIZERLink: "",
        BIGBROLink: "",
        BMWRCLink: "",
        AMORALLELink: "",
        partnerShipLink: "",
        managerLink: "",
        bonusLink: ""
    });

    useEffect(() => {
        const fetchSettings = async () => {
            try {
                const response = await axios.get(`${BACKEND_URL}/get-settings`);
                setSettings(response.data);
                console.log(response.data);
            } catch (error) {
                console.error("There was an error fetching the settings!", error);
            }
        };

        fetchSettings();
    }, []);


    return (
        <div className={styles.welcomeScreen}>
            <div className={styles.glowEffect}>
                <PrimaryLogo/>
            </div>
            <div className={styles.welcomeScreenLogo}>
                {settings.captcha && !isCaptchaCompleted ? (
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