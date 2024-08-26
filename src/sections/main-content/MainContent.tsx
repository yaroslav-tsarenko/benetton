import React from 'react';
import {Fade} from "react-awesome-reveal";
import Header from "../../components/header/Header";
import styles from "./MainContent.module.scss";
import FastOrder from "../fast-order/FastOrder";
import WorkingInUkraine from "../working-in-ukraine/WorkingInUkraine";
import BenettonOnForum from "../benneton-forum/BenettonOnForum";
import WorkOffer from "../work-offer/WorkOffer";
import Bonus from "../bonus/Bonus";
import ImportantRules from "../important-rules/ImportantRules";
import Footer from "../../components/footer/Footer";

const MainContent = () => {
    return (
        <div className={styles.mainContentWrapper}>
            <Header/>
            <FastOrder/>
            <WorkingInUkraine/>
            <BenettonOnForum/>
            <WorkOffer/>
            <Bonus/>
            <ImportantRules/>
            <Footer/>
        </div>

    );
};

export default MainContent;