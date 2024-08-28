import React, {FC} from 'react';
import {RotatingLines} from "react-loader-spinner";
import styles from "./RotatingLinesLoader.module.scss";

interface RotatingLinesLoaderProps {
    title: string;
}

const RotatingLinesLoader: FC<RotatingLinesLoaderProps> = ({title}) => {
    return (
        <div className={styles.rotatingLinesLoader}>
            <RotatingLines
                visible={true}
                width="20"
                strokeColor={"#fff"}
                strokeWidth="5"
                animationDuration="0.75"
                ariaLabel="rotating-lines-loading"
            />
            <p>{title}</p>
        </div>
    );
};

export default RotatingLinesLoader;