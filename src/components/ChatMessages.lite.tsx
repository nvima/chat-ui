import { ChatMessagesProps } from './types'
import { useStore, Show, For, onUpdate } from '@builder.io/mitosis';

export default function ChatMessages(props: ChatMessagesProps) {
    const state = useStore({
        chatElementAdded: false,
    });
    onUpdate(() => {
        const container = document.getElementById("chat-container");
        if (container && state.chatElementAdded) {
            scrollToEnd(container);
            state.chatElementAdded = false;
        }
    });

    onUpdate(() => {
        const container = document.getElementById("chat-container");
        if (container) state.chatElementAdded = true;
    }, [props.chat.length]);


    function scrollToEnd(container: HTMLElement) {
        const containerHeight = container.clientHeight;
        const contentHeight = container.scrollHeight;
        container.scrollTop = contentHeight - containerHeight;
    }
    return (
        <div
            id="chat-container"
            style={{
                height: '100%',
                overscrollBehaviorY: 'contain',
                overflowY: 'auto',
                overflowX: 'hidden',
                backgroundColor: props.bgColorChat || '#EAEEF3',
                padding: '1.5rem',
            }}
        >
            <For each={props.chat}>{(chatMessage: any, _index) =>
                <div>
                    <Show when={chatMessage.type == 'person'}>
                        <div css={{
                            position: 'relative',
                            '&:hover div': {
                                display: 'block'
                            }
                        }}
                        >
                            <div
                                css={{
                                    position: 'relative',
                                    borderRadius: '0.75rem',
                                    padding: '1rem',
                                    width: 'fit-content',
                                    maxWidth: '80%',
                                    marginBottom: '1rem',
                                    marginLeft: 'auto',
                                }}
                                style={{
                                    backgroundColor: props.bgColorMessagePerson || '#025CDB',
                                    color: props.textColorMessagePerson || 'white',
                                }}
                            >
                                <Show when={chatMessage.timestamp}>
                                    <div
                                        css={{
                                            position: 'absolute',
                                            width: 'max-content',
                                            display: 'none',
                                            bottom: '0px',
                                            borderRadius: '0.25rem',
                                            left: '0px',
                                            transform: 'translateX(-50%) translateY(50%)',
                                            boxShadow: 'rgba(0, 0, 0, 0.2) 0 0 2px',
                                            padding: '0.25rem',
                                            zIndex: '9999',
                                        }}
                                        style={{
                                            backgroundColor: props.bgColorMessageTimestamp || 'white',
                                            color: props.textColorMessageTimestamp || 'black',
                                        }}
                                    >
                                        {chatMessage.timestamp}
                                    </div>
                                </Show>

                                {chatMessage.message}
                            </div>
                        </div>
                    </Show >

                    <Show when={chatMessage.type == 'chatbot'}>
                        <div
                        css={{
                            position: 'relative',
                            '&:hover div': {
                                display: 'block'
                            }
                        }}>
                            <div
                                css={{
                                    position: 'relative',
                                    borderRadius: '0.75rem',
                                    padding: '1rem',
                                    width: 'fit-content',
                                    maxWidth: '80%',
                                    marginBottom: '1rem',
                                    marginRight: 'auto',
                                }}
                                style={{
                                    backgroundColor: props.bgColorMessageChatbot || 'white',
                                    color: props.textColorMessageChatbot || 'black',
                                }}
                            >
                                <Show when={chatMessage.timestamp}>
                                    <div
                                        css={{
                                            position: 'absolute',
                                            width: 'max-content',
                                            display: 'none',
                                            bottom: '0px',
                                            right: '0px',
                                            borderRadius: '0.25rem',
                                            transform: 'translateX(50%) translateY(50%)',
                                            boxShadow: 'rgba(0, 0, 0, 0.2) 0 0 2px',
                                            padding: '0.25rem',
                                            zIndex: '9999',
                                        }}
                                        style={{
                                            backgroundColor: props.bgColorMessageTimestamp || 'white',
                                            color: props.textColorMessageTimestamp || 'black',
                                        }}
                                    >
                                        {chatMessage.timestamp}
                                    </div>
                                </Show>

                                {chatMessage.message}
                            </div >
                        </div >
                    </Show>
                </div >
            }
            </For >
        </div >
    );
}
