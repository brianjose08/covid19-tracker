import React from "react";
import '../css/summary.css';
import SummaryContinent from "./SummaryContinent";

const SummaryContinents = ({ data_continents, data_continents_yesterday }) => {

    const continents = []

    data_continents.forEach(continent => (
        data_continents_yesterday.forEach(continent_yesterday => {
            if(continent.continent === continent_yesterday.continent) {                
                continents.push(<SummaryContinent continent={continent} continent_yesterday={continent_yesterday} /> )
            }
        })
    ))


return (
    <div id="summary-continents">
        <div>
            <h1>Continents</h1>
        </div>
        <div className="row" data-aos="fade-down">
            {continents}
        </div>
    </div>
);
}

export default SummaryContinents;
