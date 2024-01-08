import React, { useState } from "react";
import { Icon } from "@iconify/react";
import Logos from "../assets/images/Group 138.svg";
import { useNavigate } from "react-router-dom";
// import { useSelector, useDispatch } from 'react-redux'

// import { addUser } from "../features/user/userSlice";

const Signin = () => {
  //   const dispatch = useDispatch();
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [error, setError] = useState("");
  const [message, setMessage] = useState("");
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
  const myInlineStyles = {
    fontSize: "14px",
    fontStyle: "normal",
    fontWeight: 400,
    color: "red",
    fontFamily: "Arial",
  };
  const handleSignIn = async () => {
    if (!email) {
      setEmailError("Email is required");
      return;
    }
    // const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (!emailRegex.test(email)) {
      setEmailError("Invalid email format");
      return;
    }
    if (!password) {
      setPasswordError("Password is required");
      return;
    }
    // Validation
    if (!email || !password) {
      setError("Please enter both email and password.");
      return;
    }
    // Simulating login API call
    try {
      const response = await fetch(
        "https://playbook-nodejs-fc6df8f478f9.herokuapp.com/user",
        {
          method: "POST",
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
        // dispatch(addUser(email));
        navigate("/dashboardland");
      } else {
        // setError("Invalid credentials. Please try again.");
        alert("The credentials you entered are invalid");
      }
    } catch (error) {
      console.error(error);
      setError("An error occurred. Please try again later.");
    }
    console.log("The error is:", error);
  };
  console.log("The message is:", message);
  return (
    <>
      {" "}
      <div className="signinPage">
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
                  <div
                    className="leftside"
                    onClick={() => {
                      navigate("/resetpassword");
                    }}
                  >
                    <h6>Log In</h6>
                  </div>
                  {/* <div
                    className="rightside"
                    onClick={() => {
                      navigate("/signup");
                    }}
                  >
                    <h6>
                      No Account ? <br /> <span>Sign up</span>
                    </h6>
                  </div> */}
                </div>
                {/* <div className="cardSocialmedia">
                  <div className="googlebtn">
                    <button>
                      {" "}
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="26"
                        height="26"
                        viewBox="0 0 26 26"
                        fill="none"
                      >
                        <path
                          d="M24.3761 13.2525C24.3761 12.3173 24.2987 11.6348 24.1311 10.927H13.2333V15.1483H19.63C19.5011 16.1974 18.8047 17.7773 17.2571 18.8389L17.2354 18.9802L20.681 21.5962L20.9198 21.6195C23.1122 19.6352 24.3761 16.7156 24.3761 13.2525Z"
                          fill="#4285F4"
                        />
                        <path
                          d="M13.2326 24.3749C16.3664 24.3749 18.9973 23.3637 20.919 21.6196L17.2563 18.8389C16.2762 19.5088 14.9607 19.9764 13.2326 19.9764C10.1631 19.9764 7.55802 17.9922 6.62936 15.2495L6.49324 15.2608L2.91038 17.9782L2.86353 18.1059C4.77223 21.8217 8.69286 24.3749 13.2326 24.3749Z"
                          fill="#34A853"
                        />
                        <path
                          d="M6.63007 15.2496C6.38504 14.5418 6.24323 13.7834 6.24323 12.9999C6.24323 12.2162 6.38504 11.4579 6.61718 10.7501L6.61069 10.5994L2.98292 7.83838L2.86422 7.89371C2.07755 9.43567 1.62616 11.1672 1.62616 12.9999C1.62616 14.8325 2.07755 16.564 2.86422 18.1059L6.63007 15.2496Z"
                          fill="#FBBC05"
                        />
                        <path
                          d="M13.2326 6.0233C15.4122 6.0233 16.8824 6.94594 17.7207 7.71696L20.9965 4.5825C18.9846 2.74987 16.3665 1.625 13.2326 1.625C8.69289 1.625 4.77224 4.17804 2.86353 7.89384L6.61649 10.7503C7.55805 8.00763 10.1632 6.0233 13.2326 6.0233Z"
                          fill="#EB4335"
                        />
                      </svg>{" "}
                      Sign in with Google
                    </button>
                  </div>
                  <div className="facebook-btn">
                    <button>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="29"
                        height="29"
                        viewBox="0 0 29 29"
                        fill="none"
                      >
                        <ellipse
                          cx="14.5"
                          cy="13.3401"
                          rx="12.6875"
                          ry="12.6875"
                          fill="url(#paint0_linear_860_11143)"
                        />
                        <path
                          d="M19.2249 18.3802L19.7885 14.7992H16.2629V12.4763C16.2629 11.4964 16.7544 10.5407 18.3336 10.5407H19.9375V7.49196C19.9375 7.49196 18.4825 7.25 17.0921 7.25C14.1872 7.25 12.2903 8.96548 12.2903 12.0698V14.7992H9.0625V18.3802H12.2903V27.0375C12.9383 27.1367 13.6012 27.1875 14.2766 27.1875C14.9519 27.1875 15.6148 27.1367 16.2629 27.0375V18.3802H19.2249Z"
                          fill="#F7F7F7"
                        />
                        <defs>
                          <linearGradient
                            id="paint0_linear_860_11143"
                            x1="14.5"
                            y1="0.652588"
                            x2="14.5"
                            y2="25.9523"
                            gradientUnits="userSpaceOnUse"
                          >
                            <stop stop-color="#18ACFE" />
                            <stop offset="1" stop-color="#0163E0" />
                          </linearGradient>
                        </defs>
                      </svg>
                    </button>
                  </div>
                  <div className="facebook-btn">
                    <button>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="29"
                        height="28"
                        viewBox="0 0 29 28"
                        fill="none"
                      >
                        <path
                          d="M27.1875 14C27.1875 20.762 21.5098 26.25 14.5 26.25C7.49016 26.25 1.8125 20.762 1.8125 14C1.8125 7.23187 7.49016 1.75 14.5 1.75C21.5098 1.75 27.1875 7.23187 27.1875 14Z"
                          fill="#283544"
                        />
                        <path
                          d="M20.4469 10.9002C20.3777 10.9392 18.7295 11.7622 18.7295 13.5869C18.8072 15.6678 20.8094 16.3976 20.8437 16.3976C20.8094 16.4366 20.5415 17.3917 19.7478 18.393C19.1179 19.2554 18.4188 20.125 17.3572 20.125C16.3474 20.125 15.9849 19.5502 14.8197 19.5502C13.5684 19.5502 13.2143 20.125 12.2563 20.125C11.1947 20.125 10.4438 19.2088 9.77959 18.3545C8.91668 17.2363 8.18324 15.4815 8.15734 13.7965C8.13989 12.9037 8.33015 12.026 8.81311 11.2805C9.49477 10.2398 10.7117 9.53333 12.0407 9.51004C13.059 9.47915 13.9652 10.139 14.5867 10.139C15.1822 10.139 16.2956 9.51004 17.5553 9.51004C18.0991 9.51054 19.5491 9.65792 20.4469 10.9002ZM14.5005 9.33177C14.3193 8.5164 14.8197 7.70104 15.2858 7.18093C15.8813 6.55193 16.8219 6.125 17.633 6.125C17.6848 6.94037 17.3566 7.74003 16.7701 8.32244C16.2438 8.95144 15.3376 9.42496 14.5005 9.33177Z"
                          fill="white"
                        />
                      </svg>
                    </button>
                  </div>
                </div> */}
                <div className="card-field">
                  <div className="firstfield">
                    <div className="label">
                      <label htmlFor="">Enter your email address</label>{" "}
                    </div>
                    <div className="inputfield">
                      <input
                        type="email"
                        placeholder="Email address"
                        value={email}
                        onChange={(e) => {
                          setEmail(e.target.value);
                          setEmailError(""); // Clear error when user starts typing
                        }}
                      />
                    </div>
                    <span style={{ color: "red" }} className="span">
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
                    <span style={myInlineStyles}>{passwordError}</span>
                  </div>
                </div>
                <div className="forgetPassword">
                  <span>Forgot Password</span>
                </div>
                <div className="annotherAccount">
                  <p>
                    {" "}
                    Don’t have an Account? <span>Sign up</span>
                  </p>
                </div>
                <div className="line">
                  <div className="leftline">
                    <hr />
                  </div>
                  <div className="middletext">
                    <span>or</span>
                  </div>
                  <div className="leftline">
                    <hr />
                  </div>
                </div>
                <div className="cardSocialmedia">
                  <div className="googlebtn">
                    <button>
                      {" "}
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="26"
                        height="26"
                        viewBox="0 0 26 26"
                        fill="none"
                      >
                        <path
                          d="M24.3761 13.2525C24.3761 12.3173 24.2987 11.6348 24.1311 10.927H13.2333V15.1483H19.63C19.5011 16.1974 18.8047 17.7773 17.2571 18.8389L17.2354 18.9802L20.681 21.5962L20.9198 21.6195C23.1122 19.6352 24.3761 16.7156 24.3761 13.2525Z"
                          fill="#4285F4"
                        />
                        <path
                          d="M13.2326 24.3749C16.3664 24.3749 18.9973 23.3637 20.919 21.6196L17.2563 18.8389C16.2762 19.5088 14.9607 19.9764 13.2326 19.9764C10.1631 19.9764 7.55802 17.9922 6.62936 15.2495L6.49324 15.2608L2.91038 17.9782L2.86353 18.1059C4.77223 21.8217 8.69286 24.3749 13.2326 24.3749Z"
                          fill="#34A853"
                        />
                        <path
                          d="M6.63007 15.2496C6.38504 14.5418 6.24323 13.7834 6.24323 12.9999C6.24323 12.2162 6.38504 11.4579 6.61718 10.7501L6.61069 10.5994L2.98292 7.83838L2.86422 7.89371C2.07755 9.43567 1.62616 11.1672 1.62616 12.9999C1.62616 14.8325 2.07755 16.564 2.86422 18.1059L6.63007 15.2496Z"
                          fill="#FBBC05"
                        />
                        <path
                          d="M13.2326 6.0233C15.4122 6.0233 16.8824 6.94594 17.7207 7.71696L20.9965 4.5825C18.9846 2.74987 16.3665 1.625 13.2326 1.625C8.69289 1.625 4.77224 4.17804 2.86353 7.89384L6.61649 10.7503C7.55805 8.00763 10.1632 6.0233 13.2326 6.0233Z"
                          fill="#EB4335"
                        />
                      </svg>{" "}
                      Sign in with Google
                    </button>
                  </div>
                  <div className="facebook-btn">
                    <button>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="29"
                        height="29"
                        viewBox="0 0 29 29"
                        fill="none"
                      >
                        <ellipse
                          cx="14.5"
                          cy="13.3401"
                          rx="12.6875"
                          ry="12.6875"
                          fill="url(#paint0_linear_860_11143)"
                        />
                        <path
                          d="M19.2249 18.3802L19.7885 14.7992H16.2629V12.4763C16.2629 11.4964 16.7544 10.5407 18.3336 10.5407H19.9375V7.49196C19.9375 7.49196 18.4825 7.25 17.0921 7.25C14.1872 7.25 12.2903 8.96548 12.2903 12.0698V14.7992H9.0625V18.3802H12.2903V27.0375C12.9383 27.1367 13.6012 27.1875 14.2766 27.1875C14.9519 27.1875 15.6148 27.1367 16.2629 27.0375V18.3802H19.2249Z"
                          fill="#F7F7F7"
                        />
                        <defs>
                          <linearGradient
                            id="paint0_linear_860_11143"
                            x1="14.5"
                            y1="0.652588"
                            x2="14.5"
                            y2="25.9523"
                            gradientUnits="userSpaceOnUse"
                          >
                            <stop stop-color="#18ACFE" />
                            <stop offset="1" stop-color="#0163E0" />
                          </linearGradient>
                        </defs>
                      </svg>
                      Log In with Facebook
                    </button>
                  </div>
                </div>
                <div className="card-bottom">
                  <div className="signin-btn">
                    <button
                      // onClick={() => {
                      //   navigate("/plan");
                      // }}
                      onClick={handleSignIn}
                    >
                      Log In
                    </button>
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

export default Signin;
