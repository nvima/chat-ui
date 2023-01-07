import * as React from "react";
import { useState, useEffect } from "react";

export default function ChatMessages(props) {
  const [chatElementAdded, setChatElementAdded] = useState(() => false);

  function scrollToEnd(container) {
    const containerHeight = container.clientHeight;
    const contentHeight = container.scrollHeight;
    container.scrollTop = contentHeight - containerHeight;
  }

  useEffect(() => {
    const container = document.getElementById("chat-container");
    if (container && chatElementAdded) {
      scrollToEnd(container);
      setChatElementAdded(false);
    }
  });
  useEffect(() => {
    const container = document.getElementById("chat-container");
    if (container) setChatElementAdded(true);
  }, [props.chat.length]);

  return (
    <>
      <div
        id="chat-container"
        style={{
          height: "100%",
          overscrollBehaviorY: "contain",
          overflowY: "auto",
          overflowX: "hidden",
          backgroundColor: props.bgColorChat || "#EAEEF3",
          padding: "1.5rem",
        }}
      >
        {props.chat?.map((chatMessage, index) => (
          <div key={index}>
            {chatMessage.type == "person" ? (
              <>
                <div className="div">
                  <div
                    className="div-2"
                    style={{
                      backgroundColor: props.bgColorMessagePerson || "#025CDB",
                      color: props.textColorMessagePerson || "white",
                    }}
                  >
                    {chatMessage.timestamp ? (
                      <>
                        <div
                          className="div-3"
                          style={{
                            backgroundColor:
                              props.bgColorMessageTimestamp || "white",
                            color: props.textColorMessageTimestamp || "black",
                          }}
                        >
                          {chatMessage.timestamp}
                        </div>
                      </>
                    ) : null}

                    {chatMessage.message}
                  </div>
                </div>
              </>
            ) : null}

            {chatMessage.type == "chatbot" ? (
              <>
                <div className="div">
                  <div
                    className="div-4"
                    style={{
                      backgroundColor: props.bgColorMessageChatbot || "white",
                      color: props.textColorMessageChatbot || "black",
                    }}
                  >
                    {chatMessage.timestamp ? (
                      <>
                        <div
                          className="div-5"
                          style={{
                            backgroundColor:
                              props.bgColorMessageTimestamp || "white",
                            color: props.textColorMessageTimestamp || "black",
                          }}
                        >
                          {chatMessage.timestamp}
                        </div>
                      </>
                    ) : null}

                    {chatMessage.message}
                  </div>
                </div>
              </>
            ) : null}
          </div>
        ))}
      </div>
      <style jsx="true">{`
        .div {
          position: relative;
        }
        .div:hover div {
          display: block;
        }
        .div-2 {
          position: relative;
          border-radius: 0.75rem;
          padding: 1rem;
          width: fit-content;
          max-width: 80%;
          margin-bottom: 1rem;
          margin-left: auto;
        }
        .div-3 {
          position: absolute;
          width: max-content;
          display: none;
          bottom: 0px;
          border-radius: 0.25rem;
          left: 0px;
          transform: translateX(-50%) translateY(50%);
          box-shadow: rgba(0, 0, 0, 0.2) 0 0 2px;
          padding: 0.25rem;
          z-index: 9999;
        }
        .div-4 {
          position: relative;
          border-radius: 0.75rem;
          padding: 1rem;
          width: fit-content;
          max-width: 80%;
          margin-bottom: 1rem;
          margin-right: auto;
        }
        .div-5 {
          position: absolute;
          width: max-content;
          display: none;
          bottom: 0px;
          right: 0px;
          border-radius: 0.25rem;
          transform: translateX(50%) translateY(50%);
          box-shadow: rgba(0, 0, 0, 0.2) 0 0 2px;
          padding: 0.25rem;
          z-index: 9999;
        }
      `}</style>
    </>
  );
}
