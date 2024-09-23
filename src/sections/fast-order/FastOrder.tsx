import React, {FC, useEffect, useState} from 'react';
import styles from './FastOrder.module.scss';
import ContainerWrapper from "../../components/container-wrapper/ContainerWrapper";
import ButtonFrame from "../../components/button-frame/ButtonFrame";
import {BACKEND_URL} from "../../constants/constants";
import axios from "axios";

interface FasOrderProps {
    autoSale1Link: string,
    autoSale2Link: string,
    autoSale3Link: string,
    telegramChatLink: string,
    telegramBot1Link: string,
    telegramBot2Link: string,
}

interface LinkButton {
    name: string;
    link: string;
}

const FastOrder: FC<FasOrderProps> = ({autoSale1Link, autoSale2Link, autoSale3Link, telegramChatLink, telegramBot1Link, telegramBot2Link}) => {

    const [linkButtons, setLinkButtons] = useState<LinkButton[]>([]);
    const [chatButtons, setChatButtons] = useState<LinkButton[]>([]);
    const [botButtons, setBotButtons] = useState<LinkButton[]>([]);

    useEffect(() => {
        const fetchLinkButtons = async () => {
            try {
                const response = await axios.get(`${BACKEND_URL}/get-link-buttons`);
                setLinkButtons(response.data);
            } catch (error) {
                console.error("Error fetching link buttons:", error);
            }
        };

        const fetchChatButtons = async () => {
            try {
                const response = await axios.get(`${BACKEND_URL}/get-telegram-chat-buttons`);
                setChatButtons(response.data);
            } catch (error) {
                console.error("Error fetching chat buttons:", error);
            }
        };

        const fetchBotButtons = async () => {
            try {
                const response = await axios.get(`${BACKEND_URL}/get-telegram-bot-buttons`);
                setBotButtons(response.data);
            } catch (error) {
                console.error("Error fetching bot buttons:", error);
            }
        };

        fetchLinkButtons();
        fetchChatButtons();
        fetchBotButtons();
    }, []);

    return (
        <div className={styles.fastOrderWrapper}>
            <h1>ШВИДКЕ ЗАМОВЛЕННЯ</h1>
            <div className={styles.fastOrderContent}>
                <ContainerWrapper title="САЙТИ АВТОПРОДАЖ">
                    {linkButtons.map((button, index) => (
                        <ButtonFrame key={index} type="big" link={button.link} title={button.name} number={`0${index + 1}`}/>
                    ))}
                </ContainerWrapper>
                <ContainerWrapper
                    title="ТЕЛЕГРАМ ЧАТ"
                    subTitle="Дотримуйтесь правил поводження у чаті Приємного спілкування!">
                    {chatButtons.map((button, index) => (
                        <ButtonFrame key={index} type="small" link={button.link} title={button.name}/>
                    ))}
                </ContainerWrapper>
                <ContainerWrapper title="ТЕЛЕГРАМ БОТИ" subTitle="Намагаємося бути краще і постійно слідкуємо
                за якістю сервісу, завжди готові вирішити вашу проблему">
                    {botButtons.map((button, index) => (
                        <ButtonFrame key={index} type="big" link={button.link} title={button.name} number={`0${index + 1}`}/>
                    ))}
                </ContainerWrapper>
            </div>
        </div>
    );
};

export default FastOrder;