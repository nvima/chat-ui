import { createSignal } from "solid-js";

import ChatMessages from "./ChatMessages.jsx";
import ChatInput from "./ChatInput.jsx";
import ChatHeader from "./ChatHeader.jsx";
import ChatIcon from "./ChatIcon.jsx";

function Chat(props) {
  const [chatOpen, setChatOpen] = createSignal(false);

  function stateCloseChat() {
    setChatOpen(false);
  }

  function stateOpenChat() {
    setChatOpen(true);
  }

  return (
    <div>
      <div
        onClick={(event) => stateOpenChat()}
        style={{
          position: "fixed",
          bottom: "0px",
          right: "0px",
          overflow: "hidden",
          transform: chatOpen() ? "translateY(100%)" : "translateY(0%)",
          "transition-timing-function": "cubic-bezier(0.4, 0, 0.2, 1)",
          "transition-duration": "300ms",
          "transition-delay": chatOpen() ? "0ms" : "300ms",
        }}
      >
        <div
          style={{
            position: "flex",
            "border-radius": "50%",
            cursor: "pointer",
            "background-color": props.bgColorIcon || "#025CDB",
            margin: props.margin || "20px",
            padding: "0.75rem",
            fill: props.fillColorIcon || "white",
          }}
        >
          <ChatIcon></ChatIcon>
        </div>
      </div>
      <div
        style={{
          position: "fixed",
          bottom: "0px",
          right: "0px",
          "max-height": "100%",
          "max-width": "100%",
          width: props.width || "410px",
          height: props.height || "700px",
          overflow: "hidden",
          transform: chatOpen() ? "translateY(0%)" : "translateY(100%)",
          "transition-timing-function": "cubic-bezier(0.4, 0, 0.2, 1)",
          "transition-duration": "300ms",
          "transition-delay": chatOpen() ? "300ms" : "0ms",
        }}
      >
        <div
          style={{
            margin: props.margin || "20px",
            overflow: "hidden",
            "border-radius": "0.75rem",
            "box-shadow": props.boxShadow || "rgba(0,0,0,0.4) 0 0 6px",
            "max-height": props.margin
              ? "calc(100% - " + props.margin + " - " + props.margin + ")"
              : "calc(100% - 40px)",
            "max-width": props.margin
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
              "flex-direction": "column",
              height: "100%",
            }}
          >
            <ChatHeader
              closeChat={stateCloseChat}
              headerHeight={props.headerHeight}
              bgColorHeader={props.bgColorHeader}
              bgColorIcon={props.bgColorIcon}
              textColorHeader={props.textColorHeader}
              fillColorIcon={props.fillColorIcon}
              offline={props.offline}
              colorOffline={props.colorOffline}
              colorOnline={props.colorOnline}
            ></ChatHeader>
            <ChatMessages
              bgColorChat={props.bgColorChat}
              bgColorMessageChatbot={props.bgColorMessageChatbot}
              bgColorMessagePerson={props.bgColorMessagePerson}
              bgColorMessageTimestamp={props.bgColorMessageTimestamp}
              textColorMessageChatbot={props.textColorMessageChatbot}
              textColorMessagePerson={props.textColorMessagePerson}
              textColorMessageTimestamp={props.textColorMessageTimestamp}
              chat={props.chat}
            ></ChatMessages>
            <ChatInput
              handleSend={props.onSend}
              inputHeight={props.inputHeight}
              bgColorInput={props.bgColorInput}
              textColorInput={props.textColorInput}
              inputPlaceholder={props.inputPlaceholder}
            ></ChatInput>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Chat;
