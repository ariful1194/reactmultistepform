import React from "react";
import InputBox from "./atom/Input/InputBox";

function FormOne({ name, password, submitHandler }) {
  return (
    <div>
      <h3 className="text-center">Step One </h3>
      <form
        onSubmit={() => {
          submitHandler(2);
        }}
      >
        <InputBox
          labelText="Emmail Address"
          placeHolder="Enter Email Address"
          type="text"
          name="email"
          helpText="We'll never share your email with anyone else"
          value={name.name}
          changeFunction={name.setName}
        />
        <InputBox
          labelText="password"
          placeHolder="Enter Password"
          type="password"
          name="password"
          value={password.password}
          changeFunction={password.setPassword}
        />

        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
}

export default FormOne;
