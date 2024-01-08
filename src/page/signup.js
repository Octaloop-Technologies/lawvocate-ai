import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Logoss from "../assets/images/Group 138.svg";
import Input from "../components/shared/input";
import { Icon } from "@iconify/react";
import Logos from "../assets/images/Group 138.svg";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [confirmpassword, setconfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [message, setMessage] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showPassword1, setShowPassword1] = useState(false);
  const [passwordError, setPasswordError] = useState("");
  const [nameError, setnameError] = useState("");
  const [emailError, setemailError] = useState("");
  const [confirmpasswordError, setconfirmPasswordError] = useState("");
  const navigate = useNavigate();
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
  const togglePasswordVisibility1 = () => {
    setShowPassword1(!showPassword1);
  };
  const handleSignUp = async () => {
    setnameError("");
    setemailError("");
    setPasswordError("");
    setconfirmPasswordError("");
    setMessage("");
    // Validation
    if (!name) {
      setnameError(" Name is required");
      return;
    }

    if (!email) {
      setemailError("Email is required");
      return;
    }

    // Email validation
    // const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    if (!emailRegex.test(email)) {
      setemailError("Invalid email format");
      return;
    }

    if (!password) {
      setPasswordError("Password is required");
      return;
    }

    if (!confirmpassword) {
      setconfirmPasswordError("Confirm Password is required");
      return;
    }

    // Password match validation
    if (password !== confirmpassword) {
      setconfirmPasswordError("Passwords do not match");
      return;
    }
    // Simulating login API call
    try {
      const response = await fetch(
        "https://playbook-nodejs-fc6df8f478f9.herokuapp.com/user",
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email, password }),
        }
      );
      const data = await response.json();
      setMessage(data.message);
      //console.log("The response is:",data)
      if (response.ok) {
        //const data = await response.json();
        // Assuming the API returns a token
        const token = data.token;
        //console.log("The token is:",token)
        // Store the token or perform other actions based on your needs
        navigate("/");
      } else {
        // setError("Invalid credentials. Please try again.");
        alert("Error occured");
      }
    } catch (error) {
      console.error(error);
      setError("An error occurred. Please try again later.");
      alert("Error occured");
    }
    console.log("The error is:", error);
  };
  console.log("The error is:", error);

  const myInlineStyles = {
    fontSize: "14px",
    fontStyle: "normal",
    fontWeight: 400,
    color: "red",
    fontFamily: "Arial",
  };
  return (
    <>
      <div className="signupPage">
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
                    <h6>Sign up</h6>
                  </div>
                </div>

                <div className="card-field">
                  <div className="firstfield-signup">
                    <div className="label">
                      <label htmlFor="">Enter your Name</label>{" "}
                    </div>
                    <div className="inputfield">
                      <input
                        type="text"
                        placeholder="Name"
                        value={name}
                        onChange={(e) => {
                          setName(e.target.value);
                          setMessage(""); // Clear error when user starts typing
                        }}
                      />
                    </div>
                    <span style={myInlineStyles} className="span">
                      {nameError}
                    </span>
                  </div>
                  <div className="firstfield">
                    {/* <div className="label">
                      <label htmlFor="">Enter your Owner’s Name</label>{" "}
                    </div> */}
                    <div className="label">
                      <label htmlFor="">Enter your Email</label>{" "}
                    </div>
                    <div className="inputfield">
                      <input
                        type="text"
                        placeholder="Email"
                        onChange={(e) => {
                          setEmail(e.target.value);
                          setMessage("");
                        }}
                      />
                    </div>
                    <span style={myInlineStyles} className="span">
                      {emailError}
                    </span>
                  </div>
                  <div className="firstfield">
                    <div className="label">
                      <label htmlFor="">Enter your Password</label>{" "}
                    </div>
                    <div className="inputfield">
                      <input
                        type={showPassword ? "text" : "password"}
                        placeholder="Password"
                        onChange={(e) => {
                          setPassword(e.target.value);
                          setMessage("");
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
                    <span style={myInlineStyles} className="span">
                      {passwordError}
                    </span>
                  </div>
                  <div className="firstfield">
                    <div className="label">
                      <label htmlFor="">Confirm your Password</label>{" "}
                    </div>
                    <div className="inputfield">
                      <input
                        type={showPassword1 ? "text" : "password"}
                        placeholder="Password"
                        onChange={(e) => {
                          setconfirmPassword(e.target.value);
                          setMessage("");
                        }}
                      />
                      <div
                        className="eye-icon"
                        onClick={togglePasswordVisibility1}
                      >
                        <Icon
                          icon="octicon:eye-24"
                          color="gray"
                          width="18"
                          height="18"
                        />
                      </div>
                    </div>
                    <span style={myInlineStyles} className="span">
                      {confirmpasswordError}
                    </span>
                  </div>
                </div>
                <div className="card-bottom">
                  <div className="bottom-title">
                    <p>
                      Already have an Account? <span>Forgot Password</span>
                    </p>
                  </div>
                  <div className="signin-btn">
                    <button onClick={handleSignUp}>Sign up</button>
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

export default Signup;
