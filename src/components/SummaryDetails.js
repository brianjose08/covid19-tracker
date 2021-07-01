import React from "react";
import '../css/summary.css';
import SummaryDetail from "./SummaryDetail";


const SummaryDetails = ({ data_summary, data_vaccine}) => {
    return (
        <div id="summary-details">
            <div className="row" data-aos="fade-down">
                <SummaryDetail title="Global cases" total={data_summary.cases} change={data_summary.todayCases} />
                <SummaryDetail title="Tests perfomed" total={data_summary.tests} change={data_summary.tests} />
                <SummaryDetail title="Cases active" total={data_summary.active} change={data_summary.critical + " critical cases"} />
                <SummaryDetail title="Total recovered" total={data_summary.recovered} change={data_summary.recovered} />
                <SummaryDetail title="Total vaccines" total={data_vaccine.total} change={data_vaccine.daily} />
                <SummaryDetail title="Total deaths" total={data_summary.deaths} change={data_summary.todayDeaths} />
            </div>
        </div>
    );
}

export default SummaryDetails;
