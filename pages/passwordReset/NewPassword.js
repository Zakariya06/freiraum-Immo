import React from "react";
import Image from "next/image";
import logo from "../../public/assets/img/logo.png";
import passwordIcon from "../../public/assets/img/pasword-icon.svg";
import newPasswordImage from "../../public/assets/img/password-reset.png";

const NewPassword = () => {
  return (
    <div className="singInpageWrapper">
      <div className="row">
        <div className="col-lg-6 p-0">
          <div className="singInPageTextContainer">
            <Image src={logo} alt="logo" className="singInPageLogo" />
            <div className="singUpHeader">
              <h1 className="lgHeading">Enter Your New Password</h1>
              <p className="mainText">
                Hi <span className="emailText">johndoe@gmail.com</span>, Please
                enter your new password below.
              </p>
            </div>
            <form className="singInForm">
              <div className="inputHolder">
                <Image src={passwordIcon} alt="email" className="inputIcon" />
                <input
                  type="password"
                  className="inputArea"
                  placeholder="New Password"
                />
              </div>
              <div className="inputHolder">
                <Image src={passwordIcon} alt="email" className="inputIcon" />
                <input
                  type="password"
                  className="inputArea"
                  placeholder="Confirm New Password"
                />
              </div>
              <input
                type="submit"
                value="Confirm"
                className="proceedBtn mt-4"
              />
            </form>
          </div>
        </div>
        <div className="col-lg-6 p-0">
          <div className="singInPageImageContainer ">
            <Image
              src={newPasswordImage}
              alt="singIn"
              className="singInPageImage "
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewPassword;
