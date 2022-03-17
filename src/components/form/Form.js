import React from "react";
import "./form.scss";

const Form = () => {
  return (
    <form
      action="https://formsubmit.co/diego.berardi02@gmail.com"
      method="POST"
    >
      <input type="hidden" name="_next" value="http://localhost:3000/" />
      <label htmlFor="name">
        <input
          className="form-input"
          id="name"
          type="text"
          placeholder="name..."
          name="name"
          required
        />
      </label>

      <label htmlFor="email">
        <input
          className="form-input"
          id="email"
          type="email"
          placeholder="email..."
          name="email"
          required
        />
      </label>

      <label className="label-textarea" htmlFor="message">
        <textarea
          id="message"
          className="form-input"
          placeholder="message..."
          name="message"
          cols="40"
          rows="10"
          required
        />
      </label>
      <button type="submit" className="button">
        send message!
      </button>
    </form>
  );
};

export default Form;
