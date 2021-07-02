import React from "react";
import { data_summary } from '../store/covid_data';
import { data_summary_yesterday } from '../store/covid_data';
import { data_vaccine } from '../store/covid_data';
import '../css/summary.css';
import SummaryDetails from "./SummaryDetails";
import loading_gif from '../images/loading2.svg';

class Summary extends React.Component {

    state = {
        data_summary: [],
        data_summary_yesterday: [],
        data_vaccine: [],
        loading: true
    }

    async componentDidMount() {

        data_summary().then(data => {
            this.setState({
                data_summary: data,
                loading: true
            })
        });

        data_summary_yesterday().then(data => {
            this.setState({
                data_summary_yesterday: data,
                loading: true
            })
        });

        data_vaccine ().then(data => {
            this.setState({
                data_vaccine: data,
                loading:false
            })
        });

    }

    render() {
        if (this.state.loading) {
            return (
                <div className="container">
                    <div id="loading-animation" className="row">
                        <div className="col-lg-12">
                            <img src={loading_gif} alt="loading" />
                        </div>
                    </div>
                </div>
            )
        }
        else {
            return (
                <div id="summary-container" className="">
                    <SummaryDetails data_summary={this.state.data_summary} data_summary_yesterday={this.state.data_summary_yesterday} data_vaccine={this.state.data_vaccine} />
                </div>
            );
        }
    }
}

export default Summary;
