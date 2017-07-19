/**
 * Created by sertac.turkel on 17/07/2017.
 */
import React from "react";


export const Filter = (props) => {


    return (

        <div className="pt-card">
            <p>Filter</p>
            <button type="button" className="pt-button pt-intent-success" onClick={() => props.setTextValue()}>
                Next step
                <span className="pt-icon-standard pt-icon-arrow-right pt-align-right"></span>
            </button>
            <hr/>
            <p> Filters Event : {props.filtersClicked} </p>
        </div>
    );
};
