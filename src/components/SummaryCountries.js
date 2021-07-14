
import React from "react";
import '../css/summary.css';
import SummaryCountry from "./SummaryCountry";

const SummaryCountries = ({ data_countries }) => {

    const countries = []
    data_countries.forEach(country => countries.push(
        <SummaryCountry country={country} />
    ))

    return (
        <div data-aos="fade-up">
            <div>
                <h2 className="sub-title country-title">Countries</h2>
            </div>
            <div className="div-table">
                <table className="table">
                    <thead >
                        <tr>
                            <th className="header" scope="col">Country</th>
                            <th className="header" scope="col">Cases</th>
                            <th className="header" scope="col">Cases per million</th>
                            <th className="header" scope="col">Critical</th>
                            <th className="header" scope="col">Recovered</th>
                            <th className="header" scope="col">Deaths</th>
                            <th className="header" scope="col">Deaths per million</th>
                            <th className="header" scope="col">Tests</th>
                        </tr>
                    </thead>
                    <tbody>
                        {countries}
                    </tbody>
                </table>
            </div>
        </div>
    );

}


export default SummaryCountries;
