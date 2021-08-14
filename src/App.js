import {ChatEngine} from 'react-chat-engine';

import ChatFeed from './components/ChatFeed';
import './App.css';

const App = () =>{
    return(
        <ChatEngine
            height="100vh"
            projectID="be4dccec-e4aa-47bd-92e5-ae706ba680c8"
            userName="Bart"
            userSecret="123"
            renderChatFeed={(chatAppProps) => <ChatFeed { ... chatAppProps}/>}
        />
    );
}

export default App;