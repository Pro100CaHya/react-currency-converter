import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import Header from "../layout/header/Header";
import Footer from "../layout/footer/Footer";

import Currencies from "../../pages/Currencies";
import About from "../../pages/About";
import NotFound from "../../pages/NotFound";

import "./App.sass";

const App = () => {

    return (
        <BrowserRouter>
            <div className="app">
                <Header />
                <Routes>
                    <Route
                        path="/about"
                        element={<About />}
                    />
                    <Route
                        path="/currencies"
                        element={<Currencies />}
                    />
                    <Route
                        path="/"
                        element={<Currencies />}
                    />
                    <Route
                        path="/"
                        element={<Currencies />}
                    />
                    <Route
                        path="/404"
                        element={<NotFound />}
                    />
                    <Route
                        path="*"
                        element={<Navigate to="/404" />}
                    />
                </Routes>
                <Footer />
            </div>
        </BrowserRouter>
    );

}

export default App;