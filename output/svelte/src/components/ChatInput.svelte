<script>
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

  function sendMessage(e) {
    e.preventDefault();
    if (onSend) onSend(inputField);
    inputField = "";
  }

  let inputField = "";
</script>

<form
  use:mitosis_styling={{
    display: "flex",
    height: inputHeight || "60px",
    backgroundColor: bgColorInput || "white",
    color: textColorInput || "black",
  }}
  on:submit={(event) => {
    sendMessage;
  }}
>
  <input
    use:mitosis_styling={{
      borderWidth: "0px",
      backgroundColor: bgColorInput || "white",
      color: textColorInput || "black",
      width: "100%",
      marginLeft: "1rem",
      fontSize: "1rem",
    }}
    class="input"
    placeholder={inputPlaceholder || "Type your message here"}
    on:input={(event) => {
      inputField = event.target.value;
    }}
    value={inputField}
  />
  <button
    use:mitosis_styling={{
      backgroundColor: bgColorInput || "white",
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
      class="svg"
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

<style>
  .input {
  }
  .input:focus {
    outline: none;
  }
  .svg {
    height: 1.5rem;
    width: 1.5rkm;
  }
</style>