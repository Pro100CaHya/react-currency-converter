import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "../layout/header/Header";
import Footer from "../layout/footer/Footer";
import Currencies from "../../pages/Currencies";

import "./App.sass";

const App = () => {

    return (
        <BrowserRouter>
            <div className="app">
                <Header />
                <Routes>
                    <Route
                        path="/"
                        element={<Currencies />}
                    />
                    <Route
                        path="/currencies"
                        element={<Currencies />}
                    />
                </Routes>
                <Footer />
            </div>
        </BrowserRouter>
    );

}

export default App;