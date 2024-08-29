import React, {useEffect, useState} from 'react';
import Header from "../../components/header/Header";
import styles from "./MainContent.module.scss";
import FastOrder from "../fast-order/FastOrder";
import WorkingInUkraine from "../working-in-ukraine/WorkingInUkraine";
import BenettonOnForum from "../benneton-forum/BenettonOnForum";
import WorkOffer from "../work-offer/WorkOffer";
import Bonus from "../bonus/Bonus";
import ImportantRules from "../important-rules/ImportantRules";
import Footer from "../../components/footer/Footer";
import axios from "axios";
import {BACKEND_URL} from "../../constants/constants";

const MainContent = () => {

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
        <div className={styles.mainContentWrapper}>
            <Header
                writeUsLink={settings.writeUsLink}
                reviewsLink={settings.reviewsLink}
                rulesLink={settings.rulesLink}
                whereToBuyLink={settings.whereToBuyLink}
                whereWorkLink={settings.whereWorkLink}
                workWithUsLink={settings.workWithUsLink}
            />
            <FastOrder
                autoSale1Link={settings.autoSale1Link}
                autoSale2Link={settings.autoSale2Link}
                autoSale3Link={settings.autoSale3Link}
                telegramChatLink={settings.telegramChatLink}
                telegramBot1Link={settings.telegramBot1Link}
                telegramBot2Link={settings.telegramBot2Link}
            />
            <WorkingInUkraine
                wannaWorkLink={settings.wannaWorkLink}
                wholesaleLink={settings.wholesaleLink}
            />
            <BenettonOnForum
                AMORALLELink={settings.AMORALLELink}
                BIGBROLink={settings.BIGBROLink}
                BMWRCLink={settings.BMWRCLink}
                LABRCLink={settings.LABRCLink}
                LEGALIZERLink={settings.LEGALIZERLink}
                PSYLABLink={settings.PSYLABLink}
                RCCLUBLink={settings.RCCLUBLink}
            />
            <WorkOffer
                partnerShipLink={settings.partnerShipLink}
                managerLink={settings.managerLink}
            />
            <Bonus
                bonusLink={settings.bonusLink}
            />
            <ImportantRules/>
            <Footer/>
        </div>

    );
};

export default MainContent;