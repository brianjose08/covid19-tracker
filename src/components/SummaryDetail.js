import '../css/summary.css';

const SummaryDetail = ({ title, total, change, img }) => {
    return (
        <div className="col-sm-4 summary-detail">
            <p>
                {title}
            </p>
            <p>
                {total}
            </p>
            <p>
                {change}
            </p>
        </div>
    );
}

export default SummaryDetail;
