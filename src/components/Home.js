import React from "react";
import AOS from 'aos'
import "aos/dist/aos.css";
import '../css/home.css';
import globe_image from '../images/globe.png';
import mask_image from '../images/mask.png';
import recover_image from '../images/recover.png';
import skull_image from '../images/skull.png';
import covid_image from '../images/covid.png';
import loading_gif from '../images/loading2.svg';

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
            .then(data => this.setState({ world_data: data.data, loading: false }))
            .catch(err => {
                console.error(err);
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
                <div id="container">
                    <div id="header">
                        <div className="row home-banner">
                            <div className="col-lg-12">
                                <img data-aos="fade-down" src={covid_image} className="image-header-right" alt="covid" />
                            </div>
                            <div className="col-lg-12 my-auto col-text">
                                <p data-aos="fade-up">
                                    {this.state.world_data.summary.total_cases.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ")} confirmed cases around the world.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="total-confirmed">
                        <svg viewBox="0 0 1920 132" xmlns="http://www.w3.org/2000/svg"><path fill="rgba(255, 255, 255, 1)" d="M0 0c1.3 0-14.3 54-13 54V0H0z" /><path fill="rgba(255, 255, 255, 1)" d="M-14 54c97 0 873 69 970 69V0H-14z" /><path fill="rgba(255, 255, 255, 1)" d="M955 123c96.7 0 870.3-72 967-72V0H955z" /><path fill="rgba(255, 255, 255, 1)" d="M1921 51c.1 0-1.1-51-1-51h1z" /></svg>
                        <div className="row home-sub-banner">
                            <div className="col-lg-8 my-auto col-text">
                                <p data-aos="fade-up">
                                    {this.state.world_data.summary.total_cases.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ")} confirmed cases around the world.
                                </p>
                            </div>
                            <div className="col-lg col-image">
                                <img data-aos="fade-down" src={globe_image} className="image-header-right" alt="globe" />
                            </div>
                        </div>
                    </div>
                    <div className="total-active">
                        <svg viewBox="0 0 1812 100" xmlns="http://www.w3.org/2000/svg"><path fill="rgba(0, 0, 0, 1)" d="M0 0c5.5 0-16.5 11-11 11V0H0z" /><path fill="rgba(0, 0, 0, 1)" d="M-12 11c254.5 0 254.5 69 509 69V0H-12z" /><path fill="rgba(0, 0, 0, 1)" d="M496 80c257 0 257-43 514-43V0H496z" /><path fill="rgba(0, 0, 0, 1)" d="M1009 37c219.5 0 219.5 24 439 24V0h-439z" /><path fill="rgba(0, 0, 0, 1)" d="M1447 61c182.5 0 182.5-61 365-61h-365z" /></svg>
                        <div className="row home-sub-banner">
                            <div className="col-lg-4 col-image">
                                <img data-aos="fade-down" src={mask_image} className="image-header-right" alt="mask" />
                            </div>
                            <div className="col-lg my-auto col-text text-right">
                                <p data-aos="fade-up">
                                    {this.state.world_data.summary.active_cases.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ")} cases still active.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="total-recovered">
                        <svg viewBox="0 0 1475 99" xmlns="http://www.w3.org/2000/svg"><path fill="rgba(255, 207, 50, 1)" d="M0 0c6 0-18 62-12 62V0H0z" /><path fill="rgba(255, 207, 50, 1)" d="M-13 62c201.5 0 201.5 21 403 21V0H-13z" /><path fill="rgba(255, 207, 50, 1)" d="M389 83c188 0 188-32 376-32V0H389z" /><path fill="rgba(255, 207, 50, 1)" d="M764 51c176.5 0 176.5 45 353 45V0H764z" /><path fill="rgba(255, 207, 50, 1)" d="M1116 96c180.5 0 180.5-33 361-33V0h-361z" /><path fill="rgba(47, 73, 94, 1)" d="M1476 63c.5 0-1.5-63-1-63h1z" /></svg>
                        <div className="row home-sub-banner">
                            <div className="col-lg-8 my-auto col-text">
                                <p data-aos="fade-up">
                                    {this.state.world_data.summary.recovered.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ")} people have recovered.
                                </p>
                            </div>
                            <div className="col-lg col-image">
                                <img data-aos="fade-down" src={recover_image} className="image-header-right" alt="recover" />
                            </div>
                        </div>
                    </div>
                    <div className="total-deaths">
                        <svg viewBox="0 0 1475 99" xmlns="http://www.w3.org/2000/svg"><path fill="rgba(0, 224, 138, 1)" d="M0 0c6 0-18 62-12 62V0H0z" /><path fill="rgba(0, 224, 138, 1)" d="M-13 62c201.5 0 201.5 21 403 21V0H-13z" /><path fill="rgba(0, 224, 138, 1)" d="M389 83c188 0 188-32 376-32V0H389z" /><path fill="rgba(0, 224, 138, 1)" d="M764 51c176.5 0 176.5 45 353 45V0H764z" /><path fill="rgba(0, 224, 138, 1)" d="M1116 96c180.5 0 180.5-33 361-33V0h-361z" /><path fill="rgba(47, 73, 94, 1)" d="M1476 63c.5 0-1.5-63-1-63h1z" /></svg>
                        <div className="row home-sub-banner">
                            <div className="col-lg-4 col-image">
                                <img data-aos="fade-down" src={skull_image} className="image-header-right" alt="skull" />
                            </div>
                            <div className="col-lg my-auto col-text text-right">
                                <p data-aos="fade-up">
                                    {this.state.world_data.summary.deaths.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ")} people have died.
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