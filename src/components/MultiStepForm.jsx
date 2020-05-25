import React, { useState } from "react";
import FormOne from "./FormOne";
import FormTwo from "./FormTwo";

function MultiStepForm() {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [address, setAddress] = useState("");
  const [contact, setContact] = useState("");

  //step variable
  const [step, setStep] = useState(1);
  switch (step) {
    case 1:
      return (
        <FormOne
          name={{ name, setName }}
          password={{ password, setPassword }}
          submitHandler={setStep}
        />
      );
    case 2:
      return (
        <FormTwo
          address={{ address, setAddress }}
          contact={{ contact, setContact }}
          submitHandler={setStep}
        />
      );
    case 3:
      return <h2 className="text-center">Successfully form submited !! </h2>;
  }
}

export default MultiStepForm;
