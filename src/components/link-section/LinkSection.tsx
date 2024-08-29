import React from 'react';
import styles from './LinkSection.module.scss';

interface LinkSectionProps {
    label: string;
    customNameOfLink: string;
    value: string;
    onChange: (name: string, value: string) => void;
}

const LinkSection: React.FC<LinkSectionProps> = ({ label, customNameOfLink, value, onChange }) => {
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        onChange(customNameOfLink, e.target.value);
    };

    return (
        <div className={styles.linkSection}>
            <label>{label}</label>
            <input type="text" value={value} onChange={handleChange} />
        </div>
    );
};

export default LinkSection;