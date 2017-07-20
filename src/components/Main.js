/**
 * Created by sertac.turkel on 17/07/2017.
 */
import React, {Component} from 'react';
import {Tab2, Tabs2} from "@blueprintjs/core";
import {TableTab} from "./subcomponents/TableTab"
import {Graph} from "./subcomponents/Graph"
import {SampleTab} from "./subcomponents/SampleTab"

import {connect} from 'react-redux';
import {catchClick} from "../actions/filtersActions";
import {catchReportsClick} from "../actions/filtersActions";

class Main extends Component {
    render() {
        return (
            <div className="pt-card">

                <Tabs2 id="Tabs2Example" onChange={this.handleTabChange}>
                    <Tab2 id="tbl" title="Table" panel={<TableTab />}/>
                    <Tab2 id="grhp" title="Graph" panel={<Graph />}/>
                    <Tab2 id="smple" title="Sample" panel={<SampleTab username={this.props.username}/>}/>
                    <Tabs2.Expander />
                </Tabs2>
            </div>

        );
    }
};
const mapStateToProps = (state) => {
    return {
        filtersEvent: state.filters.isClicked,
        reportsEvent: state.filters.isReportsClicked
    };
};
const mapDispatchToProps = (dispatch) => {
    return {
        catchClick: (isClicked) => {
            dispatch(catchClick(isClicked))
        },
        catchReportsClick: (isClicked) => {
            dispatch(catchReportsClick(isClicked))
        }

    };
};
export default connect(mapStateToProps, mapDispatchToProps)(Main);

