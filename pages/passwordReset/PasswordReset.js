import React from "react";
import Image from "next/image";
import logo from "../../public/assets/img/logo.png";
import emailIcon from "../../public/assets/img/email.svg";
import singInImage from "../../public/assets/img/password-reset.png";

const PasswordReset = () => {
  return (
    <div className="singInpageWrapper">
      <div className="row">
        <div className="col-lg-6 p-0">
          <div className="singInPageTextContainer">
            <Image src={logo} alt="logo" className="singInPageLogo" />
            <div className="singUpHeader">
              <h1 className="lgHeading">Reset Your Password</h1>
              <p className="mainText">
                Please enter your email address to receive a link to reset your
                password.
              </p>
            </div>

            <form className="singInForm">
              <div className="inputHolder">
                <Image src={emailIcon} alt="email" className="inputIcon" />
                <input type="email" className="inputArea" placeholder="Email" />
              </div>

              <input
                type="submit"
                value="Send Reset Link"
                className="proceedBtn mt-4"
              />

              <div className="singInFooterTextContainer ">
                <p className="inputCheckLabel">
                  Remember your password?
                  <a href="#" className="forgotPasswordText">
                    &nbsp; Log In
                  </a>
                </p>
              </div>
            </form>
          </div>
        </div>
        <div className="col-lg-6 p-0">
          <div className="singInPageImageContainer">
            <Image src={singInImage} alt="singIn" className="singInPageImage" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PasswordReset;
