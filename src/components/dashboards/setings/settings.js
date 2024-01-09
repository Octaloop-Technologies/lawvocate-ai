import React, { useState } from "react";

import Dashboardplan from "./dashboardplan";
import Language from "./language";

const Settings = () => {
  const [activeSection, setActiveSection] = useState("subscription");

  const toggleContent = (section) => {
    setActiveSection(section);
  };
  return (
    <>
      <div className="settings">
        <div className="settingsContent">
          <div className="setingHeader">
            <div className="settinghContent">
              <div className="toggle-container">
                <button
                  className={`toggle-button ${
                    activeSection === "subscription" ? "active" : ""
                  }`}
                  onClick={() => toggleContent("subscription")}
                >
                  Subscription
                </button>
                <button
                  className={`toggle-button ${
                    activeSection === "customer-support" ? "active" : ""
                  }`}
                  onClick={() => toggleContent("customer-support")}
                >
                  Customer Support
                </button>
                <button
                  className={`toggle-button ${
                    activeSection === "language" ? "active" : ""
                  }`}
                  onClick={() => toggleContent("language")}
                >
                  Language
                </button>
              </div>

              <div className="span-container">
                {activeSection === "subscription" && <Dashboardplan />}
                {activeSection === "customer-support" && (
                  <span>Customer Support content goes here.</span>
                )}
                {activeSection === "language" && <Language />}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Settings;
