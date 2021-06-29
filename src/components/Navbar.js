import React from "react";
import '../css/navbar.css';

class Navbar extends React.Component {

    render() {
        return (
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
                <a href="/" class="navbar-brand">Covid Tracker</a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav">
                        <li class="nav-item active">
                            <a class="nav-link" href="/">Home</a>
                        </li>
                        <li class="nav-item active">
                            <a class="nav-link" href="/about">About</a>
                        </li>
                    </ul>
                </div>
            </nav>
        );
    }
}

export default Navbar;
