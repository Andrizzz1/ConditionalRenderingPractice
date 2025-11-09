import React from "react";
function CreateInput(props) {
  return (
    <div>
      <input type={props.type} placeholder={props.placeholder} />
    </div>
  );
}
function Form(props) {
  return (
    <form className="form">
      <CreateInput type="text" placeholder="Username" />
      <CreateInput type="password" placeholder="Password" />
      {props.isRegister == false ? (
        <CreateInput type="password" placeholder="Confirm Password" />
      ) : null}
      <button type="submit">{props.isRegister ? "Login" : "Register"}</button>
    </form>
  );
}

export default Form;
