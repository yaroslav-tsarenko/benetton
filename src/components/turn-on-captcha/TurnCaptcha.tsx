import React, { useState } from 'react';
import styles from "./TurnCaptcha.module.scss";

interface TurnCaptchaProps {
    onChange: (status: boolean) => void;
}

const TurnCaptcha: React.FC<TurnCaptchaProps> = ({ onChange }) => {
    const [captchaStatus, setCaptchaStatus] = useState(false);

    const toggleCaptcha = () => {
        setCaptchaStatus(!captchaStatus);
        onChange(!captchaStatus);
    };

    return (
        <div className={styles.turnCaptcha}>
            <p>Включити капчу</p>
            <button onClick={toggleCaptcha}>
                {captchaStatus ? 'Turn Captcha Off' : 'Turn Captcha On'}
            </button>
        </div>
    );
};

export default TurnCaptcha;
