import React, {useState, useEffect} from 'react';
import styles from "./AdminPanel.module.scss";
import LinkSection from "../../components/link-section/LinkSection";
import TurnCaptcha from "../../components/turn-on-captcha/TurnCaptcha";
import axios from "axios";
import {BACKEND_URL} from "../../constants/constants";
import RotatingLinesLoader from "../../components/rotating-lines-loader/RotatingLinesLoader";
import ContainerWrapper from "../../components/container-wrapper/ContainerWrapper";

interface Button {
    name: string;
    link: string;
}

const AdminPanel: React.FC = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [headerButtons, setHeaderButtons] = useState<Button[]>([{ link: "", name: "" }]);
    const [buttons, setButtons] = useState([{name: "", link: ""}]);
    const [chatButtons, setChatButtons] = useState([{name: "", link: ""}]);
    const [botButtons, setBotButtons] = useState([{name: "", link: ""}]);
    const [regions, setRegions] = useState<
        { region: string; settlements: string[]; newSettlement: string }[]
    >([]);
    const [bonusButton, setBonusButton] = useState({title: "", description: "", link: "", attentionText: ""});
    const [forumButtons, setForumButtons] = useState([{name: "", link: ""}]);
    const [workOfferButton, setWorkOfferButton] = useState({name: "", description: "", link: ""});
    const [contactManagerButton, setContactManagerButton] = useState({title: "", description: "", name: "", link: ""})
    const [wantToWorkButton, setWantToWorkButton] = useState({name: "", link: "", description: ""});
    const [deliverySuppliesButton, setDeliverySuppliesButton] = useState({name: "", link: "", description: ""});
    const [newRegion, setNewRegion] = useState<string>("");
    const [newSettlements, setNewSettlements] = useState<string[]>([]);
    const [settings, setSettings] = useState({
        captcha: false,
        writeUsLink: "",
        workWithUsLink: "",
        whereToBuyLink: "",
        whereWorkLink: "",
        reviewsLink: "",
        rulesLink: "",
        autoSale1Link: "",
        autoSale2Link: "",
        autoSale3Link: "",
        telegramChatLink: "",
        telegramBot1Link: "",
        telegramBot2Link: "",
        wannaWorkLink: "",
        wholesaleLink: "",
        LABRCLink: "",
        PSYLABLink: "",
        RCCLUBLink: "",
        LEGALIZERLink: "",
        BIGBROLink: "",
        BMWRCLink: "",
        AMORALLELink: "",
        partnerShipLink: "",
        managerLink: "",
        bonusLink: ""
    });

    useEffect(() => {
        const fetchSettings = async () => {
            try {
                const response = await axios.get(`${BACKEND_URL}/get-settings`);
                setSettings(response.data);
            } catch (error) {
                console.error("There was an error fetching the settings!", error);
            }
        };


        const fetchButtons = async () => {
            try {
                const wantButtonResponse = await axios.get(`${BACKEND_URL}/get-want-to-work-button`);
                const deliveryButtonResponse = await axios.get(`${BACKEND_URL}/get-delivery-supplies-button`);

                if (wantButtonResponse.data) {
                    setWantToWorkButton(wantButtonResponse.data[0] || {name: "", link: "", description: ""});
                }
                if (deliveryButtonResponse.data) {
                    setDeliverySuppliesButton(deliveryButtonResponse.data[0] || {name: "", link: "", description: ""});
                }
            } catch (error) {
                console.error('Error fetching buttons:', error);
            }
        };


        const fetchLinkButtons = async () => {
            try {
                const response = await axios.get(`${BACKEND_URL}/get-link-buttons`);
                setButtons(response.data);
            } catch (error) {
                console.error("There was an error fetching the link buttons!", error);
            }
        };

        const fetchHeaderButtons = async () => {
            try {
                const response = await axios.get(`${BACKEND_URL}/get-header-buttons`);
                setHeaderButtons(response.data || [{ link: "", title: "" }]);
            } catch (error) {
                console.error("Error fetching header buttons:", error);
            }
        };

        const fetchChatButtons = async () => {
            try {
                const response = await axios.get(`${BACKEND_URL}/get-telegram-chat-buttons`);
                setChatButtons(response.data);
            } catch (error) {
                console.error("There was an error fetching the chat buttons!", error);
            }
        };

        const fetchBotButtons = async () => {
            try {
                const response = await axios.get(`${BACKEND_URL}/get-telegram-bot-buttons`);
                setBotButtons(response.data);
            } catch (error) {
                console.error("There was an error fetching the bot buttons!", error);
            }
        };

        const fetchRegionsSettlements = async () => {
            try {
                const response = await axios.get(`${BACKEND_URL}/get-regions-and-settlements`);
                setRegions(response.data);
            } catch (error) {
                console.error("There was an error fetching the regions and settlements!", error);
            }
        };

        const fetchForumButtons = async () => {
            try {
                const response = await axios.get(`${BACKEND_URL}/get-forum-buttons`);
                setForumButtons(response.data || [{name: "", link: ""}]);
            } catch (error) {
                console.error('Error fetching forum buttons:', error);
            }
        };
        const fetchWorkOfferButton = async () => {
            try {
                const response = await axios.get(`${BACKEND_URL}/get-work-offer-button`);
                setWorkOfferButton(response.data || {name: "", description: "", link: ""});
            } catch (error) {
                console.error('Error fetching work offer button:', error);
            }
        };

        const fetchContactManagerButton = async () => {
            try {
                const response = await axios.get(`${BACKEND_URL}/get-contact-manager-button`);
                setContactManagerButton(response.data || {title: "", description: "", name: "", link: ""});
            } catch (error) {
                console.error('Error fetching contact manager button:', error);
            }
        };

        const fetchBonusButton = async () => {
            try {
                const response = await axios.get(`${BACKEND_URL}/get-bonus-button`);
                setBonusButton(response.data || {title: "", description: "", link: "", attentionText: ""});
            } catch (error) {
                console.error('Error fetching bonus button:', error);
            }
        };

        fetchHeaderButtons();
        fetchBonusButton();
        fetchWorkOfferButton();
        fetchContactManagerButton();
        fetchForumButtons();
        fetchButtons();
        fetchSettings();
        fetchLinkButtons();
        fetchChatButtons();
        fetchBotButtons();
        fetchRegionsSettlements();
    }, []);

    const addNewHeaderButton = () => {
        if (headerButtons.length < 9) {
            setHeaderButtons([...headerButtons, { link: "", name: "" }]);
        } else {
            alert("You can add a maximum of 6 buttons");
        }
    };

    const handleHeaderButtonChange = (index: number, e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setHeaderButtons((prevButtons) => {
            const newButtons = [...prevButtons];
            newButtons[index] = { ...newButtons[index], [name]: value };
            return newButtons;
        });
    };


    const removeHeaderButton = (index: number) => {
        setHeaderButtons(headerButtons.filter((_, i) => i !== index));
    };


    const addNewForumButton = (
        setFunction: React.Dispatch<React.SetStateAction<Button[]>>,
        buttons: Button[]
    ): void => {
        if (buttons.length < 30) {
            setFunction([...buttons, {name: "", link: ""}]);
        } else {
            alert("You can add a maximum of 30 buttons");
        }
    };

    const handleNewForumButtonChange = (
        index: number,
        e: React.ChangeEvent<HTMLInputElement>,
        setFunction: React.Dispatch<React.SetStateAction<Button[]>>
    ): void => {
        const {name, value} = e.target;
        setFunction((prevButtons) => {
            const newButtons = [...prevButtons];
            newButtons[index] = {...newButtons[index], [name]: value};
            return newButtons;
        });
    };

    const removeForumButton = (
        index: number,
        setFunction: React.Dispatch<React.SetStateAction<Button[]>>,
        buttons: Button[]
    ): void => {
        setFunction(buttons.filter((_, i) => i !== index));
    };


    const handleAddSettlement = (regionIndex: number) => {
        const newSettlement = regions[regionIndex].newSettlement.trim();
        if (newSettlement) {
            setRegions((prevRegions) => {
                const updatedRegions = [...prevRegions];
                const settlements = updatedRegions[regionIndex].settlements;
                if (!settlements.includes(newSettlement)) {
                    settlements.push(newSettlement);
                } else {
                }
                updatedRegions[regionIndex].newSettlement = "";
                return updatedRegions;
            });
        }
    };

    const handleRemoveSettlement = (regionIndex: number, settlementIndex: number) => {
        setRegions(prevRegions => {
            const updatedRegions = [...prevRegions];
            const updatedSettlements = [...updatedRegions[regionIndex].settlements];
            updatedSettlements.splice(settlementIndex, 1);
            updatedRegions[regionIndex].settlements = updatedSettlements;
            return updatedRegions;
        });
    };
    const handleAddRegion = () => {
        const regionName = newRegion.trim();
        if (regionName) {
            if (!regions.some((region) => region.region === regionName)) {
                setRegions((prevRegions) => [
                    ...prevRegions,
                    {region: regionName, settlements: [], newSettlement: ""},
                ]);
                setNewRegion("");
            } else {
                alert("Цей регіон вже існує.");
            }
        }
    };

    const handleRemoveRegion = (regionIndex: number) => {
        setRegions(prevRegions => prevRegions.filter((_, i) => i !== regionIndex));
        setNewSettlements(prevNewSettlements => prevNewSettlements.filter((_, i) => i !== regionIndex));
    };

    const handleInputChange = (name: string, value: string) => {
        setSettings(prevSettings => ({...prevSettings, [name]: value}));
    };

    const handleSave = async () => {
        setIsLoading(true);

        try {
            const response = await axios.post(`${BACKEND_URL}/apply-settings`, {
                settings,
                buttons,
                chatButtons,
                botButtons,
                wantToWorkButton,
                deliverySuppliesButton,
                bonusButton,
                forumButtons,
                workOfferButton,
                contactManagerButton,
                headerButtons,
                regions
            });
            if (response.status === 200) {
                console.log("Settings updated successfully!");
                alert("Changes saved");
            }
        } catch (error) {
            console.error("There was an error updating the settings!", error);
            alert("Failed to save changes");
        } finally {
            setIsLoading(false);
        }
    };

    const addNewButton = (setFunction: React.Dispatch<React.SetStateAction<{
        name: string;
        link: string;
    }[]>>, buttons: { name: string; link: string; }[]) => {
        if (buttons.length < 5) {
            setFunction([...buttons, {name: "", link: ""}]);
        } else {
            alert("You can add a maximum of 5 buttons");
        }
    };

    const handleNewButtonChange = (index: number, e: React.ChangeEvent<HTMLInputElement>, setFunction: React.Dispatch<React.SetStateAction<{
        name: string;
        link: string;
    }[]>>) => {
        const {name, value} = e.target;
        setFunction(prevButtons => {
            const newButtons = [...prevButtons];
            newButtons[index] = {...newButtons[index], [name]: value};
            return newButtons;
        });
    };

    const removeButton = (index: number, setFunction: React.Dispatch<React.SetStateAction<{
        name: string;
        link: string;
    }[]>>, buttons: { name: string; link: string; }[]) => {
        setFunction(buttons.filter((_, i) => i !== index));
    };

    return (
        <div className={styles.adminPanelWrapper}>
            <h1>АДМІН ПАНЕЛЬ</h1>
            <div className={styles.adminPanelContentWrapper}>

                <ContainerWrapper title="САЙТИ АВТОПРОДАЖ">
                    <button onClick={() => addNewButton(setButtons, buttons)} disabled={buttons.length >= 5}>Додати
                        кнопку автопродаж
                    </button>
                    {buttons.map((button, index) => (
                        <div className={styles.addButtonSection} key={index}>
                            <input
                                type="text"
                                name="name"
                                placeholder="назва кнопки"
                                value={button.name}
                                onChange={(e) => handleNewButtonChange(index, e, setButtons)}
                            />
                            <input
                                type="text"
                                name="link"
                                placeholder="посилання кнопки"
                                value={button.link}
                                onChange={(e) => handleNewButtonChange(index, e, setButtons)}
                            />
                            <button onClick={() => removeButton(index, setButtons, buttons)}>Видалити кнопку</button>
                        </div>
                    ))}
                </ContainerWrapper>
                <ContainerWrapper title="ТЕЛЕГРАМ ЧАТ">
                    <button onClick={() => addNewButton(setChatButtons, chatButtons)}
                            disabled={chatButtons.length >= 5}>Додати кнопку чату
                    </button>
                    {chatButtons.map((button, index) => (
                        <div className={styles.addButtonSection} key={index}>
                            <input
                                type="text"
                                name="name"
                                placeholder="назва кнопки"
                                value={button.name}
                                onChange={(e) => handleNewButtonChange(index, e, setChatButtons)}
                            />
                            <input
                                type="text"
                                name="link"
                                placeholder="посилання кнопки"
                                value={button.link}
                                onChange={(e) => handleNewButtonChange(index, e, setChatButtons)}
                            />
                            <button onClick={() => removeButton(index, setChatButtons, chatButtons)}>Видалити кнопку
                            </button>
                        </div>
                    ))}
                </ContainerWrapper>
                <ContainerWrapper title="Кнопка Бонус">
                    <div className={styles.addButtonSection}>
                        <input
                            type="text"
                            placeholder="Title"
                            value={bonusButton.title}
                            onChange={(e) => setBonusButton({...bonusButton, title: e.target.value})}
                        />
                        <input
                            type="text"
                            placeholder="Description"
                            value={bonusButton.description}
                            onChange={(e) => setBonusButton({...bonusButton, description: e.target.value})}
                        />
                        <input
                            type="text"
                            placeholder="Link"
                            value={bonusButton.link}
                            onChange={(e) => setBonusButton({...bonusButton, link: e.target.value})}
                        />
                        <input
                            type="text"
                            placeholder="Attention Text"
                            value={bonusButton.attentionText}
                            onChange={(e) => setBonusButton({...bonusButton, attentionText: e.target.value})}
                        />
                    </div>

                </ContainerWrapper>
                <ContainerWrapper title="Домовитись про співпрацю">
                    <div className={styles.addButtonSection}>
                        <input
                            type="text"
                            placeholder="Button Name"
                            value={workOfferButton.name}
                            onChange={(e) => setWorkOfferButton({...workOfferButton, name: e.target.value})}
                        />
                        <input
                            type="text"
                            placeholder="Description"
                            value={workOfferButton.description}
                            onChange={(e) => setWorkOfferButton({...workOfferButton, description: e.target.value})}
                        />
                        <input
                            type="text"
                            placeholder="Link"
                            value={workOfferButton.link}
                            onChange={(e) => setWorkOfferButton({...workOfferButton, link: e.target.value})}
                        />
                    </div>

                </ContainerWrapper>
                <ContainerWrapper title="Контакт з менеджером">
                    <div className={styles.addButtonSection}>
                        <input
                            type="text"
                            placeholder="Title"
                            value={contactManagerButton.title}
                            onChange={(e) => setContactManagerButton({...contactManagerButton, title: e.target.value})}
                        />
                        <input
                            type="text"
                            placeholder="Description"
                            value={contactManagerButton.description}
                            onChange={(e) => setContactManagerButton({
                                ...contactManagerButton,
                                description: e.target.value
                            })}
                        />
                        <input
                            type="text"
                            placeholder="Name"
                            value={contactManagerButton.name}
                            onChange={(e) => setContactManagerButton({...contactManagerButton, name: e.target.value})}
                        />
                        <input
                            type="text"
                            placeholder="Link"
                            value={contactManagerButton.link}
                            onChange={(e) => setContactManagerButton({...contactManagerButton, link: e.target.value})}
                        />
                    </div>

                </ContainerWrapper>
                <ContainerWrapper title="Форум Кнопки">
                    <div className={styles.addButtonSection}>
                        <button onClick={() => addNewForumButton(setForumButtons, forumButtons)}
                                disabled={forumButtons.length >= 30}>
                            Додати Кнопку
                        </button>
                        {forumButtons.map((button, index) => (
                            <div className={styles.addButtonSection} key={index}>
                                <input
                                    type="text"
                                    name="name"
                                    placeholder="Назва кнопки"
                                    value={button.name}
                                    onChange={(e) => handleNewForumButtonChange(index, e, setForumButtons)}
                                />
                                <input
                                    type="text"
                                    name="link"
                                    placeholder="Посилання кнопки"
                                    value={button.link}
                                    onChange={(e) => handleNewForumButtonChange(index, e, setForumButtons)}
                                />
                                <button onClick={() => removeForumButton(index, setForumButtons, forumButtons)}>Видалити
                                    кнопку
                                </button>
                            </div>
                        ))}
                    </div>

                </ContainerWrapper>
                <ContainerWrapper title="ТЕЛЕГРАМ БОТИ">

                    <button onClick={() => addNewButton(setBotButtons, botButtons)}
                            disabled={botButtons.length >= 5}>Додати кнопку бота
                    </button>
                    {botButtons.map((button, index) => (
                        <div className={styles.addButtonSection} key={index}>
                            <input
                                type="text"
                                name="name"
                                placeholder="назва кнопки"
                                value={button.name}
                                onChange={(e) => handleNewButtonChange(index, e, setBotButtons)}
                            />
                            <input
                                type="text"
                                name="link"
                                placeholder="посилання кнопки"
                                value={button.link}
                                onChange={(e) => handleNewButtonChange(index, e, setBotButtons)}
                            />
                            <button onClick={() => removeButton(index, setBotButtons, botButtons)}>Видалити кнопку
                            </button>
                        </div>
                    ))}
                </ContainerWrapper>
                <ContainerWrapper title="Регіони та Населені пункти">
                    {regions.map((region, regionIndex) => (
                        <div className={styles.addButtonSection} key={regionIndex}>
                            <h2>{region.region}</h2>
                            <button onClick={() => handleRemoveRegion(regionIndex)}>Видалити Регіон</button>
                            <ul>
                                {region.settlements.map((settlement, settlementIndex) => (
                                    <li key={settlementIndex} className={styles.settlementItem}>
                                        <span>{settlement}</span>
                                        <div
                                            className={styles.removeButton}
                                            onClick={() => handleRemoveSettlement(regionIndex, settlementIndex)}
                                        >
                                            ✕
                                        </div>
                                    </li>
                                ))}
                            </ul>
                            <input
                                type="text"
                                value={regions[regionIndex].newSettlement}
                                onChange={(e) => {
                                    const value = e.target.value;
                                    setRegions((prevRegions) => {
                                        const updatedRegions = [...prevRegions];
                                        updatedRegions[regionIndex].newSettlement = value;
                                        return updatedRegions;
                                    });
                                }}
                                placeholder="Додати новий населений пункт"
                            />


                            <button
                                onClick={() => {
                                    if (regions[regionIndex].newSettlement.trim()) {
                                        handleAddSettlement(regionIndex);
                                    }
                                }}
                            >
                                Додати населений пункт
                            </button>

                        </div>
                    ))}
                    <div className={styles.addButtonSection}>
                        <input
                            type="text"
                            value={newRegion}
                            onChange={(e) => setNewRegion(e.target.value)}
                            placeholder="Додати новий регіон"
                        />
                        <button onClick={handleAddRegion}>Додати регіон</button>
                    </div>

                </ContainerWrapper>
                <ContainerWrapper title="Хочу Працювати Кнопка">
                    <div className={styles.addButtonSection}>
                        <input
                            type="text"
                            placeholder="Назва кнопки"
                            value={wantToWorkButton.name}
                            onChange={(e) => setWantToWorkButton({...wantToWorkButton, name: e.target.value})}
                        />
                        <input
                            type="text"
                            placeholder="Посилання"
                            value={wantToWorkButton.link}
                            onChange={(e) => setWantToWorkButton({...wantToWorkButton, link: e.target.value})}
                        />
                        <input
                            type="text"
                            placeholder="Опис"
                            value={wantToWorkButton.description}
                            onChange={(e) => setWantToWorkButton({...wantToWorkButton, description: e.target.value})}
                        />
                    </div>
                </ContainerWrapper>
                <ContainerWrapper title="Відправки / ОПТ Кнопка">
                    <div className={styles.addButtonSection}>
                        <input
                            type="text"
                            placeholder="Назва кнопки"
                            value={deliverySuppliesButton.name}
                            onChange={(e) => setDeliverySuppliesButton({
                                ...deliverySuppliesButton,
                                name: e.target.value
                            })}
                        />
                        <input
                            type="text"
                            placeholder="Посилання"
                            value={deliverySuppliesButton.link}
                            onChange={(e) => setDeliverySuppliesButton({
                                ...deliverySuppliesButton,
                                link: e.target.value
                            })}
                        />
                        <input
                            type="text"
                            placeholder="Опис"
                            value={deliverySuppliesButton.description}
                            onChange={(e) => setDeliverySuppliesButton({
                                ...deliverySuppliesButton,
                                description: e.target.value
                            })}
                        />
                    </div>
                </ContainerWrapper>
                <ContainerWrapper title="Хедер кнопки">
                    <button onClick={addNewHeaderButton} disabled={headerButtons.length >= 9}>
                        Add Button
                    </button>
                    {headerButtons.map((button, index) => (
                        <div className={styles.addButtonSection} key={index}>
                            <input
                                type="text"
                                name="name"
                                placeholder="Назва"
                                value={button.name}
                                onChange={(e) => handleHeaderButtonChange(index, e)}
                            />
                            <input
                                type="text"
                                name="link"
                                placeholder="Посилання"
                                value={button.link}
                                onChange={(e) => handleHeaderButtonChange(index, e)}
                            />
                            <button onClick={() => removeHeaderButton(index)}>Remove Button</button>
                        </div>
                    ))}
                </ContainerWrapper>
                <ContainerWrapper title="Капча">
                    <TurnCaptcha
                        onChange={status => setSettings(prevSettings => ({...prevSettings, captcha: status}))}/>
                </ContainerWrapper>

            </div>
            <button className={styles.saveButton} onClick={handleSave}>
                {isLoading ?
                    <>
                        <RotatingLinesLoader title="Обробка..."/>
                    </> :
                    "Зберегти"
                }
            </button>
        </div>
    );
};

export default AdminPanel;