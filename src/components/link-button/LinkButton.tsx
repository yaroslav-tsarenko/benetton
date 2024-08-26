import React, { FC } from 'react';
import styles from './LinkButton.module.scss';
import { Link } from 'react-router-dom';

interface ButtonProps {
    children?: React.ReactNode;
    link: string;
}

const LinkButton: FC<ButtonProps> = ({ children, link }) => {
    return (
        <Link className={styles.linkButton} to={link}>
            {children}
        </Link>
    );
}

export default LinkButton;