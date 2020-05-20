import React from "react";
import { useDispatch } from "react-redux";
import "./LoginContainer.scss";
import { Facebook } from "react-feather";
import { loginAction } from "actions/authActions";

const LoginContainer = () => {
  const dispatch = useDispatch();

  return (
    <div className="row">
      <div className="col-md-6  mx-auto">
        <div className="login container d-flex align-items-center shadow">
          <button
            className="btn btn-primary btn-block btn-fb"
            onClick={() => dispatch(loginAction())}
          >
            <Facebook /> Log-in with Facebook
          </button>
        </div>
      </div>
    </div>
  );
};

export default LoginContainer;
