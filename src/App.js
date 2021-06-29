
import React from "react"
import { Route, BrowserRouter as Router, Switch } from "react-router-dom"
/*
import $ from 'jquery'; 
import 'bootstrap/dist/css/bootstrap.css';
*/
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Footer from "./components/Footer";

class App extends React.Component {

    render() {
        return (
            <Router>
                <Navbar />
                <Switch>
                    <Route path="/" exact component={Home}></Route>
                    <Route path="/about" component={About}></Route>
                </Switch>
                <Footer/>
            </Router>
        )
    }
}

export default App;
