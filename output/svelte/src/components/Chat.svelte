<script>
  import ChatMessages from "./ChatMessages.svelte";
  import ChatInput from "./ChatInput.svelte";
  import ChatHeader from "./ChatHeader.svelte";
  import ChatIcon from "./ChatIcon.svelte";

  export let bgColorIcon;
  export let margin;
  export let fillColorIcon;
  export let width;
  export let height;
  export let boxShadow;
  export let headerHeight;
  export let bgColorHeader;
  export let textColorHeader;
  export let offline;
  export let colorOffline;
  export let colorOnline;
  export let bgColorChat;
  export let bgColorMessageChatbot;
  export let bgColorMessagePerson;
  export let bgColorMessageTimestamp;
  export let textColorMessageChatbot;
  export let textColorMessagePerson;
  export let textColorMessageTimestamp;
  export let chat;
  export let onSend;
  export let inputHeight;
  export let bgColorInput;
  export let textColorInput;
  export let inputPlaceholder;

  function mitosis_styling(node, vars) {
    Object.entries(vars || {}).forEach(([p, v]) => {
      if (p.startsWith("--")) {
        node.style.setProperty(p, v);
      } else {
        node.style[p] = v;
      }
    });
  }

  function stateCloseChat() {
    chatOpen = false;
  }
  function stateOpenChat() {
    chatOpen = true;
  }

  let chatOpen = false;
</script>

<div>
  <div
    use:mitosis_styling={{
      position: "fixed",
      bottom: "0px",
      right: "0px",
      overflow: "hidden",
      transform: chatOpen ? "translateY(100%)" : "translateY(0%)",
      transitionTimingFunction: "cubic-bezier(0.4, 0, 0.2, 1)",
      transitionDuration: "300ms",
      transitionDelay: chatOpen ? "0ms" : "300ms",
    }}
    on:click={(event) => {
      stateOpenChat();
    }}
  >
    <div
      use:mitosis_styling={{
        position: "flex",
        borderRadius: "50%",
        cursor: "pointer",
        backgroundColor: bgColorIcon || "#025CDB",
        margin: margin || "20px",
        padding: "0.75rem",
        fill: fillColorIcon || "white",
      }}
    >
      <ChatIcon />
    </div>
  </div>
  <div
    use:mitosis_styling={{
      position: "fixed",
      bottom: "0px",
      right: "0px",
      maxHeight: "100%",
      maxWidth: "100%",
      width: width || "410px",
      height: height || "700px",
      overflow: "hidden",
      transform: chatOpen ? "translateY(0%)" : "translateY(100%)",
      transitionTimingFunction: "cubic-bezier(0.4, 0, 0.2, 1)",
      transitionDuration: "300ms",
      transitionDelay: chatOpen ? "300ms" : "0ms",
    }}
  >
    <div
      use:mitosis_styling={{
        margin: margin || "20px",
        overflow: "hidden",
        borderRadius: "0.75rem",
        boxShadow: boxShadow || "rgba(0,0,0,0.4) 0 0 6px",
        maxHeight: margin
          ? "calc(100% - " + margin + " - " + margin + ")"
          : "calc(100% - 40px)",
        maxWidth: margin
          ? "calc(100% - " + margin + " - " + margin + ")"
          : "calc(100% - 40px)",
        width:
          width && margin
            ? "calc(" + width + " - " + margin + " - " + margin + ")"
            : width
            ? "calc(" + width + " - 40px)"
            : margin
            ? "calc(410px - " + margin + " - " + margin + ")"
            : "calc(410px - 40px)",
        height:
          height && margin
            ? "calc(" + height + " - " + margin + " - " + margin + ")"
            : height
            ? "calc(" + height + " - 40px)"
            : margin
            ? "calc(700px - " + margin + " - " + margin + ")"
            : "calc(700px - 40px)",
      }}
    >
      <div
        use:mitosis_styling={{
          display: "flex",
          flexDirection: "column",
          height: "100%",
        }}
      >
        <ChatHeader
          closeChat={stateCloseChat}
          {headerHeight}
          {bgColorHeader}
          {bgColorIcon}
          {textColorHeader}
          {fillColorIcon}
          {offline}
          {colorOffline}
          {colorOnline}
        />
        <ChatMessages
          {bgColorChat}
          {bgColorMessageChatbot}
          {bgColorMessagePerson}
          {bgColorMessageTimestamp}
          {textColorMessageChatbot}
          {textColorMessagePerson}
          {textColorMessageTimestamp}
          {chat}
        />
        <ChatInput
          handleSend={onSend}
          {inputHeight}
          {bgColorInput}
          {textColorInput}
          {inputPlaceholder}
        />
      </div>
    </div>
  </div>
</div>