import React from "react";
import { useHistory } from "react-router-dom";

import LOGO from "../../assets/logo.png";
import http from "../../utils/url";

import "./index.scss";

const Modal = () => {
  const history = useHistory();

  const [email, setEmail] = React.useState("");
  const [phone, setPhone] = React.useState("");
  const [password, setPassword] = React.useState("");

  const handleSubmit = () => {
    const data = {
      email: email,
      username: phone,
      password: password,
    };
    http
      .post("/api/users/sign_in/", data)
      .then((response) => {
        console.log(response);
        // history.push("/login")
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="modal__wrapper auth__modal">
      <div className="modal">
        <div className="col-6 modal__left">
          <h3 className="modal__title">Sing In</h3>
          <div className="modal__form">
            <label className="modal__label">
              <input
                required
                onChange={(event) => setEmail(event.target.value)}
                value={email}
                type="text"
                placeholder="Email"
              />
              <p>Email</p>
            </label>
            <label className="modal__label">
              <input
                required
                onChange={(event) => setPhone(event.target.value)}
                value={phone}
                type="text"
                placeholder="Phone number"
              />
              <p>Phone number</p>
            </label>
            <label className="modal__label">
              <input
                required
                onChange={(event) => setPassword(event.target.value)}
                value={password}
                type="text"
                placeholder="Password"
              />
              <p>Password</p>
            </label>
            <button
              className="btn-blue form__btn"
              onClick={() => handleSubmit()}
            >
              Sign In
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
