import React, { useEffect, useState } from 'react';
import "../../App.css";
import axios from 'axios';
import NumberFormat from 'react-number-format';

const IndoCard = () => {
    const [confirmed, setConfirmed] = useState([]);
    const [recovered, setRecovered] = useState([]);
    const [deaths, setDeaths] = useState([]);

    useEffect(() => {
        axios
            .get("https://indonesia-covid-19.mathdro.id/api")
            .then((response) => {
                console.log(response)
                setConfirmed(response.data.confirmed)
                setRecovered(response.data.recovered)
                setDeaths(response.data.deaths)
            })
    }, [])

    return(
        <div className="container">
            <table>
                <tr>
                    <th> 
                        <h1 className="yellow-card">
                            <p>Confirmed</p>
                            <NumberFormat value={confirmed} thousandSeparator={true} displayType={'text'}/> 
                        </h1> 
                    </th>
                    <th> 
                        <h1 className="green-card">
                            <p>Recovered</p>
                            <NumberFormat value={recovered} thousandSeparator={true} displayType={'text'}/> 
                        </h1> 
                    </th>
                    <th>
                        <h1 className="red-card">
                            <p>Deaths</p>
                            <NumberFormat value={deaths} thousandSeparator={true} displayType={'text'}/>
                        </h1> 
                    </th> 
                </tr>
            </table>
        </div>
    )
}

export default IndoCard;