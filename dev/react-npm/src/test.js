import { Chat } from '@chat-ui/react'

function App() {
    function handleSendMessage(text) {
        console.log(text)
    }

    return (
        <div>
            <Chat
                chat={[]}
                onSend={(text) => handleSendMessage(text)}
            />
        </div >
    );
}

export default App;
