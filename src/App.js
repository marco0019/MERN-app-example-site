import { useState } from 'react'
import './App.css';

function App() {
    const [currentUser, setCurrentUser] = useState("");
    const insertUser = () => setCurrentUser("marco");
    return (
        <div className="App">
            {currentUser}
        </div>
    );
}

export default App;
