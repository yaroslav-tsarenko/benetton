import React, {FC, useEffect, useState} from 'react';
import styles from './Bonus.module.scss';
import {Link} from "react-router-dom";
import {ReactComponent as TelegramIcon} from "../../assets/icons/telegram-icon.svg";
import axios from "axios";
import {BACKEND_URL} from "../../constants/constants";

interface BonusProps {
    bonusLink: string;
}

interface BonusButton {
    title: string;
    description: string;
    link: string;
    attentionText: string;
}

const Bonus: FC<BonusProps> = ({bonusLink}) => {

    const [bonusButton, setBonusButton] = useState<BonusButton>({ title: "", description: "", link: "", attentionText: "" });

    useEffect(() => {
        const fetchBonusButton = async () => {
            try {
                const response = await axios.get(`${BACKEND_URL}/get-bonus-button`);
                setBonusButton(response.data);
            } catch (error) {
                console.error('Error fetching bonus button:', error);
            }
        };

        fetchBonusButton();
    }, []);

    return (
        <div className={styles.bonusWrapper}>
            <h4>{bonusButton.title}</h4>
            <Link to={bonusButton.link} className={styles.bonus}>
                <TelegramIcon/>
                <p>{bonusButton.description}</p>
                <h5>{bonusButton.attentionText}</h5>
            </Link>
        </div>
    );
};

export default Bonus;