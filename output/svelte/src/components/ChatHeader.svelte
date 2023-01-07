<script>
  import ChatIcon from "./ChatIcon.svelte";

  export let headerHeight;
  export let bgColorHeader;
  export let bgColorIcon;
  export let fillColorIcon;
  export let textColorHeader;
  export let offline;
  export let offlineColor;
  export let onlineColor;
  export let closeChat;

  function mitosis_styling(node, vars) {
    Object.entries(vars || {}).forEach(([p, v]) => {
      if (p.startsWith("--")) {
        node.style.setProperty(p, v);
      } else {
        node.style[p] = v;
      }
    });
  }
</script>

<div
  use:mitosis_styling={{
    display: "flex",
    height: headerHeight || "90px",
    flexShrink: "0",
    backgroundColor: bgColorHeader || "white",
  }}
>
  <div
    use:mitosis_styling={{
      position: "flex",
      borderRadius: "50%",
      backgroundColor: bgColorIcon || "#025CDB",
      marginTop: "auto",
      marginBottom: "auto",
      marginLeft: "1.25rem",
      marginRight: "1.25rem",
      padding: "0.75rem",
      fill: fillColorIcon || "white",
    }}
  >
    <ChatIcon />
  </div>
  <div
    use:mitosis_styling={{
      marginTop: "auto",
      marginBottom: "auto",
      width: "100%",
      color: textColorHeader || "black",
    }}
  >
    <div
      use:mitosis_styling={{
        fontWeight: "600",
        fontSize: "1.10rem",
        lineHeight: "1.5rem",
      }}
    >
      ChatBot
    </div>
    <div
      use:mitosis_styling={{
        display: "flex",
      }}
    >
      <div
        use:mitosis_styling={{
          borderRadius: "50%",
          height: "8px",
          width: "8px",
          margin: "auto 4px",
          backgroundColor: offline
            ? offlineColor || "red"
            : onlineColor || "green",
        }}
      />

      {#if offline}
        <div>Offline</div>
      {:else}
        <div>Online</div>
      {/if}
    </div>
  </div>

  <svg
    use:mitosis_styling={{
      height: "1.75rem",
      width: "1.75rem",
      flexShrink: "0",
      margin: "1rem",
      cursor: "pointer",
      color: textColorHeader || "black",
    }}
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    stroke="currentColor"
    stroke-width="2"
    on:click={(event) => {
      closeChat();
    }}
  >
    <path
      stroke-linecap="round"
      stroke-linejoin="round"
      d="M6 18L18 6M6 6l12 12"
    />
  </svg>
</div>