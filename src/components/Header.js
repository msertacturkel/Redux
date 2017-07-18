/**
 * Created by sertac.turkel on 17/07/2017.
 */

import React from "react";

export const Header = (props) => {
    return (
        <div className="App">
            <nav className="pt-navbar .modifier pt-dark">
                <div className="pt-navbar-group pt-align-left">
                    <div className="pt-navbar-heading">Report Application Template</div>
                    <button className="pt-button pt-minimal pt-icon-vertical-bar-chart-desc">Select Report</button>
                </div>
                <div className="pt-navbar-group pt-align-right">

                    <span className="pt-navbar-divider"></span>
                    <button className="pt-button pt-minimal pt-icon-user"></button>
                    <button className="pt-button pt-minimal pt-icon-notifications"></button>
                    <button className="pt-button pt-minimal pt-icon-cog"></button>
                </div>
            </nav>
        </div>
    );
};