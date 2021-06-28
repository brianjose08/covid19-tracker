import React from "react";
import AOS from 'aos'
import "aos/dist/aos.css";
import '../css/home.css';

class Home extends React.Component {

    state = {
        countries: [],
        loading: true
    }

    async componentDidMount() {
        AOS.init({
            // initialise with other settings
            duration : 500
          });

        //const url = "https://api.covid19api.com/countries";
        const url = "https://api.covid19api.com/world/total";
        const response = await fetch(url);
        const data = await response.json();
        this.setState({ world_total_data: data, loading: false });
    }

    render() {
        if (this.state.loading)
            return <div>Loading...</div>;

        return (
            <div id="home-body">
                <ul data-aos="fade-up">
                    <li className="data-block">
                        Total Confirmed: {this.state.world_total_data.TotalConfirmed}
                    </li>
                    <li>
                        Total Recovered: {this.state.world_total_data.TotalRecovered}
                    </li>
                    <li>
                        Total Deaths: {this.state.world_total_data.TotalDeaths}
                    </li>
                </ul>
            </div>
        );
    }
}

export default Home;