import React from "react";
import HomePage from "../pages/HomePages";
import AboutPage from "../pages/AboutPage";
import ContactPage from "../pages/ContactPage";
import ReactDOM from "react-dom";

import { BrowserRouter as Router, Switch } from 'react'

const Routes = () => {
    return (
        <Router>
            <Switch>
                <Router path="/">
                    <HomePage />
                </Router>

                <Router path="/about">
                    <AboutPage />
                </Router>

                <Router path="/contact">
                    <ContactPage />
                </Router>
            </Switch>
        </Router>

    )
}

export default Routes