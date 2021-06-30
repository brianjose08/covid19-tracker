import React from "react";
import { data } from '../store/covid_api';
import '../css/summary.css';
import SummaryDetails from "./SummaryDetails";
import loading_gif from '../images/loading2.svg';

class Summary extends React.Component {

    state = {
        world_data: [],
        world_total_cases: [],
        loading: true
    }

    async componentDidMount() {

        data().then(data => {
            this.setState({
                world_data: data.data,
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
                <div id="summary-container" className="">
                    <SummaryDetails data={this.state.world_data} />
                </div>
            );
        }
    }
}

export default Summary;
