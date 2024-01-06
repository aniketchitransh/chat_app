import { ChatEngine } from "react-chat-engine";
import ChatFeed from './components/ChatFeed';

import './App.css'

const App = () => {
    return (
        <ChatEngine
            height="100vh"
            projectID="be00d52e-63f2-4433-a801-2603396021f9"
            userName="aniket"
            userSecret="password"
            renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} /> }
        />
    );
};

export default App;