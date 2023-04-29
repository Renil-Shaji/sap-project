import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { faUserCircle } from "@fortawesome/free-solid-svg-icons";
import { faBars } from "@fortawesome/free-solid-svg-icons";

function AdminProfile(props)
{

  return (
    <div className={props.style}>
      <div className="profile-circle">
        <div className="white-circle">
          <FontAwesomeIcon className="user-circle" icon={faUserCircle}/>
        </div>
      </div>
    </div>
  );
}

export default AdminProfile;