<template>
  <div>
    <div
      @click="stateOpenChat()"
      :style="{
        position: 'fixed',
        bottom: '0px',
        right: '0px',
        overflow: 'hidden',
        transform: chatOpen ? 'translateY(100%)' : 'translateY(0%)',
        transitionTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)',
        transitionDuration: '300ms',
        transitionDelay: chatOpen ? '0ms' : '300ms',
      }"
    >
      <div
        :style="{
          position: 'flex',
          borderRadius: '50%',
          cursor: 'pointer',
          backgroundColor: bgColorIcon || '#025CDB',
          margin: margin || '20px',
          padding: '0.75rem',
          fill: fillColorIcon || 'white',
        }"
      >
        <chat-icon></chat-icon>
      </div>
    </div>
    <div
      :style="{
        position: 'fixed',
        bottom: '0px',
        right: '0px',
        maxHeight: '100%',
        maxWidth: '100%',
        width: width || '410px',
        height: height || '700px',
        overflow: 'hidden',
        transform: chatOpen ? 'translateY(0%)' : 'translateY(100%)',
        transitionTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)',
        transitionDuration: '300ms',
        transitionDelay: chatOpen ? '300ms' : '0ms',
      }"
    >
      <div
        :style="{
          margin: margin || '20px',
          overflow: 'hidden',
          borderRadius: '0.75rem',
          boxShadow: boxShadow || 'rgba(0,0,0,0.4) 0 0 6px',
          maxHeight: margin
            ? 'calc(100% - ' + margin + ' - ' + margin + ')'
            : 'calc(100% - 40px)',
          maxWidth: margin
            ? 'calc(100% - ' + margin + ' - ' + margin + ')'
            : 'calc(100% - 40px)',
          width:
            width && margin
              ? 'calc(' + width + ' - ' + margin + ' - ' + margin + ')'
              : width
              ? 'calc(' + width + ' - 40px)'
              : margin
              ? 'calc(410px - ' + margin + ' - ' + margin + ')'
              : 'calc(410px - 40px)',
          height:
            height && margin
              ? 'calc(' + height + ' - ' + margin + ' - ' + margin + ')'
              : height
              ? 'calc(' + height + ' - 40px)'
              : margin
              ? 'calc(700px - ' + margin + ' - ' + margin + ')'
              : 'calc(700px - 40px)',
        }"
      >
        <div
          :style="{
            display: 'flex',
            flexDirection: 'column',
            height: '100%',
          }"
        >
          <chat-header
            :closeChat="stateCloseChat"
            :headerHeight="headerHeight"
            :bgColorHeader="bgColorHeader"
            :bgColorIcon="bgColorIcon"
            :textColorHeader="textColorHeader"
            :fillColorIcon="fillColorIcon"
            :offline="offline"
            :colorOffline="colorOffline"
            :colorOnline="colorOnline"
          ></chat-header>
          <chat-messages
            :bgColorChat="bgColorChat"
            :bgColorMessageChatbot="bgColorMessageChatbot"
            :bgColorMessagePerson="bgColorMessagePerson"
            :bgColorMessageTimestamp="bgColorMessageTimestamp"
            :textColorMessageChatbot="textColorMessageChatbot"
            :textColorMessagePerson="textColorMessagePerson"
            :textColorMessageTimestamp="textColorMessageTimestamp"
            :chat="chat"
          ></chat-messages>
          <chat-input
            :handleSend="onSend"
            :inputHeight="inputHeight"
            :bgColorInput="bgColorInput"
            :textColorInput="textColorInput"
            :inputPlaceholder="inputPlaceholder"
          ></chat-input>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ChatMessages from "./ChatMessages.vue";
import ChatInput from "./ChatInput.vue";
import ChatHeader from "./ChatHeader.vue";
import ChatIcon from "./ChatIcon.vue";

export default {
  name: "chat",
  components: {
    ChatIcon: ChatIcon,
    ChatHeader: ChatHeader,
    ChatMessages: ChatMessages,
    ChatInput: ChatInput,
  },
  props: [
    "bgColorIcon",
    "margin",
    "fillColorIcon",
    "width",
    "height",
    "boxShadow",
    "headerHeight",
    "bgColorHeader",
    "textColorHeader",
    "offline",
    "colorOffline",
    "colorOnline",
    "bgColorChat",
    "bgColorMessageChatbot",
    "bgColorMessagePerson",
    "bgColorMessageTimestamp",
    "textColorMessageChatbot",
    "textColorMessagePerson",
    "textColorMessageTimestamp",
    "chat",
    "onSend",
    "inputHeight",
    "bgColorInput",
    "textColorInput",
    "inputPlaceholder",
  ],

  data: () => ({ chatOpen: false }),

  methods: {
    stateCloseChat() {
      this.chatOpen = false;
    },
    stateOpenChat() {
      this.chatOpen = true;
    },
  },
};
</script>