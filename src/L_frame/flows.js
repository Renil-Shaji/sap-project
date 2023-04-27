import { faHouse } from '@fortawesome/free-solid-svg-icons'
import { faIdBadge } from "@fortawesome/free-solid-svg-icons";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { faGear } from "@fortawesome/free-solid-svg-icons";
import { faRightFromBracket } from "@fortawesome/free-solid-svg-icons";
const flow_panel = [
  {
    id: 1,
    Text: "Dashboard",
    icon: faHouse,
    icon_class:"flow-icons"
  },
  {
    id: 2,
    Text: "Badges",
    icon: faIdBadge,
    icon_class:"flow-icons"
  },
  {
    id: 3,
    Text: "Local Admins",
    icon: faUser,
    icon_class:"flow-icons"
  },
  {
    id: 4,
    Text: "Settings",
    icon: faGear,
    icon_class:"flow-icons"
  }
];
 const Exit ={
  
    id:6,
    Text:"Logout",
    icon: faRightFromBracket,
    icon_class:"exit-icon"
 }
export default flow_panel;
export {Exit} ;