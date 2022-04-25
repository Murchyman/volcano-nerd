import DataTable from "../Components/DataTable";
import TextField from "@mui/material/TextField";
import { Button } from '@mui/material';
import Autocomplete from "@mui/material/Autocomplete";
import countries from "../data/countries.json";
import { useState } from "react";
import styles from "../styles/Search.module.css";
function Search() {
    const [data, setData] = useState([]);
    const [isloding, setIsloding] = useState(false);
    const [searchCountry, setSearchCountry] = useState("");
    const [searchPopulatedDistance, setSearchPopulatedDistance] = useState("");

    const GetData = () => {
        //if no input, jump out to avoid error
        if (searchCountry === "") {
            return;
        }
        setIsloding(true);
        //this is a bit hacky, rather than implement seperate fetch depending on whether or not user selects a populated distance
        //I just pass an empty string in populated distance and the endoint is smart enough to figure it out
        fetch(`http://sefdb02.qut.edu.au:3001/volcanoes?country=${searchCountry}&populatedWithin=${searchPopulatedDistance}`)
            .then((response) => response.json())
            .then((json) => {
                setData(json);
            })
            .then(() => {
                setIsloding(false);
            });
    };

    return (
        <div className={styles.wrapper}>
            <div className={styles.container}>
                <div className={styles.menu}>
                    <Autocomplete
                        disablePortal
                        id="combo-box-demo"
                        options={countries}

                        onInputChange={(event, newInputValue) => {
                            setSearchCountry(newInputValue);
                        }}

                        sx={{ width: 200 }}
                        renderInput={(params) => <TextField {...params} label="Countries" />}
                    />{" "}
                    <Autocomplete
                        disablePortal
                        onInputChange={(event, newInputValue) => {
                            setSearchPopulatedDistance(newInputValue);
                        }}
                        id="combo-box-demo"
                        options={distances}
                        sx={{ width: 200 }}
                        renderInput={(params) => <TextField {...params} label="Populated Within" />}
                    />{" "}
                    <Button sx={{ width: 150 }} onClick={GetData} variant="contained">Search</Button>
                </div>

                <DataTable Data={data} Loading={isloding} />
            </div>
        </div>
    );
}

const distances = [
    { label: "5km" },
    { label: "10km" },
    { label: "30km" },
    { label: "100km" },]

export default Search;
