import React from "react";

const Newchat = () => {
  return (
    <>
      <div className="newchat">
        <div className="newchat-content">
          <div className="chatTitle">
            <div className="titleContent">
              <h6>hello, there</h6>
              <span>how can i help you with......</span>
            </div>
          </div>
          <div className="chatContent">
            <div className="userCommand">
              <div className="userQuestion">
                <span>Etiam</span>
              </div>
            </div>
            <div className="commandResponse">
              <div className="userQuestion">
                <span>
                  In hac habitasse platea dictumst. Maecenas cursus nunc nibh,
                  eu vehicula diam egestas quis. Etiam euismod elementum ipsum
                  in volutpat. Vestibulum eu blandit mauris. Fusce sit amet nisi
                  massa. Sed posuere mollis nibh, at feugiat nulla efficitur
                  quis. Curabitur imperdiet vestibulum nisi, sit amet rutrum
                  ligula dictum vel.
                </span>
              </div>
            </div>
            <div className="userCommand">
              <div className="userQuestion">
                <span>Etiam euismod elementum ipsumish </span>
              </div>
            </div>
            <div className="commandResponse">
              <div className="userQuestion">
                <span>
                  In hac habitasse platea dictumst. Maecenas cursus nunc nibh,
                  eu vehicula diam egestas quis. Etiam euismod elementum ipsum
                  in volutpat. Vestibulum eu blandit mauris. Fusce sit amet nisi
                  massa. Sed posuere mollis nibh, at feugiat nulla efficitur
                  quis.
                </span>
              </div>
            </div>
            <div className="userCommand">
              <div className="userQuestion">
                <span>estibulum eu blandit</span>
              </div>
            </div>
            <div className="commandResponse">
              <div className="userQuestion">
                <span>In hac habitasse platea dictumst. Maecenas cursus.</span>
              </div>
            </div>
          </div>
          <div className="userInput">
            <div className="inputContent">
              <div className="leftSide">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M10.5 22C8.96667 22 7.66667 21.4667 6.6 20.4C5.53333 19.3333 5 18.0333 5 16.5V6C5 4.9 5.39167 3.95833 6.175 3.175C6.95833 2.39167 7.9 2 9 2C10.1 2 11.0417 2.39167 11.825 3.175C12.6083 3.95833 13 4.9 13 6V15.5C13 16.2 12.7583 16.7917 12.275 17.275C11.7917 17.7583 11.2 18 10.5 18C9.8 18 9.20833 17.7583 8.725 17.275C8.24167 16.7917 8 16.2 8 15.5V6H9.5V15.5C9.5 15.7833 9.59583 16.0208 9.7875 16.2125C9.97917 16.4042 10.2167 16.5 10.5 16.5C10.7833 16.5 11.0208 16.4042 11.2125 16.2125C11.4042 16.0208 11.5 15.7833 11.5 15.5V6C11.5 5.3 11.2583 4.70833 10.775 4.225C10.2917 3.74167 9.7 3.5 9 3.5C8.3 3.5 7.70833 3.74167 7.225 4.225C6.74167 4.70833 6.5 5.3 6.5 6V16.5C6.5 17.6 6.89167 18.5417 7.675 19.325C8.45833 20.1083 9.4 20.5 10.5 20.5C11.6 20.5 12.5417 20.1083 13.325 19.325C14.1083 18.5417 14.5 17.6 14.5 16.5V6H16V16.5C16 18.0333 15.4667 19.3333 14.4 20.4C13.3333 21.4667 12.0333 22 10.5 22Z"
                    fill="black"
                  />
                </svg>
                <input type="text" placeholder="give Message to lawvocate aI" />
              </div>
              <div className="rightSide">
                <div className="rightside-icon">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="28"
                    height="28"
                    viewBox="0 0 28 28"
                    fill="none"
                  >
                    <path
                      d="M18.8708 15.1667H4.66663V12.8334H18.8708L12.3375 6.30002L14 4.66669L23.3333 14L14 23.3334L12.3375 21.7L18.8708 15.1667Z"
                      fill="#9D9D9D"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Newchat;
