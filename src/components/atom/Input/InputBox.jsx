import React from "react";

function InputBox({
  placeHolder,
  type,
  name,
  helpText,
  value,
  changeFunction,
  labelText,
}) {
  return (
    <div className="form-group">
      <label htmlFor="exampleInputEmail1">{labelText}</label>
      <input
        value={value}
        type={type}
        className="form-control"
        name={name}
        placeholder={placeHolder}
        onChange={(e) => changeFunction(e.target.value)}
      />
      <small id="emailHelp" className="form-text text-muted">
        {helpText}
      </small>
    </div>
  );
}

export default InputBox;
