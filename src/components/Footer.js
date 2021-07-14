import React from "react";
import '../css/footer.css';
import ScrollToTopBtn from "./ScrollToTop";

class Footer extends React.Component {

    render() {
        return (

            <footer class="footer">
                <div class="b-footer">
                    <h6>
                        All rights reserved by Brian-José Mejia-Rivera 2021
                    </h6>
                    <h6>
                        <i class="fas fa-envelope"></i> brianjose08@hotmail.com
                    </h6>
                    <ScrollToTopBtn/>
                </div>
            </footer>

        );
    }
}

export default Footer;