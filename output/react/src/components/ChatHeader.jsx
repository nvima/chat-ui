import * as React from "react";
import ChatIcon from "./ChatIcon.jsx";

export default function ChatHeader(props) {
  return (
    <div
      style={{
        display: "flex",
        height: props.headerHeight || "90px",
        flexShrink: "0",
        backgroundColor: props.bgColorHeader || "white",
      }}
    >
      <div
        style={{
          position: "flex",
          borderRadius: "50%",
          backgroundColor: props.bgColorIcon || "#025CDB",
          marginTop: "auto",
          marginBottom: "auto",
          marginLeft: "1.25rem",
          marginRight: "1.25rem",
          padding: "0.75rem",
          fill: props.fillColorIcon || "white",
        }}
      >
        <ChatIcon />
      </div>

      <div
        style={{
          marginTop: "auto",
          marginBottom: "auto",
          width: "100%",
          color: props.textColorHeader || "black",
        }}
      >
        <div
          style={{
            fontWeight: "600",
            fontSize: "1.10rem",
            lineHeight: "1.5rem",
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
              borderRadius: "50%",
              height: "8px",
              width: "8px",
              margin: "auto 4px",
              backgroundColor: props.offline
                ? props.offlineColor || "red"
                : props.onlineColor || "green",
            }}
          />

          {props.offline ? (
            <>
              <div>Offline</div>
            </>
          ) : (
            <div>Online</div>
          )}
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
          flexShrink: "0",
          margin: "1rem",
          cursor: "pointer",
          color: props.textColorHeader || "black",
        }}
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M6 18L18 6M6 6l12 12"
        />
      </svg>
    </div>
  );
}
