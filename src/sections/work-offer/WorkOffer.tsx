import React from 'react';
import styles from './WorkOffer.module.scss';
import ButtonFrame from "../../components/button-frame/ButtonFrame";
import {Link} from "react-router-dom";

const WorkOffer = () => {
    return (
        <div className={styles.workOfferWrapper}>
            <h3>ПРОПОНУЄМО СПІВПРАЦЮ</h3>
            <div className={styles.workOfferContent}>
                <div className={styles.partnerShip}>
                    <p>Розглядаємо будь-яку пропозицію співпраці з виробниками та постачальниками продукції</p>
                    <Link className={styles.partnerLink} to="/">
                        Домовитися про співпрацю
                    </Link>
                </div>
                <div className={styles.staff}>
                    <section>
                        <h4>Потребуємо членів персоналу:</h4>
                        <p>кур’єрів / кур’єрів експедиторів / фасовщиків / хіміків</p>
                    </section>
                    <ButtonFrame type="big" link="/" title="МЕНЕДЖЕР ПЕРСОНАЛУ"/>
                 </div>
            </div>
        </div>
    );
};

export default WorkOffer;