import ModeToggle from "./ModeToggle";

import "./style.scss";

const Header = ({ onClick, darkMode }) => {
  return (
    <header
      className={`header ${darkMode ? "header-darkmode" : "header-lightmode"}`}
    >
      <div className="header-title-box">
        <h1 className="header-title">
          <span className="header-initial">D</span>ougie
          <span className="header-initial">S</span>tyle
          <span className="header-initial">C</span>oding
        </h1>
      </div>
      <ModeToggle onClick={onClick} darkmode={darkMode} />
    </header>
  );
};

export default Header;
