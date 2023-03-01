import { useState } from 'react'
import './App.css';
import Axios from 'axios';

function App() {
    const [foodName, setFoodName] = useState("");
    const [days, setDays] = useState(0);
    const addList = () => {
        Axios.post("http://localhost:3001/insertFood", { foodName: foodName, days: days })
    }
    return (
        <div className="App">
            <h1>MERN application</h1>
            <label>Food name:</label>
            <input type={"text"}
                onChange={event => setFoodName(event.target.value)} />
                <br/>
            <label>Days since i ate:</label>
            <input type={"number"}
                onChange={event => setDays(event.target.value)} />
                <br/>
            <button onClick={addList}>Add to list</button>
        </div>
    );
}

export default App;
