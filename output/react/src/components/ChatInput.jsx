import * as React from "react";
import { useState } from "react";

export default function ChatInput(props) {
  const [inputField, setInputField] = useState(() => "");

  function sendMessage(e) {
    e.preventDefault();
    if (props.onSend) props.onSend(inputField);
    setInputField("");
  }

  return (
    <>
      <form
        onSubmit={(event) => sendMessage}
        style={{
          display: "flex",
          height: props.inputHeight || "60px",
          backgroundColor: props.bgColorInput || "white",
          color: props.textColorInput || "black",
        }}
      >
        <input
          className="input"
          placeholder={props.inputPlaceholder || "Type your message here"}
          onInput={(event) => setInputField(event.target.value)}
          value={inputField}
          style={{
            borderWidth: "0px",
            backgroundColor: props.bgColorInput || "white",
            color: props.textColorInput || "black",
            width: "100%",
            marginLeft: "1rem",
            fontSize: "1rem",
          }}
        />

        <button
          style={{
            backgroundColor: props.bgColorInput || "white",
            flexShrink: "0",
            all: "unset",
            cursor: "pointer",
            margin: "auto 1rem",
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="svg"
            strokeWidth={1.5}
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5"
            />
          </svg>
        </button>
      </form>
      <style jsx>{`
        .input {
        }
        .input:focus {
          outline: none;
        }
        .svg {
          height: 1.5rem;
          width: 1.5rkm;
        }
      `}</style>
    </>
  );
}
