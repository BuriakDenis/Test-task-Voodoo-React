import React from "react";
import MapLocation from "../MapLocation/MapLocation";
import Button from "../Button/Button";
import "./FormContact.css";
import Select from "../Select/Select";

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
            <input
              className="contact__input"
              type="text"
              placeholder="Full Name*"
              required
            />
            <input
              className="contact__input"
              type="text"
              placeholder="Title/Position*"
              required
            />
            <Select title={"Practice / Institution*"} />
            <input
              className="contact__input"
              type="email"
              placeholder="Email Address*"
              required
            />
            <input
              className="contact__input"
              type="tel"
              placeholder="Phone Number*"
              required
            />
            <Select title={"Medical Profession*"} />
            <Select title={"Type of Inquiry*"} class={"input-injury"} />
            <textarea
              className="contact__input input-message"
              type="text"
              placeholder="Enter Message*"
              required
            />
          </form>
          <Button />
        </div>
        <MapLocation />
      </div>
    </section>
  );
}
