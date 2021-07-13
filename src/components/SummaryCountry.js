import React from "react";
import '../css/summary.css';


const SummaryCountry = ({country}) => {
    return (

        <tr>
            <td><img src={country.countryInfo.flag} alt="flag"></img> {country.country}</td>
            <td>{country.cases.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ")}<br/><span className="negative-extra">{" +" + country.todayCases}</span></td>
            <td>{country.casesPerOneMillion.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ")}</td>
            <td>{country.critical.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ")}</td>
            <td>{country.recovered.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ")}<br/><span className="positive-extra">{" +" + country.todayRecovered}</span></td>
            <td>{country.deaths.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ")}<br/><span className="negative-extra">{" +" + country.todayDeaths}</span></td>
            <td>{country.deathsPerOneMillion.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ")}</td>
            <td>{country.tests.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ")}</td>
        </tr>

    );
}

export default SummaryCountry;
