import React, { useState, useEffect } from 'react';
import styles from "./AdminPanel.module.scss";
import LinkSection from "../../components/link-section/LinkSection";
import TurnCaptcha from "../../components/turn-on-captcha/TurnCaptcha";
import axios from "axios";
import {BACKEND_URL} from "../../constants/constants";

const AdminPanel: React.FC = () => {
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
            } catch (error) {
                console.error("There was an error fetching the settings!", error);
            }
        };

        fetchSettings();
    }, []);

    const handleInputChange = (name: string, value: string) => {
        setSettings(prevSettings => ({ ...prevSettings, [name]: value }));
    };

    const handleSave = async () => {
        try {
            const response = await axios.post(`${BACKEND_URL}/apply-settings`, settings);
            if (response.status === 200) {
                console.log("Settings updated successfully!");
                alert("Changes saved");
            }
        } catch (error) {
            console.error("There was an error updating the settings!", error);
            alert("Failed to save changes");
        }
    };

    return (
        <div className={styles.adminPanelWrapper}>
            <h1>АДМІН ПАНЕЛЬ</h1>
            <div className={styles.adminPanelContent}>
                <TurnCaptcha onChange={status => setSettings(prevSettings => ({ ...prevSettings, captcha: status }))} />
                <LinkSection label="Посилання нa кнопку 'Написати нам'" customNameOfLink="writeUsLink" value={settings.writeUsLink} onChange={handleInputChange} />
                <LinkSection label="Посилання на кнопку 'Працювати у нас'" customNameOfLink="workWithUsLink" value={settings.workWithUsLink} onChange={handleInputChange} />
                <LinkSection label="Посилання на кнопку 'Де купити'" customNameOfLink="whereToBuyLink" value={settings.whereToBuyLink} onChange={handleInputChange} />
                <LinkSection label="Посилання на кнопку 'Де працюємо'" customNameOfLink="whereWorkLink" value={settings.whereWorkLink} onChange={handleInputChange} />
                <LinkSection label="Посилання на кнопку 'Відгуки'" customNameOfLink="reviewsLink" value={settings.reviewsLink} onChange={handleInputChange} />
                <LinkSection label="Посилання на кнопку 'Правила'" customNameOfLink="rulesLink" value={settings.rulesLink} onChange={handleInputChange} />
                <LinkSection label="Посилання на кнопку 'Сайти Автопродаж 1'" customNameOfLink="autoSale1Link" value={settings.autoSale1Link} onChange={handleInputChange} />
                <LinkSection label="Посилання на кнопку 'Сайти Автопродаж 2'" customNameOfLink="autoSale2Link" value={settings.autoSale2Link} onChange={handleInputChange} />
                <LinkSection label="Посилання на кнопку 'Сайти Автопродаж 3'" customNameOfLink="autoSale3Link" value={settings.autoSale3Link} onChange={handleInputChange} />
                <LinkSection label="Посилання на кнопку 'Телеграм Чат'" customNameOfLink="telegramChatLink" value={settings.telegramChatLink} onChange={handleInputChange} />
                <LinkSection label="Посилання на кнопку 'Телеграм Боти 1'" customNameOfLink="telegramBot1Link" value={settings.telegramBot1Link} onChange={handleInputChange} />
                <LinkSection label="Посилання на кнопку 'Телеграм Боти 2'" customNameOfLink="telegramBot2Link" value={settings.telegramBot2Link} onChange={handleInputChange} />
                <LinkSection label="Посилання на кнопку 'Хочу працювати'" customNameOfLink="wannaWorkLink" value={settings.wannaWorkLink} onChange={handleInputChange} />
                <LinkSection label="Посилання на кнопку 'Відправки / ОПТ'" customNameOfLink="wholesaleLink" value={settings.wholesaleLink} onChange={handleInputChange} />
                <LinkSection label="Посилання на кнопку форуму 'LABRC'" customNameOfLink="LABRCLink" value={settings.LABRCLink} onChange={handleInputChange} />
                <LinkSection label="Посилання на кнопку форуму 'PSYLAB'" customNameOfLink="PSYLABLink" value={settings.PSYLABLink} onChange={handleInputChange} />
                <LinkSection label="Посилання на кнопку форуму 'RCCLUB'" customNameOfLink="RCCLUBLink" value={settings.RCCLUBLink} onChange={handleInputChange} />
                <LinkSection label="Посилання на кнопку форуму 'LEGALIZER'" customNameOfLink="LEGALIZERLink" value={settings.LEGALIZERLink} onChange={handleInputChange} />
                <LinkSection label="Посилання на кнопку форуму 'BIGBRO'" customNameOfLink="BIGBROLink" value={settings.BIGBROLink} onChange={handleInputChange} />
                <LinkSection label="Посилання на кнопку форуму 'BMWRC'" customNameOfLink="BMWRCLink" value={settings.BMWRCLink} onChange={handleInputChange} />
                <LinkSection label="Посилання на кнопку форуму 'AMORALLE'" customNameOfLink="AMORALLELink" value={settings.AMORALLELink} onChange={handleInputChange} />
                <LinkSection label="Посилання на кнопку 'Домовитись про співпрацю'" customNameOfLink="partnerShipLink" value={settings.partnerShipLink} onChange={handleInputChange} />
                <LinkSection label="Посилання на кнопку 'Менеджер персоналу'" customNameOfLink="managerLink" value={settings.managerLink} onChange={handleInputChange} />
                <LinkSection label="Посилання на кнопку бонус" customNameOfLink="bonusLink" value={settings.bonusLink} onChange={handleInputChange} />
            </div>
            <button onClick={handleSave}>Зберегти</button>
        </div>
    );
};

export default AdminPanel;