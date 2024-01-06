import { ChatEngine } from "react-chat-engine";
import ChatFeed from './components/ChatFeed';

import LoginForm from "./components/LoginForm";
import './App.css'

const App = () => {
    if(!localStorage.getItem('username')) return <LoginForm />

    return (
        <ChatEngine
            height="100vh"
            projectID="be00d52e-63f2-4433-a801-2603396021f9"
            userName={localStorage.getItem('username')}
            userSecret={localStorage.getItem('password')}
            renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} /> }
        />
    );
};

export default App;