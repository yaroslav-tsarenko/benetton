import React, {ChangeEvent, useState} from 'react';
import styles from "./WorkingInUkraine.module.scss";
import LinkButton from "../../components/link-button/LinkButton";
import {ReactComponent as SearchIcon} from "../../assets/icons/search-icon.svg";
import {ReactComponent as UkraineMap} from "../../assets/images/ukraine-map.svg";
import {regions} from "../../data/regions/regions";
import {settlements} from "../../data/settlements/settlements"; // Імпорт даних про населені пункти
import {Fade} from "react-awesome-reveal";

const WorkingInUkraine = () => {
    const [searchTerm, setSearchTerm] = useState("");
    const [filteredRegions, setFilteredRegions] = useState(regions);
    const [selectedRegion, setSelectedRegion] = useState<string | null>(null); // Доданий стан для вибраного регіону

    const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
        const value = event.target.value;
        setSearchTerm(value);
        setFilteredRegions(
            regions.filter(region =>
                region.toLowerCase().includes(value.toLowerCase())
            )
        );
    };

    const handleRegionSelect = (region: string) => {
        setSelectedRegion(region);
    };

    const filteredSettlements = selectedRegion
        ? settlements.find(s => s.region === selectedRegion)?.settlements || []
        : [];

    return (
        <div className={styles.ukraineMapContainerWrapper}>
            <h1>ПРАЦЮЄМО ПО УКРАЇНІ</h1>
            <div className={styles.ukraineMapContainer}>
                <div className={styles.sidebar}>
                    <div className={styles.regionSearchWrapper}>
                        <div className={styles.regionSearchBar}>
                            <section>
                                <input
                                    type="text"
                                    placeholder="Пошук міста"
                                    value={searchTerm}
                                    onChange={handleInputChange}
                                />
                                <button>
                                    <SearchIcon/>
                                </button>
                            </section>
                            {searchTerm && (
                                <Fade>
                                    <div className={styles.regionsAutoComplete}>
                                        {filteredRegions.map((region, index) => (
                                            <p key={index} onClick={() => handleRegionSelect(region)}>
                                                {region}
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
                    <section>
                        <LinkButton link="/">
                            Хочу працювати
                        </LinkButton>
                        <p>Контакт, якщо цікавить робота у будь-якому з міст</p>
                    </section>
                </div>
                <UkraineMap className={styles.ukraineMap}/>
                <div className={styles.sidebar}>
                    <h5>* Щоб обрати окреме місто/село області натисність на будь-яку з наведеної карти</h5>
                    <section>
                        <LinkButton link="/">
                            Відправки / ОПТ
                        </LinkButton>
                        <p>Контакт, якщо цікавить пересилка або ОПТ</p>
                    </section>
                </div>
            </div>
        </div>

    );
};

export default WorkingInUkraine;
