<script>
  import { afterUpdate } from "svelte";

  export let bgColorChat;
  export let chat;
  export let bgColorMessagePerson;
  export let textColorMessagePerson;
  export let bgColorMessageTimestamp;
  export let textColorMessageTimestamp;
  export let bgColorMessageChatbot;
  export let textColorMessageChatbot;

  function mitosis_styling(node, vars) {
    Object.entries(vars || {}).forEach(([p, v]) => {
      if (p.startsWith("--")) {
        node.style.setProperty(p, v);
      } else {
        node.style[p] = v;
      }
    });
  }

  function scrollToEnd(container) {
    const containerHeight = container.clientHeight;
    const contentHeight = container.scrollHeight;
    container.scrollTop = contentHeight - containerHeight;
  }

  let chatElementAdded = false;

  afterUpdate(() => {
    const container = document.getElementById("chat-container");
    if (container && chatElementAdded) {
      scrollToEnd(container);
      chatElementAdded = false;
    }
  });
  function onUpdateFn_1() {
    const container = document.getElementById("chat-container");
    if (container) chatElementAdded = true;
  }
  $: onUpdateFn_1(...[chat.length]);
</script>

<div
  use:mitosis_styling={{
    height: "100%",
    overscrollBehaviorY: "contain",
    overflowY: "auto",
    overflowX: "hidden",
    backgroundColor: bgColorChat || "#EAEEF3",
    padding: "1.5rem",
  }}
  id="chat-container"
>
  {#each chat as chatMessage, _index}
    <div>
      {#if chatMessage.type == "person"}
        <div class="div">
          <div
            use:mitosis_styling={{
              backgroundColor: bgColorMessagePerson || "#025CDB",
              color: textColorMessagePerson || "white",
            }}
            class="div-2"
          >
            {#if chatMessage.timestamp}
              <div
                use:mitosis_styling={{
                  backgroundColor: bgColorMessageTimestamp || "white",
                  color: textColorMessageTimestamp || "black",
                }}
                class="div-3"
              >
                {chatMessage.timestamp}
              </div>
            {/if}

            {chatMessage.message}
          </div>
        </div>
      {/if}

      {#if chatMessage.type == "chatbot"}
        <div class="div">
          <div
            use:mitosis_styling={{
              backgroundColor: bgColorMessageChatbot || "white",
              color: textColorMessageChatbot || "black",
            }}
            class="div-4"
          >
            {#if chatMessage.timestamp}
              <div
                use:mitosis_styling={{
                  backgroundColor: bgColorMessageTimestamp || "white",
                  color: textColorMessageTimestamp || "black",
                }}
                class="div-5"
              >
                {chatMessage.timestamp}
              </div>
            {/if}

            {chatMessage.message}
          </div>
        </div>
      {/if}
    </div>
  {/each}
</div>

<style>
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
</style>