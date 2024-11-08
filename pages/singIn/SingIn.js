import React from "react";
import Image from "next/image";
import logo from "../../public/assets/img/logo.png";
import emailIcon from "../../public/assets/img/email.svg";
import passwordIcon from "../../public/assets/img/pasword-icon.svg";
import googleIcon from "../../public/assets/img/google-icon.png";
import singInImage from "../../public/assets/img/singIn-img.png";

const SingIn = () => {
  return (
    <div className="singInpageWrapper">
      <div className="row">
        <div className="col-lg-6 p-0">
          <div className="singInPageTextContainer">
            <Image src={logo} alt="logo" className="singInPageLogo" />
            <div className="singUpHeader">
              <h1 className="lgHeading">Welcome Back</h1>
              <p className="mainText">
                Log in to access your account and continue where you left off.
                Let’s make progress together.
              </p>
            </div>

            <form className="singInForm">
              <div className="inputHolder">
                <Image src={emailIcon} alt="email" className="inputIcon" />
                <input type="email" className="inputArea" placeholder="Email" />
              </div>
              <div className="inputHolder">
                <Image src={passwordIcon} alt="email" className="inputIcon" />
                <input
                  type="password"
                  className="inputArea"
                  placeholder="Password"
                />
              </div>

              <div className="inputCheckHolder">
                <div className="inputCheckContainer">
                  <input
                    type="checkbox"
                    id="rememberMe"
                    className="inputCheck"
                  />
                  <label htmlFor="rememberMe" className="inputCheckLabel">
                    Remember me
                  </label>
                </div>
                <a href="#" className="forgotPasswordText">
                  Forgot password?
                </a>
              </div>

              <input type="submit" value="Proceed" className="proceedBtn" />

              <div className="lineTextHolder">
                <div className="line"></div>
                <p className="orText">or continue with</p>
                <div className="line"></div>
              </div>

              <button className="proceedBtn socialLoginBtn">
                <Image
                  src={googleIcon}
                  alt="google"
                  className="socialLoginIcon"
                />
                Continue with Google
              </button>

              <div className="singInFooterTextContainer ">
                <p className="inputCheckLabel">
                  Don’t have an account?{" "}
                  <a href="#" className="forgotPasswordText">
                    Sign up
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

export default SingIn;
