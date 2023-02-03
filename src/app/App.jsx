import React from "react";
import sun from "./theme/sun.png";
import Welcome from "./welcome";

const App = () => (
  <div
    style={{
      backgroundImage: `url(${sun})`,
      backgroundSize: "cover",
      height: "100vh",
    }}
  >
    <Welcome />
  </div>
);

export default App;
