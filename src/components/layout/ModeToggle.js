import { LuLightbulb, LuLightbulbOff } from "react-icons/lu";

import "./style.scss";

const ModeToggle = ({ onClick, darkmode }) => {
  return (
    <div className="mode-toggle" onClick={onClick}>
      {darkmode ? <LuLightbulb /> : <LuLightbulbOff />}
    </div>
  );
};

export default ModeToggle;
