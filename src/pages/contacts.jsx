import React from "react";
import contacts from "../assets/img/jpeg/conacts.jpeg";
import ContactForm from "../components/banner/contactForm";
import HotelInfo from "../components/banner/hotelInfo";
// import BaliMap from "../components/banner/baliMap";

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
    <ContactForm />
    <HotelInfo />
    {/* <BaliMap /> */}
  </div>
);

export default Contacts;
