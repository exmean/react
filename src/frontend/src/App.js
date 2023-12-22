import axios from 'axios';
import React, { useEffect, useState } from "react";
import './App.css';

function App() {
    const [userInfo, setUserInfo] = useState({});

    useEffect(() => {
        axios.get('/api/user/info')
            .then(response => setUserInfo(response.data))
            .catch(error => console.log(error))
    }, []);

    return (
        <div className="App">
            <li>이름: {userInfo.name}</li>
            <li>나이: {userInfo.age}</li>
        </div>
    );
}

export default App;
