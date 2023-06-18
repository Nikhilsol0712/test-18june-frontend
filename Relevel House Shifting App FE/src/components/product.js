import React from "react";
import "./product.css";

const Product = () => {
  return (
    <div className="main">
      <h1>Packers and Movers near me</h1>
      <h5>Compare quote and book online</h5>

      <div className="first-con">
        <input type="radio" id="whitnIn" name="fav_language" value="whitnIn" />
        <label for="whitnIn">WithIn City</label>
        <br />
        <input type="radio" id="Inter" name="fav_language" value="Inter" />
        <label for="Inter">Inter City</label>
        <br />
      </div>
      <div className="second-con">
        <div className="fields">
          I am Shifting my{" "}
          <select>
            <option value="Delhi">1 BHK</option>
            <option value="Inodre">2 BHK </option>
            <option value="Bhopal">3 BHK</option>
          </select>
        </div>
        <div className="fields">
          Located in
          <select>
            <option value="Delhi">Delhi</option>
            <option value="Inodre">Indore</option>
            <option value="Bhopal">Bhopal</option>
            <option value="Banglore">Banglore</option>
          </select>
        </div>
        <div className="fields">
          {" "}
          From
          <h6>select Building or Nearest land</h6>
        </div>
        <div className="fields">
          To
          <h6>select Building or Nearest land</h6>
        </div>
        <div className="fields" id="last-field">
          <div>
            <h6>Moving Date</h6>
            On <button id="btn">Get Free Quote</button>
          </div>

          <div>
            <input type="checkbox" id="myCheckbox" />
            <label for="myCheckbox">Flexible Label ?</label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
