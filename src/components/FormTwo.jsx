import React from "react";
import InputBox from "./atom/Input/InputBox";

function FormTwo({ address, contact, submitHandler }) {
  return (
    <div>
      <h3 className="text-center">Step Two</h3>
      <form
        onSubmit={() => {
          submitHandler(3);
        }}
      >
        <InputBox
          labelText="Address"
          placeHolder="Enter Address"
          type="text"
          name="address"
          helpText="We'll never share your address with anyone else"
          value={address.address}
          changeFunction={address.setAddress}
        />
        <InputBox
          labelText="Contact Number"
          placeHolder="Enter contact number"
          type="password"
          name="password"
          value={contact.contact}
          changeFunction={contact.setContact}
          helpText="We'll never share your Number with anyone else"
        />

        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
}

export default FormTwo;
