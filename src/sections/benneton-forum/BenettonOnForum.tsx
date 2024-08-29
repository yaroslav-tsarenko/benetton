import React, {FC} from 'react';
import styles from './BenettonOnForum.module.scss';
import ForumLink from "../../components/forum-link/ForumLink";

interface BenettonOnForumProps {
    LABRCLink: string,
    PSYLABLink: string,
    RCCLUBLink: string,
    LEGALIZERLink: string,
    BIGBROLink: string,
    BMWRCLink: string,
    AMORALLELink: string
}

const BenettonOnForum:FC<BenettonOnForumProps> = ({LABRCLink, BIGBROLink, BMWRCLink, AMORALLELink, RCCLUBLink, PSYLABLink, LEGALIZERLink}) => {


    return (
        <div className={styles.benettonOnForumWrapper}>
            <h1>BENETTON НА ФОРУМАХ:</h1>
            <div className={styles.benettonOnForumContent}>
                <section>
                    <ForumLink link={LABRCLink} title="Labrc"/>
                    <ForumLink link={PSYLABLink} title="Psylab"/>
                    <ForumLink link={RCCLUBLink} title="RcClub"/>
                    <ForumLink link={LEGALIZERLink} title="Legalizer"/>
                    <p className={styles.tipMobile}>
                        Залишайте відгуки про послуги, будемо дуже вдячні :)
                    </p>
                </section>
                <section>
                    <ForumLink link={BIGBROLink} title="Bigbro"/>
                    <ForumLink link={BMWRCLink} title="Bmwrc"/>
                    <div className={styles.tip}>
                        <p>
                            Залишайте відгуки про послуги, будемо дуже вдячні :)
                        </p>
                    </div>
                    <ForumLink link={AMORALLELink} title="Amoralle"/>
                </section>
            </div>
        </div>
    );
};

export default BenettonOnForum;