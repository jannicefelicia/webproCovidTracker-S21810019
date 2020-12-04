import React, { useEffect, useState } from 'react';
import "../../App.css";
import axios from 'axios';
import NumberFormat from 'react-number-format';

const ProvCard = () => {
    const [province, setProvince] = useState([]);

    useEffect(() => {
        axios
            .get("https://indonesia-covid-19.mathdro.id/api/provinsi")
            .then((response) => setProvince(response.data.data))
    }, [])

    return(
        <div className="container">
            <table border="1">
                <tr>
                    <th>Province</th>
                    <th>Confirmed</th>
                    <th>Recovered</th>
                    <th>Deaths</th> 
                </tr>
                {province?.map((item) => {
                    return(
                        <tr>
                            <th>{item.provinsi}</th>
                            <td><NumberFormat value={item.kasusPosi} thousandSeparator={true} displayType={'text'}/></td>
                            <td><NumberFormat value={item.kasusSemb} thousandSeparator={true} displayType={'text'}/></td>
                            <td><NumberFormat value={item.kasusMeni} thousandSeparator={true} displayType={'text'}/></td>
                        </tr>
                        )
                    })}
            </table>
        </div>
    )
}

export default ProvCard;