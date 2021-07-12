import React from "react";
import '../css/summary.css';


const SummaryContinent = ({continent , continent_yesterday}) => {

    

    return (
        

        <div className="col-sm-6 col-lg-4 col-12">
            <div className="summary-detail">
                <div className="summary-title">
                    <p>
                        {continent.continent}
                    </p>
                    <span>
                        Cases
                    </span>
                </div>
                <div className="summary-information">
                    <p>{continent.cases.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ")} <span className="negative-change">{"+" + continent.todayCases.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ")}</span></p>
                </div>
                <div className="summary-extra-information">
                    <p>
                        {continent.active.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ") + " active"} <span className="negative-change">{"+" + (continent.active - continent_yesterday.active).toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ")}</span>
                    </p>
                </div>
            </div>
        </div>
    );
}

export default SummaryContinent;
