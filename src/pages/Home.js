import React from "react";
import AOS from 'aos'
import "aos/dist/aos.css";
import '../css/home.css';

class Home extends React.Component {

    state = {
        world_data: [],
        world_total_cases: [],
        loading: true
    }

    async componentDidMount() {
        AOS.init({
            // initialise with other settings
            duration : 500
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
        .then(data => this.setState({world_total_cases:data.data, loading: false }))
        .catch(err => {
            console.error(err);
        });
    }

    render() {
        if (this.state.loading) {
            return <div>Loading...</div>;
        }
        else{

            console.log(this.state.world_total_cases.summary)


            /*
            this.state.world_data.forEach(country => {
                this.state.world_total_cases.totalConfirmed += country.cases.total;
            });
            */

            return (
                <div id="home-body">
                    <ul data-aos="fade-up">
                        <li className="data-block total">
                            Total Confirmed: {this.state.world_total_cases.summary.total_cases.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ")}
                        </li>
                        <li className="data-block total-confirmed">
                            Total Active Cases: {this.state.world_total_cases.summary.active_cases.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ")}
                        </li>
                        <li className="data-block total-recovered">
                            Total Recovered: {this.state.world_total_cases.summary.recovered.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ")}
                        </li>
                        <li className="data-block total-deaths">
                            Total Deaths: {this.state.world_total_cases.summary.deaths.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ")}
                        </li>
                    </ul>
                </div>
            );
        }
    }
}

export default Home;