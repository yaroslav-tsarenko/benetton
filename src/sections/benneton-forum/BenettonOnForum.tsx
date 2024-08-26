import React from 'react';
import styles from './BenettonOnForum.module.scss';
import ForumLink from "../../components/forum-link/ForumLink";

const BenettonOnForum = () => {
    return (
        <div className={styles.benettonOnForumWrapper}>
            <h1>BENETTON НА ФОРУМАХ:</h1>
            <div className={styles.benettonOnForumContent}>
                <section>
                    <ForumLink link="/" title="Labrc"/>
                    <ForumLink link="/" title="Psylab"/>
                    <ForumLink link="/" title="RcClub"/>
                    <ForumLink link="/" title="Legalizer"/>
                </section>
                <section>
                    <ForumLink link="/" title="Bigbro"/>
                    <ForumLink link="/" title="Bmwrc"/>
                    <div className={styles.tip}>
                        <p>
                            Залишайте відгуки про послуги, будемо дуже вдячні :)
                        </p>
                    </div>
                    <ForumLink link="/" title="Amoralle"/>
                </section>
            </div>
        </div>
    );
};

export default BenettonOnForum;