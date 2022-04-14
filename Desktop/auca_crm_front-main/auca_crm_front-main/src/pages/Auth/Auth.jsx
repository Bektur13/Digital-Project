import React from "react";
import { useHistory } from 'react-router-dom'

import LOGO from "../../assets/logo.png";
import http from "../../utils/url";

import "./index.scss";

const Modal = () => {
  const history = useHistory();
  
  const [firstName, setFirstName] = React.useState("");
  const [lastName, setLastName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [phone, setPhone] = React.useState("");
  const [password, setPassword] = React.useState("");

  const handleSubmit = () => {
    const data = {
      first_name: firstName,
      last_name: lastName,
      email: email,
      username: phone,
      password: password,
    };
    http.post("/api/users/sign_up/", data).then(() => {
      history.push("/login")
    });
  };

  return (
    <div className="modal__wrapper auth__modal">
      <div className="modal">
        <div className="col-6 modal__left">
          <h3 className="modal__title">Sing Up</h3>
          <h6 className="modal__suptitle">Add main information about user</h6>
          <div className="modal__form">
            <label className="modal__label">
              <input
                required
                onChange={(event) => setFirstName(event.target.value)}
                value={firstName}
                type="text"
                placeholder="First name"
              />
              <p>First name</p>
            </label>
            <label className="modal__label">
              <input
                required
                onChange={(event) => setLastName(event.target.value)}
                value={lastName}
                type="text"
                placeholder="Last name"
              />
              <p>Last name</p>
            </label>
            <label className="modal__label">
              <input
                required
                onChange={(event) => setEmail(event.target.value)}
                value={email}
                type="email"
                placeholder="Email"
              />
              <p>Email</p>
            </label>
            <label className="modal__label">
              <input
                required
                onChange={(event) => setPhone(event.target.value)}
                value={phone}
                type="number"
                placeholder="Phone number"
              />
              <p>Phone number</p>
            </label>
            <label className="modal__label">
              <input
                required
                onChange={(event) => setPassword(event.target.value)}
                value={password}
                type="password"
                placeholder="Password"
              />
              <p>Password</p>
            </label>
            <button
              className="btn-blue form__btn"
              onClick={() => handleSubmit()}
            >
              Sign Up
            </button>
          </div>
        </div>
        <div className="col-6 text-right">
          <img className="modal__right" src={LOGO} alt="modalRight" />
        </div>
      </div>
    </div>
  );
};

export default Modal;
