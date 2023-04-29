import React, { useState } from "react";
import Button from "./Button";
import flow_panel,{Exit} from "../src/L_frame/flows"
import Profile from "./L_frame/Profile";
import LocalAdmins from "./Rightframe";

function SideFrame() {
  const [sideButton, setSideButton] = useState(null);

  const handleBtnClick = (btnIndex) => {
    setSideButton(btnIndex===sideButton? null:btnIndex);
  };

  return (
    <div className="main-container">
      <div className="side-frame">
          <Profile name="Super Admin Name" id="#20345" />
        <div className="flow-panel">
          {flow_panel.map((btn) => {
            return (
              <Button icon={btn.icon} icon_class={btn.icon_class} btn_class={sideButton=== btn.id?'selected-norm-btn':'norm-btn '+btn.icon}
                btn_text={btn.Text}
                btn_click={() => handleBtnClick(btn.id)}
              />
            );
          })}
        </div>
          <Button icon={Exit.icon} btn_class="logout-btn" btn_text={Exit.Text} icon_class={Exit.icon_class} btn_click={() => handleBtnClick(Exit.id)} />
      </div>
      <div className="right-frame">
        {sideButton===3&&<LocalAdmins/>}
      </div>
    </div>
  );
}

export default SideFrame;
