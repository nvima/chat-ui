import { Show, For, on, createEffect, createSignal } from "solid-js";

import { css } from "solid-styled-components";

function ChatMessages(props) {
  const [chatElementAdded, setChatElementAdded] = createSignal(false);

  function scrollToEnd(container) {
    const containerHeight = container.clientHeight;
    const contentHeight = container.scrollHeight;
    container.scrollTop = contentHeight - containerHeight;
  }

  function onUpdateFn_1() {
    const container = document.getElementById("chat-container");
    if (container) setChatElementAdded(true);
  }
  createEffect(on(() => [props.chat.length], onUpdateFn_1));

  return (
    <div
      id="chat-container"
      style={{
        height: "100%",
        "overscroll-behavior-y": "contain",
        "overflow-y": "auto",
        "overflow-x": "hidden",
        "background-color": props.bgColorChat || "#EAEEF3",
        padding: "1.5rem",
      }}
    >
      <For each={props.chat}>
        {(chatMessage, _index) => {
          const index = _index();
          return (
            <div key={index}>
              <Show when={chatMessage.type == "person"}>
                <div
                  class={css({
                    position: "relative",
                    "&:hover div": {
                      display: "block",
                    },
                  })}
                >
                  <div
                    class={css({
                      position: "relative",
                      borderRadius: "0.75rem",
                      padding: "1rem",
                      width: "fit-content",
                      maxWidth: "80%",
                      marginBottom: "1rem",
                      marginLeft: "auto",
                    })}
                    style={{
                      "background-color":
                        props.bgColorMessagePerson || "#025CDB",
                      color: props.textColorMessagePerson || "white",
                    }}
                  >
                    <Show when={chatMessage.timestamp}>
                      <div
                        class={css({
                          position: "absolute",
                          width: "max-content",
                          display: "none",
                          bottom: "0px",
                          borderRadius: "0.25rem",
                          left: "0px",
                          transform: "translateX(-50%) translateY(50%)",
                          boxShadow: "rgba(0, 0, 0, 0.2) 0 0 2px",
                          padding: "0.25rem",
                          zIndex: "9999",
                        })}
                        style={{
                          "background-color":
                            props.bgColorMessageTimestamp || "white",
                          color: props.textColorMessageTimestamp || "black",
                        }}
                      >
                        {chatMessage.timestamp}
                      </div>
                    </Show>
                    {chatMessage.message}
                  </div>
                </div>
              </Show>
              <Show when={chatMessage.type == "chatbot"}>
                <div
                  class={css({
                    position: "relative",
                    "&:hover div": {
                      display: "block",
                    },
                  })}
                >
                  <div
                    class={css({
                      position: "relative",
                      borderRadius: "0.75rem",
                      padding: "1rem",
                      width: "fit-content",
                      maxWidth: "80%",
                      marginBottom: "1rem",
                      marginRight: "auto",
                    })}
                    style={{
                      "background-color":
                        props.bgColorMessageChatbot || "white",
                      color: props.textColorMessageChatbot || "black",
                    }}
                  >
                    <Show when={chatMessage.timestamp}>
                      <div
                        class={css({
                          position: "absolute",
                          width: "max-content",
                          display: "none",
                          bottom: "0px",
                          right: "0px",
                          borderRadius: "0.25rem",
                          transform: "translateX(50%) translateY(50%)",
                          boxShadow: "rgba(0, 0, 0, 0.2) 0 0 2px",
                          padding: "0.25rem",
                          zIndex: "9999",
                        })}
                        style={{
                          "background-color":
                            props.bgColorMessageTimestamp || "white",
                          color: props.textColorMessageTimestamp || "black",
                        }}
                      >
                        {chatMessage.timestamp}
                      </div>
                    </Show>
                    {chatMessage.message}
                  </div>
                </div>
              </Show>
            </div>
          );
        }}
      </For>
    </div>
  );
}

export default ChatMessages;
