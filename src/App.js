
import React from "react"
import { Route, BrowserRouter as Router, Switch } from "react-router-dom"
/*
import $ from 'jquery'; 
import 'bootstrap/dist/css/bootstrap.css';
*/
import AOS from 'aos'
import "aos/dist/aos.css";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Footer from "./components/Footer";
import Summary from "./components/Summary";

class App extends React.Component {

    async componentDidMount() {
        AOS.init({
            // initialise with other settings
            duration: 700
        });
    }


    render() {
        return (
            <Router>
                <Navbar />
                <Switch>
                    <Route path="/" exact component={Home}></Route>
                    <Route path="/summary" component={Summary}></Route>
                </Switch>
                <Footer />
            </Router>
        )
    }
}

export default App;
