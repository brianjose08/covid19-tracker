import React from "react";
import { data_summary } from '../store/covid_data';
import { data_summary_yesterday } from '../store/covid_data';
import { data_vaccine } from '../store/covid_data';
import { data_continents } from '../store/covid_data';
import { data_continents_yesterday } from '../store/covid_data';
import { data_countries } from '../store/covid_data';
import '../css/summary.css';
import SummaryDetails from "./SummaryDetails";
import SummaryContinents from "./SummaryContinents";
import SummaryCountries from "./SummaryCountries";
import loading_gif from '../images/loading2.svg';

class Summary extends React.Component {

    state = {
        data_summary: [],
        data_summary_yesterday: [],
        data_continents: [],
        data_continents_yesterday: [],
        data_countries: [],
        data_vaccine: [],
        loading: true
    }

    async componentDidMount() {

        await data_summary().then(data => {
            this.setState({
                data_summary: data,
            })
        });

        await data_summary_yesterday().then(data => {
            this.setState({
                data_summary_yesterday: data,
            })
        });

        await data_vaccine().then(data => {
            this.setState({
                data_vaccine: data,
            })
        });

        await data_continents().then(data => {
            this.setState({
                data_continents: data,
            })
        });

        await data_continents_yesterday().then(data => {
            this.setState({
                data_continents_yesterday: data,
            })
        });

        await data_countries().then(data => {
            data.sort(function (a, b) { return b.cases - a.cases });
            this.setState({
                data_countries: data,
                loading: false
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
                <div id="summary-container" className="header">
                    <div className="page-title">
                        <h1 data-aos="fade-up">Global Summary</h1>
                        <h4 data-aos="fade-up">Countries affected: {this.state.data_summary.affectedCountries}</h4>
                    </div>
                    <div>
                        <SummaryDetails data_summary={this.state.data_summary} data_summary_yesterday={this.state.data_summary_yesterday} data_vaccine={this.state.data_vaccine} />
                        <SummaryContinents data_continents={this.state.data_continents} data_continents_yesterday={this.state.data_continents_yesterday} />
                        <SummaryCountries data_countries={this.state.data_countries} />
                    </div>

                </div>
            );
        }
    }
}

export default Summary;
