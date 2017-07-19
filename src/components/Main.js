/**
 * Created by sertac.turkel on 17/07/2017.
 */
import React from "react";
import { Tab2, Tabs2 } from "@blueprintjs/core";
import {TableTab} from "./subcomponents/TableTab"
import {Graph} from "./subcomponents/Graph"
import {SampleTab} from "./subcomponents/SampleTab"

export const Main = (props) => {
    return (
            <div className="pt-card">

                <Tabs2 id="Tabs2Example" onChange={this.handleTabChange}>
                    <Tab2 id="tbl" title="Table" panel={<TableTab />} />
                    <Tab2 id="grhp" title="Graph" panel={<Graph />} />
                    <Tab2 id="smple" title="Sample" panel={<SampleTab username={props.username}/>} />
                    <Tabs2.Expander />
                </Tabs2>
            </div>
    );
};
