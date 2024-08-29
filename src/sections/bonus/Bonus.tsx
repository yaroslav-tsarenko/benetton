import React, {FC} from 'react';
import styles from './Bonus.module.scss';
import {Link} from "react-router-dom";
import {ReactComponent as TelegramIcon} from "../../assets/icons/telegram-icon.svg";

interface BonusProps {
    bonusLink: string;
}

const Bonus: FC<BonusProps> = ({bonusLink}) => {

    return (
        <div className={styles.bonusWrapper}>
            <h4>БОНУС</h4>
            <Link to={bonusLink} className={styles.bonus}>
                <TelegramIcon/>
                <p>У наших Телеграм каналах постійно проводяться акції та розіграші - встигни отримати</p>
                <h5>ХАЛЯВУ!</h5>
            </Link>
        </div>
    );
};

export default Bonus;