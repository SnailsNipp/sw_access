import React from 'react';
import './App.css';
import Navigation from "./ui/menu/Navigation/Navigation";
import {BrowserRouter, Route, Routes, Navigate} from "react-router-dom";
import {Terminal} from "./pages/Terminal/Terminal";
import {SwitchDetails} from "./pages/SwitchDetails/SwitchDetails";
import {Home} from "./pages/Home/Home";
function App() {
    return (
        <BrowserRouter>
            <div className="App">
                {/*MENU COMPONENT, rendering dorm-floors-switches list*/}
                <Navigation />
                {/*DO NOT CHANGE*/}
                {/*To edit - read "react-router-dom" documentation first*/}
                <Routes>
                    <Route path="switch/:switchId/terminal" caseSensitive element={<Terminal />}></Route>
                    <Route path="switch/:switchId" element={<SwitchDetails />}></Route>
                    {/*Initially shown page*/}
                    <Route path="" element={<Home />}></Route>
                    {/*<Route path="" element={<Navigate to="" />}></Route>*/}
                </Routes>
            </div>
        </BrowserRouter>
    );
}

export default App;