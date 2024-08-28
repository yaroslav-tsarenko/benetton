import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from "./Login.module.scss";
import RotatingLinesLoader from "../../components/rotating-lines-loader/RotatingLinesLoader";

interface LoginProps {
    setIsAuthenticated: (value: boolean) => void;
}

const Login: React.FC<LoginProps> = ({ setIsAuthenticated }) => {
    const [login, setLogin] = useState('');
    const [password, setPassword] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const navigate = useNavigate();

    const handleLogin = () => {
        setIsLoading(true);
        setTimeout(() => {
            const predefinedLogin = 'admin';
            const predefinedPassword = 'password123';

            if (login === predefinedLogin && password === predefinedPassword) {
                setIsAuthenticated(true);
                navigate('/admin-panel');
            } else {
                alert('Invalid login or password');
            }
            setIsLoading(false);
        }, 1500);
    };

    return (
        <div className={styles.loginWrapper}>
            <h1>ВІЙТИ В АККАУНТ</h1>
            <div className={styles.loginSection}>
                <input
                    type="text"
                    placeholder="Логін"
                    value={login}
                    onChange={(e) => setLogin(e.target.value)}
                />
                <input
                    type="password"
                    placeholder="Пароль"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <button onClick={handleLogin}>
                    {isLoading ?
                        <>
                            <RotatingLinesLoader title="Обробка..." />
                        </> :
                        "Війти"
                    }
                </button>
            </div>
        </div>
    );
};

export default Login;
