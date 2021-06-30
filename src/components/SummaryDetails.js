import React from "react";
import '../css/summary.css';
import SummaryDetail from "./SummaryDetail";


const SummaryDetails = ({ data }) => {
    return (
        <div id="summary-details">
            <div className="row">
                <SummaryDetail title="Total global cases" total={data.summary.total_cases.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ")} change={data.change.total_cases.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ")} />
                <SummaryDetail title="Tests perfomed" total={data.summary.tested.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ")} change={data.change.tested.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ")} />
                <SummaryDetail title="Total recovered" total={data.summary.recovered.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ")} change={data.change.recovered.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ")} />
            </div>
        </div>
    );
}

export default SummaryDetails;
