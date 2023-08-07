import React, { useState } from "react";
import "./Form.css";

const Form = ({ setCityName }) => {
  const [formCity, setFormCity] = useState("");
  const handleChange = (e) => {
    setFormCity(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setCityName(formCity);
  };
  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="city">
        <h3>City</h3>
      </label>
      <input
        name="city"
        onChange={handleChange}
        placeholder="Enter your city"
        value={formCity}
      />
      <button>Search</button>
    </form>
  );
};

export default Form;
