import React, {FC} from 'react';
import styles from "./ContainerWrapper.module.scss";


interface ContainerWrapperProps {
    title?: string;
    subTitle?: string;
    children: React.ReactNode;
}

const ContainerWrapper: FC<ContainerWrapperProps> = ({title, subTitle, children}) => {
    return (
        <div className={styles.containerWrapperOuter}>
            <div className={styles.containerWrapper}>
                <h2>{title}</h2>
                {children}
            </div>
            {subTitle && <p className={styles.bottomSubTitle}>{subTitle}</p>}
        </div>

    );
};

export default ContainerWrapper;