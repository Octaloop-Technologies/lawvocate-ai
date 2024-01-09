import React, { useState, useEffect, useRef } from "react";
import { Icon } from "@iconify/react";
import "../style/dashboard.css";
import { Link } from "react-router-dom";
import Logo from "../assets/images/Group 138.svg";
import Profile from "../assets/images/profile.svg";
import Newchat from "../components/dashboards/newchat/newchat";
import Personalinfo from "../components/dashboards/personalinfo/personalinfo";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Settings from "../components/dashboards/setings/settings";

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState("tab1");
  const [mobileWidth, setMobileWidth] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  let arr = [];

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  useEffect(() => {
    const handleResize = () => {
      setMobileWidth(window.innerWidth);
    };

    handleResize(); // Set initial mobileWidth value
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    setIsVisible(mobileWidth && mobileWidth >= 800);
  }, [mobileWidth]);

  const handleDrawer = () => {
    setIsVisible(!isVisible);
  };
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);
  const toggleDropdown = () => {
    setIsOpen(!isOpen);
    setShowPersonalInfo(false);
  };
  const handlechilddropdownClick = (selectedOption) => {
    setIsOpen(false);
  };
  // Additional logic to handle span click if needed

  const [showPersonalInfo, setShowPersonalInfo] = useState(false);

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [show1, setShow1] = useState(false);

  const handleClose1 = () => setShow1(false);
  const handleShow1 = () => setShow1(true);
  return (
    <>
      {" "}
      <section className="dashboard container-fluid container-space ">
        <div className="menuDiv">
          {/* <IconButton onClick={handleDrawer}>
            <Icon
              className="menuIcon"
              icon="mingcute:menu-fill"
              color="black"
              width="20"
              height="20"
            />
          </IconButton> */}
        </div>

        <div className={isVisible ? "left trans-0" : "left trans-100"}>
          <div className="headingBack">
            {/* <p className="heading">Dashboard</p> */}
            <p className="heading">
              <img src={Logo} alt="" />
            </p>
            <div className="backBtn-div" onClick={handleDrawer}>
              {/* <IconButton>
                <Icon
                  icon="formkit:arrowleft"
                  color="black"
                  width="25"
                  height="25"
                />
              </IconButton> */}
            </div>
          </div>
          <div className="leftTopbar">
            <div className="topbarTitle">
              <button
                className={`${
                  activeTab === "tab1" ? "active-tab" : ""
                } new-chat`}
                onClick={() => handleTabChange("tab1")}
              >
                New chats
              </button>
            </div>

            <div className="topbarTitle">
              <div className="titleContent">
                <span className="Pinned">Pinned chats</span>
                <div className="chatButton">
                  <button className="chats">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                    >
                      <path
                        d="M5.25672 11.5793H11.7529V9.95526H5.25672V11.5793ZM5.25672 9.14323H15.001V7.51918H5.25672V9.14323ZM5.25672 6.70715H15.001V5.0831H5.25672V6.70715ZM2.00861 18.0755V3.45904C2.00861 3.01243 2.16763 2.6301 2.48567 2.31205C2.80372 1.99401 3.18605 1.83499 3.63266 1.83499H16.6251C17.0717 1.83499 17.454 1.99401 17.7721 2.31205C18.0901 2.6301 18.2492 3.01243 18.2492 3.45904V13.2034C18.2492 13.65 18.0901 14.0323 17.7721 14.3504C17.454 14.6684 17.0717 14.8274 16.6251 14.8274H5.25672L2.00861 18.0755ZM4.56649 13.2034H16.6251V3.45904H3.63266V14.1169L4.56649 13.2034Z"
                        fill="black"
                      />
                    </svg>
                    Give me so.... 10:30 PM
                  </button>
                </div>
              </div>
            </div>
            <div className="topbarTitle2">
              <div className="titleContent">
                <span className="Pinned">history</span>
                <span className="today">Today</span>
                <div className="chatButton">
                  <button className="chats">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                    >
                      <path
                        d="M5.25672 11.5793H11.7529V9.95526H5.25672V11.5793ZM5.25672 9.14323H15.001V7.51918H5.25672V9.14323ZM5.25672 6.70715H15.001V5.0831H5.25672V6.70715ZM2.00861 18.0755V3.45904C2.00861 3.01243 2.16763 2.6301 2.48567 2.31205C2.80372 1.99401 3.18605 1.83499 3.63266 1.83499H16.6251C17.0717 1.83499 17.454 1.99401 17.7721 2.31205C18.0901 2.6301 18.2492 3.01243 18.2492 3.45904V13.2034C18.2492 13.65 18.0901 14.0323 17.7721 14.3504C17.454 14.6684 17.0717 14.8274 16.6251 14.8274H5.25672L2.00861 18.0755ZM4.56649 13.2034H16.6251V3.45904H3.63266V14.1169L4.56649 13.2034Z"
                        fill="black"
                      />
                    </svg>
                    Give me so.... 10:30 PM
                  </button>
                </div>
                <span className="chathistory">Last 7 Days</span>
                <div className="chatButton2">
                  <button className="chats">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                    >
                      <path
                        d="M5.25672 11.5793H11.7529V9.95526H5.25672V11.5793ZM5.25672 9.14323H15.001V7.51918H5.25672V9.14323ZM5.25672 6.70715H15.001V5.0831H5.25672V6.70715ZM2.00861 18.0755V3.45904C2.00861 3.01243 2.16763 2.6301 2.48567 2.31205C2.80372 1.99401 3.18605 1.83499 3.63266 1.83499H16.6251C17.0717 1.83499 17.454 1.99401 17.7721 2.31205C18.0901 2.6301 18.2492 3.01243 18.2492 3.45904V13.2034C18.2492 13.65 18.0901 14.0323 17.7721 14.3504C17.454 14.6684 17.0717 14.8274 16.6251 14.8274H5.25672L2.00861 18.0755ZM4.56649 13.2034H16.6251V3.45904H3.63266V14.1169L4.56649 13.2034Z"
                        fill="black"
                      />
                    </svg>
                    Give me so.... 10:30 PM
                  </button>
                </div>

                <div className="chatButton2">
                  <button className="chats">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                    >
                      <path
                        d="M5.25672 11.5793H11.7529V9.95526H5.25672V11.5793ZM5.25672 9.14323H15.001V7.51918H5.25672V9.14323ZM5.25672 6.70715H15.001V5.0831H5.25672V6.70715ZM2.00861 18.0755V3.45904C2.00861 3.01243 2.16763 2.6301 2.48567 2.31205C2.80372 1.99401 3.18605 1.83499 3.63266 1.83499H16.6251C17.0717 1.83499 17.454 1.99401 17.7721 2.31205C18.0901 2.6301 18.2492 3.01243 18.2492 3.45904V13.2034C18.2492 13.65 18.0901 14.0323 17.7721 14.3504C17.454 14.6684 17.0717 14.8274 16.6251 14.8274H5.25672L2.00861 18.0755ZM4.56649 13.2034H16.6251V3.45904H3.63266V14.1169L4.56649 13.2034Z"
                        fill="black"
                      />
                    </svg>
                    Give me so.... 10:30 PM
                  </button>
                </div>
                <div className="chatButton2">
                  <button className="chats">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                    >
                      <path
                        d="M5.25672 11.5793H11.7529V9.95526H5.25672V11.5793ZM5.25672 9.14323H15.001V7.51918H5.25672V9.14323ZM5.25672 6.70715H15.001V5.0831H5.25672V6.70715ZM2.00861 18.0755V3.45904C2.00861 3.01243 2.16763 2.6301 2.48567 2.31205C2.80372 1.99401 3.18605 1.83499 3.63266 1.83499H16.6251C17.0717 1.83499 17.454 1.99401 17.7721 2.31205C18.0901 2.6301 18.2492 3.01243 18.2492 3.45904V13.2034C18.2492 13.65 18.0901 14.0323 17.7721 14.3504C17.454 14.6684 17.0717 14.8274 16.6251 14.8274H5.25672L2.00861 18.0755ZM4.56649 13.2034H16.6251V3.45904H3.63266V14.1169L4.56649 13.2034Z"
                        fill="black"
                      />
                    </svg>
                    Give me so.... 10:30 PM
                  </button>
                </div>
                <div className="chatButton2">
                  <button className="chats">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                    >
                      <path
                        d="M5.25672 11.5793H11.7529V9.95526H5.25672V11.5793ZM5.25672 9.14323H15.001V7.51918H5.25672V9.14323ZM5.25672 6.70715H15.001V5.0831H5.25672V6.70715ZM2.00861 18.0755V3.45904C2.00861 3.01243 2.16763 2.6301 2.48567 2.31205C2.80372 1.99401 3.18605 1.83499 3.63266 1.83499H16.6251C17.0717 1.83499 17.454 1.99401 17.7721 2.31205C18.0901 2.6301 18.2492 3.01243 18.2492 3.45904V13.2034C18.2492 13.65 18.0901 14.0323 17.7721 14.3504C17.454 14.6684 17.0717 14.8274 16.6251 14.8274H5.25672L2.00861 18.0755ZM4.56649 13.2034H16.6251V3.45904H3.63266V14.1169L4.56649 13.2034Z"
                        fill="black"
                      />
                    </svg>
                    Give me so.... 10:30 PM
                  </button>
                </div>
              </div>
            </div>
            <div className="bottombarTitle">
              <button
                className={`${
                  activeTab === "tab2" ? "active-tab" : ""
                } new-chat`}
                onClick={() => handleTabChange("tab2")}
                style={{
                  background:
                    activeTab === "tab2"
                      ? "var(--bg, linear-gradient(92deg, #4276D4 -15.2%, #2F4D8A 102.24%))"
                      : "white",
                  color: activeTab === "tab2" ? "white" : "black",
                }}
              >
                {" "}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M9.25817 21.7954L8.87835 18.7569C8.67262 18.6777 8.47875 18.5828 8.29676 18.472C8.11476 18.3612 7.93673 18.2425 7.76264 18.1159L4.93777 19.3029L2.32654 14.7925L4.7716 12.9409C4.75577 12.8302 4.74786 12.7233 4.74786 12.6205V11.9795C4.74786 11.8767 4.75577 11.7698 4.7716 11.6591L2.32654 9.80747L4.93777 5.29716L7.76264 6.48409C7.93673 6.35748 8.11872 6.23879 8.30863 6.12801C8.49854 6.01723 8.68844 5.92228 8.87835 5.84315L9.25817 2.80463H14.4806L14.8604 5.84315C15.0662 5.92228 15.26 6.01723 15.442 6.12801C15.624 6.23879 15.8021 6.35748 15.9761 6.48409L18.801 5.29716L21.4123 9.80747L18.9672 11.6591C18.983 11.7698 18.9909 11.8767 18.9909 11.9795V12.6205C18.9909 12.7233 18.9751 12.8302 18.9435 12.9409L21.3885 14.7925L18.7773 19.3029L15.9761 18.1159C15.8021 18.2425 15.6201 18.3612 15.4302 18.472C15.2403 18.5828 15.0504 18.6777 14.8604 18.7569L14.4806 21.7954H9.25817ZM10.9199 19.8963H12.7952L13.1275 17.38C13.6181 17.2534 14.0731 17.0675 14.4925 16.8222C14.9119 16.5769 15.2956 16.2802 15.6438 15.932L17.9939 16.9053L18.9197 15.2911L16.8782 13.7481C16.9573 13.5265 17.0127 13.2931 17.0444 13.0478C17.076 12.8025 17.0919 12.5532 17.0919 12.3C17.0919 12.0468 17.076 11.7975 17.0444 11.5522C17.0127 11.3069 16.9573 11.0735 16.8782 10.852L18.9197 9.30896L17.9939 7.69475L15.6438 8.69176C15.2956 8.32777 14.9119 8.02313 14.4925 7.77783C14.0731 7.53254 13.6181 7.34658 13.1275 7.21998L12.8189 4.7037H10.9436L10.6113 7.21998C10.1207 7.34658 9.66568 7.53254 9.2463 7.77783C8.82692 8.02313 8.44315 8.31986 8.09498 8.66803L5.74488 7.69475L4.81908 9.30896L6.86058 10.8282C6.78146 11.0656 6.72607 11.303 6.69441 11.5404C6.66276 11.7778 6.64694 12.031 6.64694 12.3C6.64694 12.5532 6.66276 12.7985 6.69441 13.0359C6.72607 13.2733 6.78146 13.5107 6.86058 13.7481L4.81908 15.2911L5.74488 16.9053L8.09498 15.9083C8.44315 16.2722 8.82692 16.5769 9.2463 16.8222C9.66568 17.0675 10.1207 17.2534 10.6113 17.38L10.9199 19.8963ZM11.9169 15.6234C12.8348 15.6234 13.6181 15.299 14.267 14.6501C14.9158 14.0013 15.2403 13.2179 15.2403 12.3C15.2403 11.3821 14.9158 10.5988 14.267 9.9499C13.6181 9.30105 12.8348 8.97662 11.9169 8.97662C10.9832 8.97662 10.1958 9.30105 9.5549 9.9499C8.91396 10.5988 8.59349 11.3821 8.59349 12.3C8.59349 13.2179 8.91396 14.0013 9.5549 14.6501C10.1958 15.299 10.9832 15.6234 11.9169 15.6234Z"
                    fill={activeTab === "tab2" ? "white" : "black"}
                  />
                </svg>{" "}
                Settings
              </button>
            </div>
          </div>
          {/* <ul className="sidebarPAdding">
            <li
              className={`${
                activeTab === "tab1"
                  ? "tab subHeading activetab"
                  : "tab subHeading"
              }`}
              onClick={() => handleTabChange("tab1")}
            >
              New chats
            </li>

            <li
              className={`${
                activeTab === "tab2"
                  ? "tab subHeading activetab"
                  : "tab subHeading"
              }`}
              onClick={() => handleTabChange("tab2")}
            >
              Settings
            </li>
          </ul> */}
        </div>

        <div className="right">
          <div className="rightHeader">
            <div className="profileSection" ref={dropdownRef}>
              <img src={Profile} alt="profile" onClick={toggleDropdown} />
              {isOpen && (
                <div className="dropdownContent">
                  <div
                    className="topSection"
                    onClick={handlechilddropdownClick}
                  >
                    <div className="topLeft" onClick={handleShow}>
                      <span className="Personal-info">Personal info</span>
                    </div>
                    <div className="topLeft" onClick={handleShow}>
                      <span>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="28"
                          height="28"
                          viewBox="0 0 28 28"
                          fill="none"
                        >
                          <path
                            d="M3.5 1.16669H17.983L24.5 7.68369V26.8334H3.5V1.16669ZM5.83333 3.50002V24.5H22.1667V8.64969L17.017 3.50002H5.83333ZM14 10.5C13.5359 10.5 13.0908 10.6844 12.7626 11.0126C12.4344 11.3408 12.25 11.7859 12.25 12.25C12.25 12.7142 12.4344 13.1593 12.7626 13.4875C13.0908 13.8156 13.5359 14 14 14C14.4641 14 14.9092 13.8156 15.2374 13.4875C15.5656 13.1593 15.75 12.7142 15.75 12.25C15.75 11.7859 15.5656 11.3408 15.2374 11.0126C14.9092 10.6844 14.4641 10.5 14 10.5ZM9.91667 12.25C9.91667 11.7138 10.0223 11.1828 10.2275 10.6874C10.4327 10.192 10.7335 9.74184 11.1126 9.36267C11.4918 8.9835 11.942 8.68272 12.4374 8.47751C12.9328 8.27231 13.4638 8.16669 14 8.16669C14.5362 8.16669 15.0672 8.27231 15.5626 8.47751C16.058 8.68272 16.5082 8.9835 16.8874 9.36267C17.2665 9.74184 17.5673 10.192 17.7725 10.6874C17.9777 11.1828 18.0833 11.7138 18.0833 12.25C18.0833 13.333 17.6531 14.3716 16.8874 15.1374C16.1216 15.9031 15.083 16.3334 14 16.3334C12.917 16.3334 11.8784 15.9031 11.1126 15.1374C10.3469 14.3716 9.91667 13.333 9.91667 12.25ZM7 22.1667C7 20.929 7.49166 19.742 8.36683 18.8669C9.242 17.9917 10.429 17.5 11.6667 17.5H16.3333C17.571 17.5 18.758 17.9917 19.6332 18.8669C20.5083 19.742 21 20.929 21 22.1667V23.3334H18.6667V22.1667C18.6667 21.5478 18.4208 20.9544 17.9832 20.5168C17.5457 20.0792 16.9522 19.8334 16.3333 19.8334H11.6667C11.0478 19.8334 10.4543 20.0792 10.0168 20.5168C9.57917 20.9544 9.33333 21.5478 9.33333 22.1667V23.3334H7V22.1667Z"
                            fill="black"
                          />
                        </svg>
                      </span>
                    </div>
                  </div>
                  <div
                    className="topSection"
                    onClick={handlechilddropdownClick}
                  >
                    <div className="topLeft">
                      <span className="Personal-info" onClick={handleShow1}>
                        Delete account
                      </span>
                    </div>
                    <div className="topLeft" onClick={handleShow1}>
                      <span>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="20"
                          height="22"
                          viewBox="0 0 20 22"
                          fill="none"
                        >
                          <path
                            d="M4.16675 21.5C3.52508 21.5 2.97578 21.2715 2.51883 20.8146C2.06189 20.3576 1.83341 19.8083 1.83341 19.1667V4H0.666748V1.66667H6.50008V0.5H13.5001V1.66667H19.3334V4H18.1667V19.1667C18.1667 19.8083 17.9383 20.3576 17.4813 20.8146C17.0244 21.2715 16.4751 21.5 15.8334 21.5H4.16675ZM15.8334 4H4.16675V19.1667H15.8334V4ZM6.50008 16.8333H8.83341V6.33333H6.50008V16.8333ZM11.1667 16.8333H13.5001V6.33333H11.1667V16.8333Z"
                            fill="black"
                          />
                        </svg>
                      </span>
                    </div>
                  </div>
                  <div
                    className="topSection"
                    onClick={handlechilddropdownClick}
                  >
                    <div className="topLeft">
                      <span className="Personal-info">Log out</span>
                    </div>
                    <div className="topLeft">
                      <span>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="29"
                          height="28"
                          viewBox="0 0 29 28"
                          fill="none"
                        >
                          <path
                            d="M14.1126 3.79169C14.3447 3.79169 14.5673 3.88387 14.7313 4.04797C14.8954 4.21206 14.9876 4.43462 14.9876 4.66669C14.9876 4.89875 14.8954 5.12131 14.7313 5.28541C14.5673 5.4495 14.3447 5.54169 14.1126 5.54169C11.8693 5.54169 9.71793 6.43283 8.13169 8.01908C6.54544 9.60532 5.6543 11.7567 5.6543 14C5.6543 16.2433 6.54544 18.3947 8.13169 19.981C9.71793 21.5672 11.8693 22.4584 14.1126 22.4584C14.3447 22.4584 14.5673 22.5505 14.7313 22.7146C14.8954 22.8787 14.9876 23.1013 14.9876 23.3334C14.9876 23.5654 14.8954 23.788 14.7313 23.9521C14.5673 24.1162 14.3447 24.2084 14.1126 24.2084C11.4052 24.2084 8.80868 23.1328 6.89425 21.2184C4.97981 19.304 3.9043 16.7074 3.9043 14C3.9043 11.2926 4.97981 8.69607 6.89425 6.78164C8.80868 4.8672 11.4052 3.79169 14.1126 3.79169Z"
                            fill="black"
                          />
                          <path
                            d="M19.3276 11.1184C19.1731 10.9525 19.0889 10.7331 19.0929 10.5064C19.0969 10.2797 19.1888 10.0634 19.3491 9.90313C19.5094 9.74282 19.7257 9.65099 19.9524 9.64699C20.179 9.64299 20.3984 9.72713 20.5643 9.88169L24.0643 13.3817C24.2282 13.5458 24.3202 13.7681 24.3202 14C24.3202 14.2319 24.2282 14.4543 24.0643 14.6184L20.5643 18.1184C20.4842 18.2043 20.3876 18.2733 20.2803 18.3211C20.1729 18.3689 20.0571 18.3946 19.9396 18.3967C19.8221 18.3988 19.7054 18.3772 19.5964 18.3332C19.4875 18.2892 19.3885 18.2237 19.3054 18.1406C19.2223 18.0575 19.1568 17.9585 19.1128 17.8496C19.0688 17.7406 19.0472 17.6239 19.0493 17.5064C19.0513 17.3889 19.0771 17.2731 19.1249 17.1657C19.1727 17.0584 19.2417 16.9618 19.3276 16.8817L21.3343 14.875H11.7793C11.5472 14.875 11.3247 14.7828 11.1606 14.6187C10.9965 14.4546 10.9043 14.2321 10.9043 14C10.9043 13.768 10.9965 13.5454 11.1606 13.3813C11.3247 13.2172 11.5472 13.125 11.7793 13.125H21.3343L19.3276 11.1184Z"
                            fill="black"
                          />
                        </svg>
                      </span>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
          {activeTab === "tab1" && <Newchat />} {/* profile */}
          {activeTab === "tab2" && <Settings />} {/* orders */}
          {activeTab === "tab3" && <span>test3</span>} {/* My wallet */}
          {activeTab === "tab4" && <span>test4</span>} {/* wishlist */}
          {activeTab === "tab5" && <span>test5</span>} {/* referrals */}
        </div>
      </section>
      <Modal show={show} onHide={handleClose} size="lg" centered>
        <Modal.Body className="modalMainbody">
          <div className="modalBody">
            <div className="modalContent">
              <div className="modalTitle">
                <span className="profileCustomization">
                  User profile customization
                </span>
              </div>
              <div className="modalSubheading">
                <span className="belowFields">Fill the below fields</span>
              </div>
              <div className="modalFields">
                <div className="leftside">
                  <input type="text" placeholder="Name" className="nameInput" />
                </div>
                <div className="leftside">
                  <input
                    type="text"
                    placeholder="Occupation"
                    className="occupationInput"
                  />
                </div>
              </div>
              <div className="modalFields">
                <div className="leftside">
                  <input
                    type="text"
                    placeholder="Date of  birth"
                    className="nameInput"
                  />
                </div>
                <div className="leftside">
                  <input
                    type="text"
                    placeholder="Location"
                    className="occupationInput"
                  />
                </div>
              </div>
              <div className="modalFields">
                <div className="leftside">
                  <input
                    type="text"
                    placeholder="Position"
                    className="nameInput"
                  />
                </div>
                <div className="leftside">
                  <input
                    type="text"
                    placeholder="Phone Number"
                    className="occupationInput"
                  />
                </div>
              </div>
              <div className="modalFields">
                <div className="leftside">
                  <input
                    type="text"
                    placeholder="Address"
                    className="nameInput"
                  />
                </div>
              </div>
              <div className="modalline">
                <div className="leftsideline">
                  <hr className="linehr" />
                </div>
                <div className="middlesidetext">
                  <span className="And">And</span>
                </div>
                <div className="leftsideline">
                  <hr className="linehr" />
                </div>
              </div>
              <div className="modalBottom">
                <div className="bottomTitle">
                  <span className="bottommQuestion">
                    What would you like Lawvocate.ai to know about yourself?
                  </span>
                </div>
                <div className="modalFieldss">
                  <div className="leftside">
                    <input
                      type="text"
                      placeholder="Type here"
                      className="nameInput"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Modal.Body>
      </Modal>
      <Modal show={show1} onHide={handleClose1} centered>
        <Modal.Body className="secondmaodalBody">
          <div className="secondmodal">
            <div className="secondmodalContent">
              <h6 className="deleteAccount"> Delete Account</h6>
              <span className="confirmdelete">
                Are you sure you want to delete your account?
              </span>
            </div>
            <div className="secondmodalFotter">
              <div className="footerLeftside" onClick={handleClose1}>
                <span className="cancel">Cancel</span>
              </div>
              <div className="footerLeftside" onClick={handleClose1}>
                <span className="delete">Delete</span>
              </div>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default Dashboard;
