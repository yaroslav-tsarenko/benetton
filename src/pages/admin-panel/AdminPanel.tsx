import React from 'react';
import styles from "./AdminPanel.module.scss";
import LinkSection from "../../components/link-section/LinkSection";
import TurnCaptcha from "../../components/turn-on-captcha/TurnCaptcha";

const AdminPanel = () => {

    const handleSave = () => {
        alert("Changes saved");
    };

    return (
        <div className={styles.adminPanelWrapper}>
            <h1>АДМІН ПАНЕЛЬ</h1>
            <div className={styles.adminPanelContent}>
                <TurnCaptcha/>
                <LinkSection label="Посилання нa кнопку 'Написати нам'" customNameOfLink="writeUs"/>
                <LinkSection label="Посилання на кнопку 'Працювати у нас'" customNameOfLink="workWithUs"/>
                <LinkSection label="Посилання на кнопку 'Де купити'" customNameOfLink="whereToBuy"/>
                <LinkSection label="Посилання на кнопку 'Де працюємо'" customNameOfLink="whereWork"/>
                <LinkSection label="Посилання на кнопку 'Відгуки'" customNameOfLink="reviews"/>
                <LinkSection label="Посилання на кнопку 'Правила'" customNameOfLink="rules"/>
                <LinkSection label="Посилання на кнопку 'Сайти Автопродаж 1'" customNameOfLink="autoSale1"/>
                <LinkSection label="Посилання на кнопку 'Сайти Автопродаж 2'" customNameOfLink="autoSale2"/>
                <LinkSection label="Посилання на кнопку 'Сайти Автопродаж 3'" customNameOfLink="autoSale3"/>
                <LinkSection label="Посилання на кнопку 'Телеграм Чат'" customNameOfLink="telegramChat"/>
                <LinkSection label="Посилання на кнопку 'Телеграм Боти 1'" customNameOfLink="telegramBot1"/>
                <LinkSection label="Посилання на кнопку 'Телеграм Боти 2'" customNameOfLink="telegramBot2"/>
                <LinkSection label="Посилання на кнопку 'Хочу працювати'" customNameOfLink="wannaWork"/>
                <LinkSection label="Посилання на кнопку 'Відправки / ОПТ'" customNameOfLink="wholesale"/>
                <LinkSection label="Посилання на кнопку форуму 'LABRC'" customNameOfLink="LABRC"/>
                <LinkSection label="Посилання на кнопку форуму 'PSYLAB'" customNameOfLink="PSYLAB"/>
                <LinkSection label="Посилання на кнопку форуму 'RCCLUB'" customNameOfLink="RCCLUB"/>
                <LinkSection label="Посилання на кнопку форуму 'LEGALIZER'" customNameOfLink="LEGALIZER"/>
                <LinkSection label="Посилання на кнопку форуму 'BIGBRO'" customNameOfLink="BIGBRO"/>
                <LinkSection label="Посилання на кнопку форуму 'BMWRC'" customNameOfLink="BMWRC"/>
                <LinkSection label="Посилання на кнопку форуму 'AMORALLE'" customNameOfLink="AMORALLE"/>
                <LinkSection label="Посилання на кнопку 'Домовитись про співпрацю'" customNameOfLink="partnerShip"/>
                <LinkSection label="Посилання на кнопку 'Менеджер персоналу'" customNameOfLink="manager"/>
                <LinkSection label="Посилання на кнопку бонус" customNameOfLink="bonus"/>
            </div>
            <button onClick={handleSave}>Зберегти</button>
        </div>
    );
};

export default AdminPanel;