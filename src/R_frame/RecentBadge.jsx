import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { faIdBadge } from "@fortawesome/free-solid-svg-icons";

function RecentBadge(props)
{
  return (
    <div className="recent-badge-container">
      <div className="recent-badge-flex">
        <p className="admin-frame-heading-recent">Recently Issued Badge</p>
        <p>(21st March 2023)</p>
      </div>
      <div className="recent-badge-flex-2">
        <FontAwesomeIcon  icon={faIdBadge} className="recent-badge"/>
        <div className="recent-badge-grid">
          <p className="admin-frame-sub-heading-recent">Issued to</p>
          <p className="admin-frame-sideline-recent">Arun Gopal</p>
          <p className="admin-frame-sub-heading-recent">Course</p>
          <p className="admin-frame-sideline-recent">Data Science</p>
        </div>
      </div>
    </div>
  );
}

export default RecentBadge;