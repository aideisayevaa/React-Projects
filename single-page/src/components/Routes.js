import React from "react";

import { BrowserRouter as Router, Switch, Route } from 'react-dom'

const Routes = () => {
    return (
        <Router>
            <Router path="/">
                <HomePage />
            </Router>

            <Router path="/about">
                <AboutPage />
            </Router>

            <Router path="/contact">
                <ContactPage />
            </Router>
        </Router>
    )
}

export default Routes