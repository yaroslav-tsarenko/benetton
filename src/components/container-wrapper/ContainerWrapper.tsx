import React, {FC} from 'react';
import styles from "./ContainerWrapper.module.scss";


interface ContainerWrapperProps {
    title?: string;
    children: React.ReactNode;
}

const ContainerWrapper: FC<ContainerWrapperProps> = ({title, children}) => {
    return (
        <div className={styles.containerWrapper}>
            <h2>{title}</h2>
            {children}
        </div>
    );
};

export default ContainerWrapper;