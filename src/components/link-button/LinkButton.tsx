import React, {FC} from 'react';
import './LinkButton.scss';

interface ButtonProps {
    text: string;
    onClick: () => void;
}

const LinkButton: FC<ButtonProps> = ({ text }) => {
    return (
        <button className="custom-button">
            <span className="button-text">{text}</span>
            <span className="arrow">→</span>
        </button>
    );
}

export default LinkButton;
