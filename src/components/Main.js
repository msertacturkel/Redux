/**
 * Created by sertac.turkel on 17/07/2017.
 */
import React from "react";
import { Tab2, Tabs2 } from "@blueprintjs/core";
import {TableTab} from "./subcomponents/TableTab"
import {Graph} from "./subcomponents/Graph"

export const Main = (props) => {
    return (
            <div className="pt-card">
                <p>Main</p>
                <p> Changed Text : {props.username} </p>

                <Tabs2 id="Tabs2Example" onChange={this.handleTabChange}>
                    <Tab2 id="tbl" title="Table" panel={<TableTab />} />
                    <Tab2 id="grhp" title="Graph" panel={<Graph />} />
                    <Tabs2.Expander />
                    <input className="pt-input" type="text" placeholder="Search..." />
                </Tabs2>


            </div>
    );
};
