import React from "react";
import styles from "../styles/Volcano.module.css";
import BarChart from "../Components/Barchart";
import { Map, Marker } from "pigeon-maps";
import { useParams } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";

const Volcano = () => {
    useEffect(() => {
        SendQuery();
    }, []);

    let params = useParams();
    const [volcano, setVolcano] = useState();
    const [center, setCenter] = useState([50.879, 4.6997]);
    const [zoom, setZoom] = useState(5);



    //this is very ugly need to find a prettier way to do this
    const options = sessionStorage.getItem("jwt") != null ? {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${sessionStorage.getItem("jwt")}`,
        },
    }
        :

        {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
        }


    const SendQuery = () => {
        fetch(`http://sefdb02.qut.edu.au:3001/volcano/${params.volcanoID}`, options)
            .then((response) => response.json())
            .then((json) => {
                console.log(json);
                setVolcano(json);
                setCenter([json.latitude, json.longitude]);
            });
    };

    return (
        // I am not happy with this, I need to speak to the tutor about how to place the pidgeon map in a flexbox without it disapearing
        // this fits the requirements fine but it's ugly so I will need to talk to the tutor about how to do this
        <div className={styles.wrapper}>
            <div className={styles.container}>
                <div className={styles.map}>
                    <Map
                        mouseEvents={false}
                        touchEvents={false}
                        height={500}
                        center={center}
                        zoom={zoom}
                        onBoundsChanged={({ center, zoom }) => {
                            setCenter(center);
                            setZoom(zoom);
                        }}
                    >
                        {/* this is a hack that relies on the map not moving as the pin simply defaults to the center of the screen,  */}
                        {/* I could not figure out how to pass state into the marker so I just did this :P */}
                        <Marker width={50} anchor={center} />
                    </Map>
                </div>
            </div>
            <h1>{volcano?.name}</h1>
            <div className={styles.info}>
                <div>
                    <p>Country: {volcano?.country}</p>
                    <p>Region: {volcano?.region}</p>
                    <p>SubRegion: {volcano?.subregion}</p>
                    <p>Last Eruption: {volcano?.last_eruption}</p>
                    <p>Summit: {volcano?.summit}</p>
                    <p>Elavation: {volcano?.elevation}</p>
                    <p>Latitude: {volcano?.latitude}</p>
                    <p>Longitude: {volcano?.longitude}</p>

                </div>
                <div className={styles.chart}>

                    <BarChart data={volcano} />
                    <p>Population within 5km: {volcano?.population_5km}</p>
                    <p>Population within 10km: {volcano?.population_10km}</p>
                    <p>Population within 30km: {volcano?.population_30km}</p>
                    <p>Population within 100km: {volcano?.population_100km}</p>
                </div>

            </div>
        </div>
    );
};

export default Volcano;
