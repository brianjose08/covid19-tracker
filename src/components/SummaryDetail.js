import '../css/summary.css';

const SummaryDetail = ({ title, total, change, icon }) => {
    return (
        <div className="col-sm-6 col-lg-4 col-12">
            <div className="summary-detail">
                <p>
                    {title}
                </p>
                <p>
                    {total.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ")}
                </p>
                <p>
                    {change.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ")}
                </p>
            </div>
        </div>
    );
}

export default SummaryDetail;
