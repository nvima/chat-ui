import * as React from "react";
import { useState } from "react";
import ChatMessages from "./ChatMessages.jsx";
import ChatInput from "./ChatInput.jsx";
import ChatHeader from "./ChatHeader.jsx";
import ChatIcon from "./ChatIcon.jsx";

export default function Chat(props) {
  const [chatOpen, setChatOpen] = useState(() => false);

  function closeChat() {
    setChatOpen(false);
  }

  function openChat() {
    setChatOpen(true);
  }

  return (
    <div>
      <div
        onClick={(event) => openChat()}
        style={{
          position: "fixed",
          bottom: "0px",
          right: "0px",
          overflow: "hidden",
          transform: chatOpen ? "translateY(100%)" : "translateY(0%)",
          transitionTimingFunction: "cubic-bezier(0.4, 0, 0.2, 1)",
          transitionDuration: "300ms",
          transitionDelay: chatOpen ? "0ms" : "300ms",
        }}
      >
        <div
          style={{
            position: "flex",
            borderRadius: "50%",
            cursor: "pointer",
            backgroundColor: props.bgColorIcon || "#025CDB",
            margin: props.margin || "20px",
            padding: "0.75rem",
            fill: props.fillColorIcon || "white",
          }}
        >
          <ChatIcon />
        </div>
      </div>

      <div
        style={{
          position: "fixed",
          bottom: "0px",
          right: "0px",
          maxHeight: "100%",
          maxWidth: "100%",
          width: props.width || "410px",
          height: props.height || "700px",
          overflow: "hidden",
          transform: chatOpen ? "translateY(0%)" : "translateY(100%)",
          transitionTimingFunction: "cubic-bezier(0.4, 0, 0.2, 1)",
          transitionDuration: "300ms",
          transitionDelay: chatOpen ? "300ms" : "0ms",
        }}
      >
        <div
          style={{
            margin: props.margin || "20px",
            overflow: "hidden",
            borderRadius: "0.75rem",
            boxShadow: props.boxShadow || "rgba(0,0,0,0.4) 0 0 6px",
            maxHeight: props.margin
              ? "calc(100% - " + props.margin + " - " + props.margin + ")"
              : "calc(100% - 40px)",
            maxWidth: props.margin
              ? "calc(100% - " + props.margin + " - " + props.margin + ")"
              : "calc(100% - 40px)",
            width:
              props.width && props.margin
                ? "calc(" +
                  props.width +
                  " - " +
                  props.margin +
                  " - " +
                  props.margin +
                  ")"
                : props.width
                ? "calc(" + props.width + " - 40px)"
                : props.margin
                ? "calc(410px - " + props.margin + " - " + props.margin + ")"
                : "calc(410px - 40px)",
            height:
              props.height && props.margin
                ? "calc(" +
                  props.height +
                  " - " +
                  props.margin +
                  " - " +
                  props.margin +
                  ")"
                : props.height
                ? "calc(" + props.height + " - 40px)"
                : props.margin
                ? "calc(700px - " + props.margin + " - " + props.margin + ")"
                : "calc(700px - 40px)",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              height: "100%",
            }}
          >
            <ChatHeader
              headerHeight={props.headerHeight}
              bgColorHeader={props.bgColorHeader}
              bgColorIcon={props.bgColorIcon}
              textColorHeader={props.textColorHeader}
              fillColorIcon={props.fillColorIcon}
              offline={props.offline}
              offlineColor={props.offlineColor}
              onlineColor={(event) => props.onlineColor}
              closeChat={closeChat}
            />

            <ChatMessages
              bgColorChat={props.bgColorChat}
              bgColorMessageChatbot={props.bgColorMessageChatbot}
              bgColorMessagePerson={props.bgColorMessagePerson}
              bgColorMessageTimestamp={props.bgColorMessageTimestamp}
              textColorMessageChatbot={props.textColorMessageChatbot}
              textColorMessagePerson={props.textColorMessagePerson}
              textColorMessageTimestamp={props.textColorMessageTimestamp}
              chat={props.chat}
            />

            <ChatInput
              onSend={(event) => props.onSend}
              inputHeight={props.inputHeight}
              bgColorInput={props.bgColorInput}
              textColorInput={props.textColorInput}
              inputPlaceholder={props.inputPlaceholder}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
