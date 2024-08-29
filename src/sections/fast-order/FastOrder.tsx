import React, {FC} from 'react';
import styles from './FastOrder.module.scss';
import ContainerWrapper from "../../components/container-wrapper/ContainerWrapper";
import ButtonFrame from "../../components/button-frame/ButtonFrame";

interface FasOrderProps {
    autoSale1Link: string,
    autoSale2Link: string,
    autoSale3Link: string,
    telegramChatLink: string,
    telegramBot1Link: string,
    telegramBot2Link: string,
}

const FastOrder: FC<FasOrderProps> = ({autoSale1Link, autoSale2Link, autoSale3Link, telegramChatLink, telegramBot1Link, telegramBot2Link}) => {

    return (
        <div className={styles.fastOrderWrapper}>
            <h1>ШВИДКЕ ЗАМОВЛЕННЯ</h1>
            <div className={styles.fastOrderContent}>
                <ContainerWrapper title="САЙТИ АВТОПРОДАЖ">
                    <ButtonFrame type="big" link={autoSale1Link} title="BNT24.BIZ" number="01"/>
                    <ButtonFrame type="big" link={autoSale2Link} title="BNT24.CC" number="02"/>
                    <ButtonFrame type="big" link={autoSale3Link} title="GREEN-MARKET.OR" number="03"/>
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