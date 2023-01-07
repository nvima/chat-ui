<template>
  <div
    :style="{
      display: 'flex',
      height: headerHeight || '90px',
      flexShrink: '0',
      backgroundColor: bgColorHeader || 'white',
    }"
  >
    <div
      :style="{
        position: 'flex',
        borderRadius: '50%',
        backgroundColor: bgColorIcon || '#025CDB',
        marginTop: 'auto',
        marginBottom: 'auto',
        marginLeft: '1.25rem',
        marginRight: '1.25rem',
        padding: '0.75rem',
        fill: fillColorIcon || 'white',
      }"
    >
      <chat-icon></chat-icon>
    </div>
    <div
      :style="{
        marginTop: 'auto',
        marginBottom: 'auto',
        width: '100%',
        color: textColorHeader || 'black',
      }"
    >
      <div
        :style="{
          fontWeight: '600',
          fontSize: '1.10rem',
          lineHeight: '1.5rem',
        }"
      >
        ChatBot
      </div>
      <div
        :style="{
          display: 'flex',
        }"
      >
        <div
          :style="{
            borderRadius: '50%',
            height: '8px',
            width: '8px',
            margin: 'auto 4px',
            backgroundColor: offline
              ? colorOffline || 'red'
              : colorOnline || 'green',
          }"
        ></div>

        <template v-if="offline">
          <div>Offline</div>
        </template>

        <template v-else>
          <div>Online</div>
        </template>
      </div>
    </div>

    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      stroke="currentColor"
      stroke-width="2"
      @click="closeChat()"
      :style="{
        height: '1.75rem',
        width: '1.75rem',
        flexShrink: '0',
        margin: '1rem',
        cursor: 'pointer',
        color: textColorHeader || 'black',
      }"
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        d="M6 18L18 6M6 6l12 12"
      ></path>
    </svg>
  </div>
</template>

<script>
import ChatIcon from "./ChatIcon.vue";

export default {
  name: "chat-header",
  components: { ChatIcon: ChatIcon },
  props: [
    "headerHeight",
    "bgColorHeader",
    "bgColorIcon",
    "fillColorIcon",
    "textColorHeader",
    "offline",
    "colorOffline",
    "colorOnline",
    "closeChat",
  ],
};
</script>