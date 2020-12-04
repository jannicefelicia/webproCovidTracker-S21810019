import React, { useEffect, useState } from 'react';
import "../../App.css";
import axios from 'axios';
import NumberFormat from 'react-number-format';

const IndoCard = () => {
    const [confirmed, setConfirmed] = useState("");
    const [recovered, setRecovered] = useState("");
    const [deaths, setDeaths] = useState("");

    useEffect(() => {
        axios
            .get("https://indonesia-covid-19.mathdro.id/api")
            .then((response) => {
                setConfirmed(response.data.perawatan)
                setRecovered(response.data.sembuh)
                setDeaths(response.data.meninggal)
            })
    }, [])

    return(
        <div className="container">
            <table>
                <tr>
                    <td> 
                        <h3 className="yellow-card">
                            <p>Confirmed</p>
                            <NumberFormat value={confirmed} thousandSeparator={true} displayType={'text'}/> 
                        </h3> 
                    </td>
                    <td> 
                        <h3 className="green-card">
                            <p>Recovered</p>
                            <NumberFormat value={recovered} thousandSeparator={true} displayType={'text'}/> 
                        </h3> 
                    </td>
                    <td>
                        <h3 className="red-card">
                            <p>Deaths</p>
                            <NumberFormat value={deaths} thousandSeparator={true} displayType={'text'}/>
                        </h3> 
                    </td> 
                </tr>
            </table>
        </div>
    )
}

export default IndoCard;