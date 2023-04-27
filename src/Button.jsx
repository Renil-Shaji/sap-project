import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

function Button(props) {
  return (
    <button className={props.btn_class} onClick={props.btn_click} >
      <FontAwesomeIcon  icon={props.icon} className={props.icon_class}/>
      {props.btn_text}
    </button>
  );
}

export default Button;
