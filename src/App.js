import { useState } from "react";

import Header from "./components/layout/Header";

import "./display/style/style.scss";

const App = () => {
  const [darkmode, setDarkmode] = useState(false);

  return (
    <div className={`app ${darkmode ? "app-darkmode" : "app-lightmode"}`}>
      <Header onClick={() => setDarkmode(!darkmode)} darkMode={darkmode} />
    </div>
  );
};

export default App;
