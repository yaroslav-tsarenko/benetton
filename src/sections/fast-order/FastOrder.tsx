import React from 'react';
import styles from './FastOrder.module.scss';
import ContainerWrapper from "../../components/container-wrapper/ContainerWrapper";
import ButtonFrame from "../../components/button-frame/ButtonFrame";

const FastOrder = () => {
    return (
        <div className={styles.fastOrderWrapper}>
            <h1>ШВИДКЕ ЗАМОВЛЕННЯ</h1>
            <div className={styles.fastOrderContent}>
                <ContainerWrapper title="САЙТИ АВТОПРОДАЖ">
                    <ButtonFrame type="big" link="/" title="BNT24.BIZ" number="01"/>
                    <ButtonFrame type="big" link="/" title="BNT24.CC" number="02"/>
                    <ButtonFrame type="big" link="/" title="GREEN-MARKET.OR" number="03"/>
                </ContainerWrapper>
                <ContainerWrapper title="ТЕЛЕГРАМ ЧАТ">
                    <ButtonFrame type="small" link="/" title="GREEN CHAT" />
                </ContainerWrapper>
                <ContainerWrapper title="ТЕЛЕГРАМ БОТИ">
                    <ButtonFrame type="big" link="/" title="BEN_MAGAZIN_BOT" number="01"/>
                    <ButtonFrame type="big" link="/" title="B2_MARKET_BOT" number="02"/>
                </ContainerWrapper>
            </div>
        </div>
    );
};

export default FastOrder;