import React, {ChangeEvent, FC, useState, useEffect} from 'react';
import axios from 'axios';
import styles from './WorkingInUkraine.module.scss';
import {ReactComponent as SearchIcon} from '../../assets/icons/search-icon.svg';
import {ReactComponent as UkraineMap} from '../../assets/images/ukraine-map.svg';
import {Fade} from 'react-awesome-reveal';
import LinkButton from '../../components/link-button/LinkButton';
import {BACKEND_URL} from '../../constants/constants';
import {Link} from "react-router-dom";

interface RegionSettlement {
    region: string;
    settlements: string[];
}

interface WorkingInUkraineProps {
    wannaWorkLink: string;
    wholesaleLink: string;
}

const WorkingInUkraine: FC<WorkingInUkraineProps> = ({wannaWorkLink, wholesaleLink}) => {
    const [searchTerm, setSearchTerm] = useState('');
    const [regions, setRegions] = useState<RegionSettlement[]>([]);
    const [filteredRegions, setFilteredRegions] = useState<RegionSettlement[]>([]);
    const [selectedRegion, setSelectedRegion] = useState<string | null>(null);
    const [wantToWorkButton, setWantToWorkButton] = useState({name: "", link: "", description: ""});
    const [deliverySuppliesButton, setDeliverySuppliesButton] = useState({name: "", link: "", description: ""});
    const [wantToWorkButtonLink, setWantToWorkButtonLink] = useState('');
    const [wantToWorkButtonName, setWantToWorkButtonName] = useState('');
    const [wantToWorkButtonDescription, setWantToWorkButtonDescription] = useState('');
    const [deliverySuppliesButtonLink, setDeliverySuppliesButtonLink] = useState('');
    const [deliverySuppliesButtonDescription, setDeliverySuppliesButtonDescription] = useState('');
    const [deliverySuppliesButtonName, setDeliverySuppliesButtonName] = useState('');


    useEffect(() => {
        const fetchRegionsAndSettlements = async () => {
            try {
                const response = await axios.get(`${BACKEND_URL}/get-regions-and-settlements`);
                setRegions(response.data);
                setFilteredRegions(response.data);
            } catch (error) {
                console.error('Error fetching regions and settlements:', error);
            }
        };

        const fetchButtons = async () => {
            try {
                const wantButtonResponse = await axios.get(`${BACKEND_URL}/get-want-to-work-button`);
                const deliveryButtonResponse = await axios.get(`${BACKEND_URL}/get-delivery-supplies-button`);

                console.log("Fetched wantToWorkButton data: ", wantButtonResponse.data);

                setWantToWorkButtonLink(wantButtonResponse.data.link);
                setWantToWorkButtonName(wantButtonResponse.data.name);
                setWantToWorkButtonDescription(wantButtonResponse.data.description);

                setDeliverySuppliesButtonName(deliveryButtonResponse.data.name);
                setDeliverySuppliesButtonLink(deliveryButtonResponse.data.link);
                setDeliverySuppliesButtonDescription(deliveryButtonResponse.data.description);

                setWantToWorkButton(wantButtonResponse.data[0] || {name: "", link: "", description: ""});
                setDeliverySuppliesButton(deliveryButtonResponse.data[0] || {name: "", link: "", description: ""});
            } catch (error) {
                console.error('Error fetching buttons:', error);
            }
        };


        fetchButtons();
        fetchRegionsAndSettlements();
    }, []);

    // Handle input change and filter regions based on search term
    const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
        const value = event.target.value;
        setSearchTerm(value);
        setFilteredRegions(
            regions.filter((region) =>
                region.region.toLowerCase().includes(value.toLowerCase())
            )
        );
    };

    // Handle region selection and display the corresponding settlements
    const handleRegionSelect = (region: string) => {
        setSelectedRegion(region);
    };

    // Find the settlements for the selected region
    const filteredSettlements =
        selectedRegion
            ? regions.find((r) => r.region === selectedRegion)?.settlements || []
            : [];

    return (
        <div className={styles.ukraineMapContainerWrapper}>
            <h1>ПРАЦЮЄМО ПО УКРАЇНІ</h1>
            <div className={styles.ukraineMapContainer}>
                <div className={styles.sidebar}>
                    <div className={styles.regionSearchWrapper}>
                        <div className={styles.regionSearchBar}>
                            <div className={styles.searchbar}>
                                <input
                                    type="text"
                                    placeholder="Пошук міста"
                                    value={searchTerm}
                                    onChange={handleInputChange}
                                />
                                <button>
                                    <SearchIcon/>
                                </button>
                            </div>
                            {searchTerm && (
                                <Fade>
                                    <div className={styles.regionsAutoComplete}>
                                        {filteredRegions.map((region, index) => (
                                            <p key={index} onClick={() => handleRegionSelect(region.region)}>
                                                {region.region}
                                            </p>
                                        ))}
                                    </div>
                                </Fade>
                            )}
                        </div>
                        <section className={styles.listOfRegions}>
                            <div className={styles.listOfRegionsHeader}>
                                <h4>Список населених пунктів</h4>
                            </div>
                            <div className={styles.listOfRegionsContent}>
                                {selectedRegion ? (
                                    filteredSettlements.map((settlement, index) => (
                                        <p key={index}>{settlement}</p>
                                    ))
                                ) : (
                                    <p>Виберіть регіон</p>
                                )}
                            </div>
                        </section>
                    </div>
                    {wantToWorkButtonLink && (
                        <section>
                            <LinkButton link={wantToWorkButtonLink}>{wantToWorkButtonName}</LinkButton>
                            <p>{wantToWorkButtonDescription}</p>
                        </section>
                    )}
                </div>
                <UkraineMap className={styles.ukraineMap}/>
                <div className={styles.sidebar}>
                    <h5>* Щоб обрати окреме місто/село області натисність на будь-яку з наведеної карти</h5>
                    <section>
                        {deliverySuppliesButtonLink && (
                            <>
                                <LinkButton
                                    link={deliverySuppliesButtonLink}>{deliverySuppliesButtonName}</LinkButton>
                                <p>{deliverySuppliesButtonDescription}</p>
                            </>
                        )}
                    </section>
                </div>
            </div>
            <div className={styles.regionContentContainerMobile}>
                <div className={styles.regionSearchWrapper}>
                    <div className={styles.regionSearchBar}>
                        <div className={styles.searchbar}>
                            <input
                                type="text"
                                placeholder="Пошук міста"
                                value={searchTerm}
                                onChange={handleInputChange}
                            />
                            <button>
                                <SearchIcon/>
                            </button>
                        </div>
                        {searchTerm && (
                            <Fade>
                                <div className={styles.regionsAutoComplete}>
                                    {filteredRegions.map((region, index) => (
                                        <p key={index} onClick={() => handleRegionSelect(region.region)}>
                                            {region.region}
                                        </p>
                                    ))}
                                </div>
                            </Fade>
                        )}
                    </div>
                    <section className={styles.listOfRegions}>
                        <div className={styles.listOfRegionsHeader}>
                            <h4>Список населених пунктів</h4>
                        </div>
                        <div className={styles.listOfRegionsContent}>
                            {selectedRegion ? (
                                filteredSettlements.map((settlement, index) => (
                                    <p key={index}>{settlement}</p>
                                ))
                            ) : (
                                <p>Виберіть регіон</p>
                            )}
                        </div>
                    </section>
                </div>
                <div className={styles.chooseOptionsContent}>
                    {wantToWorkButtonLink && (
                        <section>
                            <Link className={styles.chooseOptionButtonLink} to={wantToWorkButtonLink}>{wantToWorkButtonName}</Link>
                            <p>{wantToWorkButtonDescription}</p>
                        </section>
                    )}
                    <section>
                        {deliverySuppliesButtonLink && (
                            <>
                                <Link className={styles.chooseOptionButtonLink}
                                    to={deliverySuppliesButtonLink}>{deliverySuppliesButtonName}</Link>
                                <p>{deliverySuppliesButtonDescription}</p>
                            </>
                        )}
                    </section>
                </div>
            </div>
        </div>
    );
};

export default WorkingInUkraine;
