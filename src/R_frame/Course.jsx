import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { faBookOpen } from "@fortawesome/free-solid-svg-icons";

function Course(props)
{
  return (
    <div className="course-container">
        <p className="course-heading">Course </p>
        <FontAwesomeIcon className="book-open" icon={faBookOpen}/>
    </div>
  );
}

export default Course;