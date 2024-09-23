import React, {FC, useEffect, useState} from 'react';
import styles from './BenettonOnForum.module.scss';
import ForumLink from "../../components/forum-link/ForumLink";
import {BACKEND_URL} from "../../constants/constants";
import axios from "axios";

interface BenettonOnForumProps {
    LABRCLink: string,
    PSYLABLink: string,
    RCCLUBLink: string,
    LEGALIZERLink: string,
    BIGBROLink: string,
    BMWRCLink: string,
    AMORALLELink: string
}

interface ForumButton {
    name: string;
    link: string;
}

const BenettonOnForum:FC<BenettonOnForumProps> = ({LABRCLink, BIGBROLink, BMWRCLink, AMORALLELink, RCCLUBLink, PSYLABLink, LEGALIZERLink}) => {

    const [forumButtons, setForumButtons] = useState<ForumButton[]>([]);

    useEffect(() => {
        const fetchForumButtons = async () => {
            try {
                const response = await axios.get(`${BACKEND_URL}/get-forum-buttons`);
                setForumButtons(response.data);
            } catch (error) {
                console.error('Error fetching forum buttons:', error);
            }
        };

        fetchForumButtons();
    }, []);

    const chunkedButtons = [];
    for (let i = 0; i < forumButtons.length; i += 4) {
        chunkedButtons.push(forumButtons.slice(i, i + 4));
    }

    return (
        <div className={styles.benettonOnForumWrapper}>
            <h1>BENETTON НА ФОРУМАХ:</h1>
            <div className={styles.benettonOnForumContent}>
                {chunkedButtons.map((buttonGroup, groupIndex) => (
                    <section
                        key={groupIndex}
                        style={{
                            justifyContent: groupIndex % 2 === 0 ? 'flex-start' : 'flex-end',
                            marginRight: groupIndex % 2 !== 0 ? '150px' : '0'
                        }}
                    >
                        {buttonGroup.map((button, index) => (
                            <ForumLink key={index} link={button.link} title={button.name}/>
                        ))}
                        {groupIndex === chunkedButtons.length - 1 && forumButtons.length % 2 !== 0 && (
                            <div className={styles.tip}>
                                <p>Залишайте відгуки про послуги, будемо дуже вдячні :)</p>
                            </div>
                        )}
                    </section>
                ))}

            </div>
            <div className={styles.benettonOnForumContentMobile}>
                {forumButtons.map((button, index) => (
                    <ForumLink key={index} link={button.link} title={button.name}/>
                ))}

            </div>
            <div className={styles.tipMobile}>
                <p>Залишайте відгуки про послуги, будемо дуже вдячні :)</p>
            </div>

        </div>
    );
};

export default BenettonOnForum;