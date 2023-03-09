import React from "react";
import contacts from "../assets/img/jpeg/conacts.jpeg";
import Banner from "../components/banner/banner";

const Contacts = () => (
  <div
    style={{
      backgroundImage: `url(${contacts})`,
      backgroundSize: "cover",
      height: "100vh",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    }}
  >
    {/* <Banner title="Contact" /> */}
  </div>
);

export default Contacts;
