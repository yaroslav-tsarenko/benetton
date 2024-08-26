import React, {FC} from 'react';
import {Link} from "react-router-dom";
import styles from "./ButtonFrame.module.scss";

interface ButtonFrameProps {
    type: 'big' | 'small';
    title?: React.ReactNode;
    link: string;
    number?: string;
}

const ButtonFrame:FC<ButtonFrameProps> = ({type, title, link, number}) => {
    return (
        <Link to={link} className={`${styles.buttonFrame} ${styles[type]}`}>
            <h2>{number}</h2>
            <span>{title}</span>
        </Link>
    );
};

export default ButtonFrame;