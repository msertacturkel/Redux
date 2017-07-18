/**
 * Created by sertac.turkel on 17/07/2017.
 */
import React from "react";

export const Main = (props) => {
    return (
            <div className="pt-card">
                <p>Main</p>
                <p> Changed Text : {props.username} </p>
            </div>
    );
};
