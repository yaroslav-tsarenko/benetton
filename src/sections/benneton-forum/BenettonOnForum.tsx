import React from 'react';
import styles from './BenettonOnForum.module.scss';
import ForumLink from "../../components/forum-link/ForumLink";
import {useLinkStore} from "../../store/linkStore";

const BenettonOnForum = () => {
    const getLink = useLinkStore((state) => state.getLink);
    const linkLABRC = getLink("LABRC") || '/';
    const linkPSYLAB = getLink("PSYLAB") || '/';
    const linkRCCLUB = getLink("RCCLUB") || '/';
    const linkLEGALIZER = getLink("LEGALIZER") || '/';
    const linkBIGBRO = getLink("BIGBRO") || '/';
    const linkBMWRC = getLink("BMWRC") || '/';
    const linkAMORALLE = getLink("AMORALLE") || '/';

    return (
        <div className={styles.benettonOnForumWrapper}>
            <h1>BENETTON НА ФОРУМАХ:</h1>
            <div className={styles.benettonOnForumContent}>
                <section>
                    <ForumLink link={linkLABRC} title="Labrc"/>
                    <ForumLink link={linkPSYLAB} title="Psylab"/>
                    <ForumLink link={linkRCCLUB} title="RcClub"/>
                    <ForumLink link={linkLEGALIZER} title="Legalizer"/>
                    <p className={styles.tipMobile}>
                        Залишайте відгуки про послуги, будемо дуже вдячні :)
                    </p>
                </section>
                <section>
                    <ForumLink link={linkBIGBRO} title="Bigbro"/>
                    <ForumLink link={linkBMWRC} title="Bmwrc"/>
                    <div className={styles.tip}>
                        <p>
                            Залишайте відгуки про послуги, будемо дуже вдячні :)
                        </p>
                    </div>
                    <ForumLink link={linkAMORALLE} title="Amoralle"/>
                </section>
            </div>
        </div>
    );
};

export default BenettonOnForum;