import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { faUserCircle } from "@fortawesome/free-solid-svg-icons";


function Profile(props) {
  return (
    <div class="profile-left">
      <FontAwesomeIcon className="admin-circle" icon={faUserCircle}/>
      <p>{props.name}</p>
      <p class="faded-text">{props.id}</p>
    </div>
  );
}

export default Profile;
