import { Chat } from '@chat-ui/solid'
import { createSignal } from "solid-js";

const [chat, setChat] = createSignal([
    {
        type: 'chatbot',
        timestamp: formatAMPM(new Date()),
        message: 'Hi!'
    },
    {
        type: 'person',
        timestamp: formatAMPM(new Date()),
        message: 'Hello'
    },
    {
        type: 'chatbot',
        timestamp: formatAMPM(new Date()),
        message: 'How can I help you?'
    },

]);
const [darkTheme, setDarkTheme] = createSignal(true);

function handleMessage(input) {
    console.log(input);
    if (input == '') return;
    const messagePerson = {
        type: 'person',
        timestamp: formatAMPM(new Date()),
        message: input
    }
    setChat([...chat(), messagePerson])

    setTimeout(async () => {
        const response = await fetch('https://www.boredapi.com/api/activity')
        const res = await response.json()
        const messageChatbot = {
            type: 'chatbot',
            timestamp: formatAMPM(new Date()),
            message: res.activity
        }
        setChat([...chat(), messageChatbot])
    }, getRandomNumber())
}

function getRandomNumber() {
    return Math.floor(Math.random() * (2000 - 1000 + 1)) + 1000;
}

function formatAMPM(date) {
    var hours = date.getHours();
    var minutes = date.getMinutes();
    var ampm = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12;
    hours = hours ? hours : 12; // the hour '0' should be '12'
    minutes = minutes < 10 ? '0' + minutes : minutes;
    var strTime = hours + ':' + minutes + ' ' + ampm;
    return strTime;
}

function App() {
    return (
        <div>
            <Chat chat={chat()} onSend={(text) => handleMessage(text)}
                bgColorHeader={darkTheme() && '#1e1e1e'}
                bgColorChat={darkTheme() && '#2C2D2E'}
                bgColorInput={darkTheme() && '#1e1e1e'}
                bgColorIcon={darkTheme() && '#9B51E0'}
                bgColorMessageChatbot={darkTheme() && '#1e1e1e'}
                bgColorMessagePerson={darkTheme() && '#9B51E0'}
                bgColorMessageTimestamp={darkTheme() && '#1e1e1e'}
                textColorInput={darkTheme() && '#fff'}
                textColorHeader={darkTheme() && '#fff'}
                textColorMessageChatbot={darkTheme() && '#fff'}
                textColorMessageTimestamp={darkTheme() && '#fff'}
            />
            <div style={{ width: '100vw', height: '100vh', 'background-color': darkTheme() ? '#2C2D2E' : 'white' }}>
            </div>
            <div style={{
                cursor: 'pointer', position: 'fixed',
                top: '0px', right: '0px', margin: '20px', color: darkTheme() ? 'white' : 'black'
            }}
                onClick={() => setDarkTheme((prev) => !prev)}>
                Switch Theme
            </div>
        </div>
    );
}

export default App;
