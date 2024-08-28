import React, { useState, useEffect } from 'react';
import styles from "./LinkSection.module.scss";
import { useLinkStore } from '../../store/linkStore';

interface LinkSectionProps {
    label: string;
    customNameOfLink: string;
}

const LinkSection: React.FC<LinkSectionProps> = ({ label, customNameOfLink }) => {
    const [value, setValue] = useState('');
    const setLink = useLinkStore((state) => state.setLink);

    useEffect(() => {
        const storedValue = useLinkStore.getState().getLink(customNameOfLink);
        if (storedValue) {
            setValue(storedValue);
        }
    }, [customNameOfLink]);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value);
        setLink(customNameOfLink, e.target.value);
    };

    return (
        <div className={styles.linkSection}>
            <p>{label}</p>
            <input
                value={value}
                onChange={handleChange}
            />
        </div>
    );
};

export default LinkSection;
