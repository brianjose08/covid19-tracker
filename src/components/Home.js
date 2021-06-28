import React from "react";
import AOS from 'aos'
import "aos/dist/aos.css";
import '../css/home.css';
import globe from '../images/globe.png'; // with import

class Home extends React.Component {

    state = {
        world_data: [],
        world_total_cases: [],
        loading: true
    }

    async componentDidMount() {
        AOS.init({
            // initialise with other settings
            duration: 700
        });

        /*
      //const url = "https://api.covid19api.com/countries";
      const url = "https://api.covid19api.com/world/total";
      const response = await fetch(url);
      const data = await response.json();
      this.setState({ world_total_data: data, loading: false });
      */

        //"https://covid-193.p.rapidapi.com/statistics"



        fetch("https://api.quarantine.country/api/v1/summary/latest")
            .then(response => response.json())
            .then(data => this.setState({ world_total_cases: data.data, loading: false }))
            .catch(err => {
                console.error(err);
            });
    }

    render() {
        if (this.state.loading) {
            return <div class="indicator">
                <svg width="16px" height="12px">
                    <polyline id="back" points="1 6 4 6 6 11 10 1 12 6 15 6"></polyline>
                    <polyline id="front" points="1 6 4 6 6 11 10 1 12 6 15 6"></polyline>
                </svg>
            </div>
        }
        else {
            return (
                <div id="home-body container">
                    <div className="row data-block total-confirmed">
                        <div className="col-lg-8">
                            <p data-aos="fade-down">
                                {this.state.world_total_cases.summary.total_cases.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ")} confirmed cases around the world.
                            </p>
                        </div>
                        <div className="col-lg">
                        <img data-aos="fade-up" src={globe} className="image-header-right"/>
                        </div>
                    </div>
                    <div className="row data-block total-active">
                        <div className="col-12">
                            <p data-aos="fade-down">
                                {this.state.world_total_cases.summary.active_cases.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ")} cases still active.
                            </p>
                        </div>
                    </div>
                    <div className="row data-block total-recovered">
                        <div className="col-12">
                            <p data-aos="fade-down">
                                {this.state.world_total_cases.summary.recovered.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ")} have recovered.
                            </p>
                        </div>
                    </div>
                    <div className="row data-block total-deaths">
                        <div className="col-12">
                            <p data-aos="fade-down">
                                {this.state.world_total_cases.summary.deaths.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ")} have died.
                            </p>
                        </div>
                    </div>
                </div>
            );
        }
    }
}

export default Home;