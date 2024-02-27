import React, { useState } from 'react'; //import React Component
import '../style.css';
import {Routes, Route} from 'react-router-dom';
import {SymptomForm } from './form';
import {Calendar} from './calendar';
import {Graphs} from './graph';
import {Nav} from './Nav';
import{Home} from './home';

export function Header() {
    return(
        <header className="header">
            <h1 id="nav-title">SymptoTracker</h1>
            <Nav />
        </header>
    );
};

function App(props) {
    const [symptoms, setSymptoms] = useState([]);

    const addSymptom = (newSymptom) => {
        setSymptoms([...symptoms, newSymptom]);
    };

    return (
        <div>
            <Header />
            <Routes>
                <Route path = "/form" element={<SymptomForm onClick={addSymptom} />} />
                <Route path="/graph" element={<Graphs />} />
                <Route path="/calendar" element={<Calendar />} />
                <Route path= "*" element= {<Home />} />
            </Routes>
        </div>
    );
};
export default App;