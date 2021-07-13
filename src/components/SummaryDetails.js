import React from "react";
import '../css/summary.css';
import SummaryDetail from "./SummaryDetail";


const SummaryDetails = ({ data_summary, data_summary_yesterday, data_vaccine}) => {
    return (
        <div id="summary-details">
            <div className="row" data-aos="fade-up">
                <SummaryDetail title="Global cases" total={data_summary.cases} change={data_summary.todayCases} extra_info={data_summary.casesPerOneMillion + " per million"} />
                <SummaryDetail title="Cases active" total={data_summary.active} change={(data_summary.active - data_summary_yesterday.active)} extra_info={data_summary.critical + " critical conditions"} />
                <SummaryDetail title="Total recovered" total={data_summary.recovered} change={data_summary.todayRecovered} extra_info={Math.round((data_summary.recovered / data_summary.cases) * 100) + "% recovered"} upside={true}/>
                <SummaryDetail title="Total deaths" total={data_summary.deaths} change={data_summary.todayDeaths} extra_info={data_summary.deathsPerOneMillion + " per million"} />
                <SummaryDetail title="Tests perfomed" total={data_summary.tests} change={data_summary.tests - data_summary_yesterday.tests} extra_info={data_summary.testsPerOneMillion + " per million"} upside={true} />
                <SummaryDetail title="Total vaccines" total={data_vaccine[1].total} change={data_vaccine[1].daily} extra_info={data_vaccine[1].dailyPerMillion + " daily per million"} upside={true} />
            </div>
        </div>
    );
}

export default SummaryDetails;
