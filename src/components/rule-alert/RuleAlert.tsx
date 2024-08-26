import React, {FC} from 'react';
import styles from "./RuleAlert.module.scss"
import {ReactComponent as ExclamationIcon} from "../../assets/icons/exlamation.svg";

interface RuleAlertProps {
    description: string;
}

const RuleAlert: FC<RuleAlertProps> = ({description}) => {
    return (
        <div className={styles.ruleAlert}>
            <ExclamationIcon className={styles.icon}/>
            <p>{description}</p>
        </div>
    );
};

export default RuleAlert;