import { ChatHeaderProps } from './types'
import { Show } from '@builder.io/mitosis';
import ChatIcon from './ChatIcon.lite';

export default function ChatHeader(props: ChatHeaderProps) {
    return (
        <div style={{
            display: 'flex',
            height: props.headerHeight || '90px',
            flexShrink: '0',
            backgroundColor: props.bgColorHeader || 'white',
        }}>
            <div style={{
                    position: 'flex', borderRadius: '50%',
                    backgroundColor: props.bgColorIcon || '#025CDB',
                    marginTop: 'auto', marginBottom: 'auto', marginLeft: '1.25rem', marginRight: '1.25rem',
                    padding: '0.75rem',
                    fill: props.fillColorIcon || 'white' 
                }}>
                <ChatIcon />
            </div>
            <div style={{
                marginTop: 'auto', marginBottom: 'auto', width: '100%',
                color: props.textColorHeader || 'black'
            }}>
                <div style={{
                    fontWeight: '600',
                    fontSize: '1.10rem',
                    lineHeight: '1.5rem'
                }}>
                    ChatBot
                </div>
                <div style={{ display: 'flex' }}>
                    <div style={{
                        borderRadius: '50%',
                        height: '8px',
                        width: '8px',
                        margin: 'auto 4px',
                        backgroundColor: props.offline ?
                            props.colorOffline || 'red' :
                            props.colorOnline || 'green'
                    }}></div>
                    <Show
                        when={props.offline}
                        else={<div>Online</div>}
                    >
                        <div>Offline</div>
                    </Show>
                </div>
            </div>
            {/* @ts-ignore */}
            <svg xmlns="http://www.w3.org/2000/svg"
            onClick={() => props.closeChat()}
                style={{
                    height: '1.75rem', width: '1.75rem', flexShrink: '0', margin: '1rem', cursor: 'pointer',
                    color: props.textColorHeader || 'black'
                }}
                viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
        </div>
    );
}
