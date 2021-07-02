import '../css/summary.css';

const SummaryDetail = ({ title, total, change, extra_info, upside = false, icon }) => {

    if(!upside) {
        if (change > 0) {
            return (
                <div className="col-sm-6 col-lg-4 col-12">
                    <div className="summary-detail">
                        <div className="summary-title">
                            <p>
                                {title}
                            </p>
                        </div>
                        <div className="summary-information">
                            <p>{total.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ")} <span className="negative-change">{"+" + change.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ")}</span></p>
                        </div>
                        <div className="summary-extra-information">
                            <p className="negative-extra">
                                {extra_info.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ")}
                            </p>
                        </div>
                    </div>
                </div>
            );
        }
        else {
            return (
                <div className="col-sm-6 col-lg-4 col-12">
                    <div className="summary-detail">
                        <div className="summary-title">
                            <p>
                                {title}
                            </p>
                        </div>
                        <div className="summary-information">
                            <p>{total.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ")} <span className="positive-change">{"-" + change.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ")}</span></p>
                        </div>
                        <div className="summary-extra-information">
                            <p className="negative-extra">
                                {extra_info.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ")}
                            </p>
                        </div>
                    </div>
                </div>
            );
        }
    }
    else {
        if (change > 0) {
            return (
                <div className="col-sm-6 col-lg-4 col-12">
                    <div className="summary-detail">
                        <div className="summary-title">
                            <p>
                                {title}
                            </p>
                        </div>
                        <div className="summary-information">
                            <p>{total.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ")} <span className="positive-change">{"+" + change.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ")}</span></p>
                        </div>
                        <div className="summary-extra-information">
                            <p className="positive-extra">
                                {extra_info.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ")}
                            </p>
                        </div>
                    </div>
                </div>
            );
        }
        else {
            return (
                <div className="col-sm-6 col-lg-4 col-12">
                    <div className="summary-detail">
                        <div className="summary-title">
                            <p>
                                {title}
                            </p>
                        </div>
                        <div className="summary-information">
                            <p>{total.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ")} <span className="negative-change">{"-" + change.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ")}</span></p>
                        </div>
                        <div className="summary-extra-information">
                            <p className="positive-extra">
                                {extra_info.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ")}
                            </p>
                        </div>
                    </div>
                </div>
            );
        }
    }

}

export default SummaryDetail;
