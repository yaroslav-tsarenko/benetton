import React, { useState } from 'react';
import styles from "./TurnCaptcha.module.scss";
import {useLinkStore} from "../../store/linkStore";

const TurnCaptcha: React.FC = () => {
    const setCaptchaStatus = useLinkStore((state) => state.setCaptchaStatus);
    const captchaStatus = useLinkStore((state) => state.getCaptchaStatus());

    const toggleCaptcha = () => {
        const newStatus = captchaStatus === 'on' ? 'off' : 'on';
        setCaptchaStatus(newStatus);
    };

    return (
        <div className={styles.turnCaptcha}>
            <p>Включити капчу</p>
            <button onClick={toggleCaptcha}>
                {captchaStatus === 'on' ? 'Turn Captcha Off' : 'Turn Captcha On'}
            </button>
        </div>
    );
};

export default TurnCaptcha;