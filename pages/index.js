import React from "react";
import SingIn from "./singIn/SingIn";
import SingUp from "./singUp/SingUp";
import PasswordReset from "./passwordReset/PasswordReset";
import NewPassword from "./passwordReset/NewPassword";
import DashBoardPage from "./dashboard/DashBoard";
import Cases from "./cases/Cases";

const index = () => {
  return (
    <>
      {/* <SingIn /> */}
      {/* <SingUp /> */}
      {/* <PasswordReset /> */}
      {/* <NewPassword /> */}
      <DashBoardPage />
      {/* <Cases /> */}
    </>
  );
};

export default index;
