import React from 'react';
import styles from './FastOrder.module.scss';
import ContainerWrapper from "../../components/container-wrapper/ContainerWrapper";
import ButtonFrame from "../../components/button-frame/ButtonFrame";
import {useLinkStore} from "../../store/linkStore";

const FastOrder = () => {

    const getLink = useLinkStore((state) => state.getLink);
    const autoSale1 = getLink("autoSale1") || '/';
    const autoSale2 = getLink("autoSale2") || '/';
    const autoSale3 = getLink("autoSale3") || '/';
    const telegramChatLink = getLink("telegramChat") || '/';
    const telegramBot1Link = getLink("telegramBot1") || '/';
    const telegramBot2Link = getLink("telegramBot2") || '/';

    return (
        <div className={styles.fastOrderWrapper}>
            <h1>ШВИДКЕ ЗАМОВЛЕННЯ</h1>
            <div className={styles.fastOrderContent}>
                <ContainerWrapper title="САЙТИ АВТОПРОДАЖ">
                    <ButtonFrame type="big" link={autoSale1} title="BNT24.BIZ" number="01"/>
                    <ButtonFrame type="big" link={autoSale2} title="BNT24.CC" number="02"/>
                    <ButtonFrame type="big" link={autoSale3} title="GREEN-MARKET.OR" number="03"/>
                </ContainerWrapper>
                <ContainerWrapper
                    title="ТЕЛЕГРАМ ЧАТ"
                    subTitle="Дотримуйтесь правил поводження у чаті Приємного спілкування!">
                    <ButtonFrame type="small" link={telegramChatLink} title="GREEN CHAT"/>
                </ContainerWrapper>
                <ContainerWrapper title="ТЕЛЕГРАМ БОТИ" subTitle="Намагаємося бути краще і постійно слідкуємо
                за якістю сервісу, завжди готові вирішити вашу проблему">
                    <ButtonFrame type="big" link={telegramBot1Link} title="BEN_MAGAZIN_BOT" number="01"/>
                    <ButtonFrame type="big" link={telegramBot2Link} title="B2_MARKET_BOT" number="02"/>
                </ContainerWrapper>
            </div>
        </div>
    );
};

export default FastOrder;