import React, { Component } from "react";

export default class ScrollToTop extends Component {

    scrollToTop() {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    }

    render() {
        return (
            <div className="scroll-to-top">

                <div onClick={() => this.scrollToTop()}>
                    <i class="fas fa-chevron-up"></i>
                </div>

            </div>
        );
    }
}
