import React from "react";
import Flagamerica from "../../../assets/images/america flag.svg";
import Flagfrench from "../../../assets/images/french.svg";
import Flagspanish from "../../../assets/images/spanish.svg";
import Flagportugese from "../../../assets/images/portugal-flag-icon.svg";
import Flaghindi from "../../../assets/images/india.svg";
import Flagjapanese from "../../../assets/images/japan-flag-png-xl 1.svg";
import Flagchinese from "../../../assets/images/CN-China-Flag-icon 1.svg";
import Flagkorean from "../../../assets/images/south-korea-flag-png-xl 1.svg";

const Language = () => {
  return (
    <>
      <div className="language">
        <div className="languageContent">
          <div className="mainlanguage">
            <div className="languageContainer">
              <div className="leftside">
                <span>English</span>
              </div>
              <div className="leftside">
                <img src={Flagamerica} alt="flag" />
                <div className="flagmark">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="28"
                  height="28"
                  viewBox="0 0 28 28"
                  fill="none"
                >
                  <path
                    d="M10.652 21.0292L4.00195 14.3792L5.66445 12.7167L10.652 17.7042L21.3561 7L23.0186 8.6625L10.652 21.0292Z"
                    fill="black"
                  />
                </svg> 
                </div>
                {/* */}
              </div>
            </div>
            <div className="languageContainer">
              <div className="leftside">
                <span>French</span>
              </div>
              <div className="leftside">
                <img src={Flagfrench} alt="flag" />
              </div>
            </div>
            <div className="languageContainer">
              <div className="leftside">
                <span>Spanish</span>
              </div>
              <div className="leftside">
                <img src={Flagspanish} alt="flag" />
              </div>
            </div>
            <div className="languageContainer">
              <div className="leftside">
                <span>Portuguese</span>
              </div>
              <div className="leftside">
                <img src={Flagportugese} alt="flag" />
              </div>
            </div>
            <div className="languageContainer">
              <div className="leftside">
                <span>Hindi</span>
              </div>
              <div className="leftside">
                <img src={Flaghindi} alt="flag" />
              </div>
            </div>
            <div className="languageContainer">
              <div className="leftside">
                <span>Japanese</span>
              </div>
              <div className="leftside">
                <img src={Flagjapanese} alt="flag" />
              </div>
            </div>
            <div className="languageContainer">
              <div className="leftside">
                <span>Chinese</span>
              </div>
              <div className="leftside">
                <img src={Flagchinese} alt="flag" />
              </div>
            </div>
            <div className="languageContainer">
              <div className="leftside">
                <span>Korean</span>
              </div>
              <div className="leftside">
                <img src={Flagkorean} alt="flag" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Language;
