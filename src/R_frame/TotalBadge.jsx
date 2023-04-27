import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

function TotalBadge(props)
{
  return (
    <div className="total-badges-container">
          <p className="admin-frame-heading-badge">Badges Issued</p>
          <div className="total-badges-grid">
            <p className="single-highlight-badge">120</p>
            <p className="single-highlight-sideline-badge">badges issued totally</p>
          </div>
    </div>
  );
}

export default TotalBadge;