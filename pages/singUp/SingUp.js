import React from "react";
import Image from "next/image";
import logo from "../../public/assets/img/logo.png";
import emailIcon from "../../public/assets/img/email.svg";
import passwordIcon from "../../public/assets/img/pasword-icon.svg";
import googleIcon from "../../public/assets/img/google-icon.png";
import singInImage from "../../public/assets/img/singIn-img.png";
import userIcon from "../../public/assets/img/user-icon.svg";
import walletIcon from "../../public/assets/img/wallet-icon.svg";
const SingUp = () => {
  return (
    <div className="singInpageWrapper">
      <div className="row">
        <div className="col-lg-6 p-0">
          <div className="singInPageTextContainer">
            <Image src={logo} alt="logo" className="singInPageLogo" />
            <div className="singUpHeader">
              <h1 className="lgHeading">Get Started with Us</h1>
              <p className="mainText">
                Create your account to unlock personalized features and
                streamline your experience. Join us today.
              </p>
            </div>

            <form className="singInForm">
              <div className="row">
                <div className="col-lg-6">
                  <div className="inputHolder">
                    <Image
                      src={userIcon}
                      alt="user Icon"
                      className="inputIcon"
                    />
                    <input
                      type="text"
                      className="inputArea"
                      placeholder="First Name"
                    />
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="inputHolder">
                    <Image
                      src={userIcon}
                      alt="user icon"
                      className="inputIcon"
                    />
                    <input
                      type="text"
                      className="inputArea"
                      placeholder="Last Name"
                    />
                  </div>
                </div>
              </div>
              <div className="inputHolder">
                <Image src={emailIcon} alt="email" className="inputIcon" />
                <input type="email" className="inputArea" placeholder="Email" />
              </div>

              <div className="inputHolder">
                <Image
                  src={walletIcon}
                  alt="wallet icon"
                  className="inputIcon"
                />
                <select className="inputArea">
                  <option value="" selected>
                    Select Your Role
                  </option>
                  <option value="owner">Owner</option>
                  <option value="tenant">Tenant</option>
                  <option value="craftsman">Craftsman</option>
                  <option value="staff">Freiraum Staff</option>
                </select>
              </div>

              <div className="inputHolder">
                <Image src={passwordIcon} alt="email" className="inputIcon" />
                <input
                  type="password"
                  className="inputArea"
                  placeholder="Password"
                />
              </div>

              <input
                type="submit"
                value="Proceed"
                className="proceedBtn mt-4"
              />

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
                  Already have an account?
                  <a href="#" className="forgotPasswordText">
                    Log In
                  </a>
                </p>
              </div>
            </form>
          </div>
        </div>
        <div className="col-lg-6 p-0">
          <div className="singInPageImageContainer singUpImageContainer">
            <Image
              src={singInImage}
              alt="singIn"
              className="singInPageImage "
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingUp;
