import React, { useState, useEffect } from "react";
import { Icon } from "@iconify/react";
import "../style/dashboard.css";
import { Link } from "react-router-dom";
import Logo from "../assets/images/Group 138.svg";
import Profile from "../assets/images/profile.svg";
import Newchat from "../components/dashboards/newchat/newchat";

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
            <div className="profileSection">
              <img src={Profile} alt="profile" />
            </div>
          </div>
          {activeTab === "tab1" && <Newchat />} {/* profile */}
          {activeTab === "tab2" && <span>test2</span>} {/* orders */}
          {activeTab === "tab3" && <span>test3</span>} {/* My wallet */}
          {activeTab === "tab4" && <span>test4</span>} {/* wishlist */}
          {activeTab === "tab5" && <span>test5</span>} {/* referrals */}
        </div>
      </section>
    </>
  );
};

export default Dashboard;
