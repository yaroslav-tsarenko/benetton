import React, {FC, useEffect, useState} from 'react';
import styles from './WorkOffer.module.scss';
import ButtonFrame from "../../components/button-frame/ButtonFrame";
import {Link} from "react-router-dom";
import {BACKEND_URL} from "../../constants/constants";
import axios from "axios";

interface WorkOfferProps {
    partnerShipLink: string,
    managerLink: string,
}

interface WorkOfferButton {
    name: string;
    link: string;
    description: string;
}

interface ContactManagerButton {
    title: string;
    description: string;
    name: string;
    link: string;
}


const WorkOffer: FC<WorkOfferProps> = ({partnerShipLink, managerLink}) => {

    const [workOfferButton, setWorkOfferButton] = useState<WorkOfferButton>({ name: "", description: "", link: "" });
    const [contactManagerButton, setContactManagerButton] = useState<ContactManagerButton>({ title: "", description: "", name: "", link: "" });

    useEffect(() => {
        const fetchButtons = async () => {
            try {
                const workOfferResponse = await axios.get(`${BACKEND_URL}/get-work-offer-button`);
                setWorkOfferButton(workOfferResponse.data);

                const contactManagerResponse = await axios.get(`${BACKEND_URL}/get-contact-manager-button`);
                setContactManagerButton(contactManagerResponse.data);
            } catch (error) {
                console.error("Error fetching buttons:", error);
            }
        };

        fetchButtons();
    }, []);

    return (
        <div className={styles.workOfferWrapper}>
            <h3>ПРОПОНУЄМО СПІВПРАЦЮ</h3>
            <div className={styles.workOfferContent}>
                <div className={styles.partnerShip}>
                    <p>{workOfferButton.description}</p>
                    <Link className={styles.partnerLink} to={workOfferButton.link}>
                        {workOfferButton.name}
                    </Link>
                </div>
                <div className={styles.staff}>
                    <section>
                        <h4>{contactManagerButton.title}</h4>
                        <p>{contactManagerButton.description}</p>
                    </section>
                    <ButtonFrame type="big" link={contactManagerButton.link} title={contactManagerButton.name} />
                </div>
            </div>
        </div>
    );
};

export default WorkOffer;