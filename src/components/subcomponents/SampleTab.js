/**
 * Created by sertac.turkel on 18/07/2017.
 */
import React from "react";

export const SampleTab = (props) => {
    return (
        <div className="row">
            <div className="col-xs-12
                col-sm-8
                col-md-6
                col-lg-4">
                <p> Changed Text : {props.username} </p>
                <p> Filters Event : {props.filtersEvent} </p>
            </div>
        </div>

    );
}