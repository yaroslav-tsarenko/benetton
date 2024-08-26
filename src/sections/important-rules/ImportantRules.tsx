import React from 'react';
import styles from "./ImportantRules.module.scss"
import RuleAlert from "../../components/rule-alert/RuleAlert";

const ImportantRules = () => {
    return (
        <div className={styles.importantRulesWrapper}>
            <h1>ВАЖЛИВІ ПРАВИЛА:</h1>
            <div className={styles.importantRulesContent}>

                <div className={styles.importantRulesText}>
                    <h2>Обов’язки клієнтів полягають у простих речах:</h2>

                    <RuleAlert
                        description="Більше 5 повідомлень не відправляти, не флудити, не відправляти: «ау, ей, ??, ти тут, дай відповідь, ауууу», за ФЛУД банимо!"/>
                    <RuleAlert
                        description="Оператор відповідає з кінця списку, що менше ви відправите повідомлень, то швидше отримаєте відповідь!"/>
                    <RuleAlert
                        description="Оператору писати тільки з облікового запису з якого здійснювалася покупка. За мульти-акаунти миттєвий БАН!"/>
                    <RuleAlert description="Будьте адекватними і говоріть чітко і по суті"/>
                    <RuleAlert description="За жебрацтво: «дай промокод, дай клад, дай дай дай…» миттєвий бан!"/>
                    <RuleAlert description="За будь-які спроби обману, бан!"/>
                </div>
            </div>
        </div>
    );
};

export default ImportantRules;