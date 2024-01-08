import React, { useState } from "react";
import Logos from "../assets/images/Group 138.svg";
import { useNavigate } from "react-router-dom";

const Accountrecovery = () => {
  const navigate = useNavigate();
  // const [recoveryCode, setRecoveryCode] = useState("");

  // const handleChange = (event) => {
  //   setRecoveryCode(event.target.value);
  const [otpDigits, setOtpDigits] = useState(["", "", "", ""]);
  const handleChange = (index, event) => {
    const value = event.target.value;
    // Allow only numeric values
    if (/^[0-9]*$/.test(value)) {
      setOtpDigits((prevDigits) => {
        const newDigits = [...prevDigits];
        newDigits[index] = value;
        return newDigits;
      });
    }
  };

  const handleContinue = () => {
    const otpCode = otpDigits.join("");
    // Add logic to handle the OTP code (e.g., send it to a server for verification)
    console.log("OTP Code:", otpCode);
    // Add your navigation logic or further processing here
    navigate("/resetpassword");
  };

  return (
    <>
      <div className="accountRecovery">
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
                    <h6>Account Recovery</h6>
                  </div>
                  <div className="rightside">
                    <h6>
                      To help keep your account safe, we wants to <br /> make
                      sure that it’s really you trying to sign in
                    </h6>
                  </div>
                </div>
                <div className="accountRecovery-middle">
                  <div className="middleTop">
                    <h6>Enter 4 Digits Code</h6>
                  </div>
                  <div className="middletext">
                    <h6>
                      Enter the 4 digits code that you <br />
                      received on your email.
                    </h6>
                  </div>
                  <div className="middle-code">
                    {otpDigits.map((digit, index) => (
                      <div className="box1" key={index}>
                        <input
                          type="text"
                          value={digit}
                          onChange={(event) => handleChange(index, event)}
                          placeholder="0"
                          maxLength={1}
                        />
                      </div>
                    ))}

                    {/* <div className="box1">
                      <input
                        type="text"
                        value={recoveryCode}
                        onChange={handleChange}
                        placeholder=" 00"
                      />
                    </div>
                    <div className="box1">
                      <input
                        type="text"
                        value={recoveryCode}
                        onChange={handleChange}
                        placeholder=" 00"
                      />
                    </div>
                    <div className="box1">
                      <input
                        type="text"
                        value={recoveryCode}
                        onChange={handleChange}
                        placeholder="00"
                      />
                    </div>
                    <div className="box1">
                      <input
                        type="text"
                        value={recoveryCode}
                        onChange={handleChange}
                        placeholder=" 00"
                      />
                    </div> */}
                  </div>
                  <p>
                    Didn’t get a code? <span>Click to resend</span>
                  </p>
                </div>

                <div className="card-bottom">
                  <div className="signin-btn">
                    {/* <button onClick={handleContinue}>Continue</button> */}
                    <button>Continue</button>
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

export default Accountrecovery;
