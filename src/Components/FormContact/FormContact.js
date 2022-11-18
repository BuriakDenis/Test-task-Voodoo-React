import React from "react";
import MapLocation from "../MapLocation/MapLocation";
import 
import "./FormContact.css";

export default function FormContact() {
  return (
    <section className="contact">
      <div className="contact__container">
        <div className="contact__content content">
          <h1 className="content__title">Contact Us</h1>
          <div className="content__description">
            The Voodoo team is looking forward to hearing from you!
          </div>
          <form className="contact__form-content">
            <input className="" type="text" />
            <input className="" type="text" />
            <input className="" type="text" />
            <input className="" type="text" />
            <input className="" type="number" />
            <input className="" type="text" />
            <input className="" type="text" />
          </form>
          <Button/>
        </div>
        <MapLocation />
      </div>
    </section>
  );
}
