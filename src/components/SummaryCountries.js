
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
                <h1><i class="fas fa-circle fa-xs"></i> Countries</h1>
            </div>
            <div className="div-table">
                <table className="table">
                    <thead>
                        <tr>
                            <th scope="col">Country</th>
                            <th scope="col">Cases</th>
                            <th scope="col">Cases per million</th>
                            <th scope="col">Critical</th>
                            <th scope="col">Recovered</th>
                            <th scope="col">Deaths</th>
                            <th scope="col">Deaths per million</th>
                            <th scope="col">Tests</th>
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
