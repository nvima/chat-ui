export type ChatProps = {
    onSend: (event: any) => void;
    bgColorHeader: string;
    bgColorChat: string;
    bgColorIcon: string;
    bgColorInput: string;
    bgColorMessageChatbot: string;
    bgColorMessagePerson: string;
    bgColorMessageTimestamp: string;
    textColorMessageChatbot: string;
    textColorMessagePerson: string;
    textColorMessageTimestamp: string;
    textColorHeader: string;
    textColorInput: string;
    fillColorIcon: string;
    margin: string;
    boxShadow: string;
    height: string;
    width: string;
    offline: boolean;
    onlineColor: string;
    offlineColor: string;
    headerHeight: string;
    inputHeight: string;
    inputPlaceholder: string;
    chat: [];
};

export type ChatInputProps = {
    onSend: (event: any) => void;
    inputHeight: string;
    bgColorInput: string;
    textColorInput: string;
    inputPlaceholder: string;
};

export type ChatMessagesProps = {
    bgColorChat: string;
    bgColorMessageChatbot: string;
    bgColorMessagePerson: string;
    bgColorMessageTimestamp: string;
    textColorMessageChatbot: string;
    textColorMessagePerson: string;
    textColorMessageTimestamp: string;
    chat: [];
};

export type ChatHeaderProps = {
    closeChat: (event: any) => void;
    offline: boolean;
    onlineColor: string;
    offlineColor: string;
    fillColorIcon: string;
    textColorHeader: string;
    bgColorHeader: string;
    bgColorIcon: string;
    headerHeight: string;
};
