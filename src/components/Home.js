import React from "react";
import AOS from 'aos'
import "aos/dist/aos.css";
import '../css/home.css';
import globe_image from '../images/globe.png';
import mask_image from '../images/mask.png';
import recover_image from '../images/recover.png';
import skull_image from '../images/skull.png';

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
                    <div className="total-confirmed">
                        <div className="row data-block">
                            <div className="col-lg-8 my-auto col-text">
                                <p data-aos="fade-up">
                                    {this.state.world_total_cases.summary.total_cases.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ")} confirmed cases around the world.
                                </p>
                            </div>
                            <div className="col-lg col-image">
                                <img data-aos="fade-down" src={globe_image} className="image-header-right" alt="globe" />
                            </div>
                        </div>
                    </div>
                    <div className="total-active">
                    <svg viewBox="0 0 1812 100" xmlns="http://www.w3.org/2000/svg"><path fill="rgba(0, 0, 0, 1)" d="M0 0c5.5 0-16.5 11-11 11V0H0z"/><path fill="rgba(0, 0, 0, 1)" d="M-12 11c254.5 0 254.5 69 509 69V0H-12z"/><path fill="rgba(0, 0, 0, 1)" d="M496 80c257 0 257-43 514-43V0H496z"/><path fill="rgba(0, 0, 0, 1)" d="M1009 37c219.5 0 219.5 24 439 24V0h-439z"/><path fill="rgba(0, 0, 0, 1)" d="M1447 61c182.5 0 182.5-61 365-61h-365z"/></svg>
                        <div className="row data-block">
                            <div className="col-lg-4 col-image">
                                <img data-aos="fade-down" src={mask_image} className="image-header-right" alt="mask" />
                            </div>
                            <div className="col-lg my-auto col-text text-right">
                                <p data-aos="fade-up">
                                    {this.state.world_total_cases.summary.active_cases.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ")} cases still active.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="total-recovered">
                    <svg viewBox="0 0 1475 99" xmlns="http://www.w3.org/2000/svg"><path fill="rgba(255, 207, 50, 1)" d="M0 0c6 0-18 62-12 62V0H0z"/><path fill="rgba(255, 207, 50, 1)" d="M-13 62c201.5 0 201.5 21 403 21V0H-13z"/><path fill="rgba(255, 207, 50, 1)" d="M389 83c188 0 188-32 376-32V0H389z"/><path fill="rgba(255, 207, 50, 1)" d="M764 51c176.5 0 176.5 45 353 45V0H764z"/><path fill="rgba(255, 207, 50, 1)" d="M1116 96c180.5 0 180.5-33 361-33V0h-361z"/><path fill="rgba(47, 73, 94, 1)" d="M1476 63c.5 0-1.5-63-1-63h1z"/></svg>
                        <div className="row data-block">
                            <div className="col-lg-8 my-auto col-text">
                                <p data-aos="fade-up">
                                    {this.state.world_total_cases.summary.recovered.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ")} people have recovered.
                                </p>
                            </div>
                            <div className="col-lg col-image">
                                <img data-aos="fade-down" src={recover_image} className="image-header-right" alt="recover" />
                            </div>
                        </div>
                    </div>
                    <div className="total-deaths">
                    <svg viewBox="0 0 1475 99" xmlns="http://www.w3.org/2000/svg"><path fill="rgba(0, 224, 138, 1)" d="M0 0c6 0-18 62-12 62V0H0z"/><path fill="rgba(0, 224, 138, 1)" d="M-13 62c201.5 0 201.5 21 403 21V0H-13z"/><path fill="rgba(0, 224, 138, 1)" d="M389 83c188 0 188-32 376-32V0H389z"/><path fill="rgba(0, 224, 138, 1)" d="M764 51c176.5 0 176.5 45 353 45V0H764z"/><path fill="rgba(0, 224, 138, 1)" d="M1116 96c180.5 0 180.5-33 361-33V0h-361z"/><path fill="rgba(47, 73, 94, 1)" d="M1476 63c.5 0-1.5-63-1-63h1z"/></svg>
                        <div className="row data-block">
                            <div className="col-lg-4 col-image">
                                <img data-aos="fade-down" src={skull_image} className="image-header-right" alt="skull" />
                            </div>
                            <div className="col-lg my-auto col-text text-right">
                                <p data-aos="fade-up">
                                    {this.state.world_total_cases.summary.deaths.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ")} people have died.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            );
        }
    }
}

export default Home;