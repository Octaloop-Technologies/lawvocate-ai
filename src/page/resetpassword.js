import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Logos from "../assets/images/Group 138.svg";
import { Icon } from "@iconify/react";
const Resetpassword = () => {
  const navigate = useNavigate();
  const [password, setPassword] = useState("");
  const [confirmpassword, setconfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showPasswordconfirm, setShowPasswordconfirm] = useState(false);
  const [passwordError, setPasswordError] = useState("");
  const [confirmpasswordError, setconfirmPasswordError] = useState("");
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
  const togglePasswordVisibilityconfirm = () => {
    setShowPasswordconfirm(!showPasswordconfirm);
  };
  const handleSignIn = () => {
    // Simple validation for email and password

    if (!password) {
      setPasswordError("Password is required");
      return;
    }
    if (!confirmpassword) {
      setconfirmPasswordError("ConfirmPassword is required");
      return;
    }
    if (password !== confirmpassword) {
      setconfirmPasswordError(" Password do not match");
      return;
    } else {
      alert("password Match");
      navigate("/");
    }
    // Perform your sign-in logic here
    // navigate("/plan");
  };
  return (
    <>
      <div className="resetPassword">
        <div className="signin-content">
          <div className="signup-logo">
            {/* <img src={Logo} alt="signuplogo" className="custom" /> */}
            <img src={Logos} alt="signuplogo" className="custom" />
            {/* <img src={Logoss} alt="signuplogo" className="custom" /> */}
          </div>
          <div className="signup-card">
            <div className="signupcard-content">
              <div className="main-card">
                <div className="cardtitle">
                  <div className="leftside">
                    <h6>Reset Password</h6>
                  </div>
                  <div className="rightside">
                    <h6>
                      {/* Set the new password for your account so <br /> you can
                      login and access all the features. */}
                      Enter a new password below to reset your <br /> old
                      password
                    </h6>
                  </div>
                </div>
                <div className="accountRecovery-middle">
                  <div className="firstfield">
                    <div className="label">
                      <label htmlFor="">Password</label>{" "}
                    </div>
                    <div className="inputfield">
                      <input
                        type={showPassword ? "text" : "password"}
                        placeholder="Password"
                        value={password}
                        onChange={(e) => {
                          setPassword(e.target.value);
                          setPasswordError(""); // Clear error when user starts typing
                        }}
                      />
                      <div
                        className="eye-icon"
                        onClick={togglePasswordVisibility}
                      >
                        <Icon
                          icon="octicon:eye-24"
                          color="gray"
                          width="18"
                          height="18"
                        />
                      </div>
                    </div>
                    <span style={{ color: "red" }} className="span">
                      {passwordError}
                    </span>
                  </div>
                  <div className="firstfield2">
                    <div className="label">
                      <label htmlFor="">Confirm Password</label>{" "}
                    </div>
                    <div className="inputfield">
                      <input
                        type={showPasswordconfirm ? "text" : "password"}
                        placeholder="Password"
                        value={confirmpassword}
                        onChange={(e) => {
                          setconfirmPassword(e.target.value);
                          setconfirmPasswordError(""); // Clear error when user starts typing
                        }}
                      />
                      <div
                        className="eye-icon"
                        onClick={togglePasswordVisibilityconfirm}
                      >
                        <Icon
                          icon="octicon:eye-24"
                          color="gray"
                          width="18"
                          height="18"
                        />
                      </div>
                    </div>
                  </div>
                  <span style={{ color: "red" }} className="span">
                    {confirmpasswordError}
                  </span>
                </div>

                <div className="card-bottom">
                  <div className="signin-btn">
                    <button onClick={handleSignIn}>Continue</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Resetpassword;
