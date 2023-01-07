import { Show } from "solid-js";

import ChatIcon from "./ChatIcon.jsx";

function ChatHeader(props) {
  return (
    <div
      style={{
        display: "flex",
        height: props.headerHeight || "90px",
        "flex-shrink": "0",
        "background-color": props.bgColorHeader || "white",
      }}
    >
      <div
        style={{
          position: "flex",
          "border-radius": "50%",
          "background-color": props.bgColorIcon || "#025CDB",
          "margin-top": "auto",
          "margin-bottom": "auto",
          "margin-left": "1.25rem",
          "margin-right": "1.25rem",
          padding: "0.75rem",
          fill: props.fillColorIcon || "white",
        }}
      >
        <ChatIcon></ChatIcon>
      </div>
      <div
        style={{
          "margin-top": "auto",
          "margin-bottom": "auto",
          width: "100%",
          color: props.textColorHeader || "black",
        }}
      >
        <div
          style={{
            "font-weight": "600",
            "font-size": "1.10rem",
            "line-height": "1.5rem",
          }}
        >
          ChatBot
        </div>
        <div
          style={{
            display: "flex",
          }}
        >
          <div
            style={{
              "border-radius": "50%",
              height: "8px",
              width: "8px",
              margin: "auto 4px",
              "background-color": props.offline
                ? props.offlineColor || "red"
                : props.onlineColor || "green",
            }}
          ></div>
          <Show fallback={<div>Online</div>} when={props.offline}>
            <div>Offline</div>
          </Show>
        </div>
      </div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        stroke="currentColor"
        stroke-width="2"
        onClick={(event) => props.closeChat()}
        style={{
          height: "1.75rem",
          width: "1.75rem",
          "flex-shrink": "0",
          margin: "1rem",
          cursor: "pointer",
          color: props.textColorHeader || "black",
        }}
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M6 18L18 6M6 6l12 12"
        ></path>
      </svg>
    </div>
  );
}

export default ChatHeader;
