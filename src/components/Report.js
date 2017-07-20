/**
 * Created by sertac.turkel on 20/07/2017.
 */
import React, {Component} from 'react';

import {Button, Dialog, Intent} from "@blueprintjs/core";

import {connect} from 'react-redux';
import {catchClick} from "../actions/filtersActions";
import {catchReportsClick} from "../actions/filtersActions";

class Report extends Component {

    render() {
        return (
            <div className="pt-card" hidden="true">
                <div>
                    <Dialog
                        iconName="home"
                        isOpen={!this.props.reportsClicked}
                        onClose={this.props.reportsClicked}
                        title="Select Report"
                    >

                        <div className="pt-dialog-body">
                            <div className="row">
                                <div className="pt-select col-xs-6 col-sm-6 col-md-6 col-lg-6">
                                    <select>
                                        <option>Select Report</option>
                                        <option defaultValue="1">One</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                        <div className="pt-dialog-footer">
                            <div className="pt-dialog-footer-actions">
                                <Button
                                    intent={Intent.DANGER}
                                    onClick={() => {
                                        console.log(this.props);
                                        this.props.catchReportsClick(true);
                                    }}
                                > <span className="pt-icon-standard pt-icon-arrow-left"></span>Back</Button>
                                <Button
                                    intent={Intent.PRIMARY}
                                    text="Go to Report"
                                    onClick={() => {
                                        console.log(this.props);
                                        this.props.catchReportsClick(true);
                                    }}
                                />
                            </div>
                        </div>
                    </Dialog>
                </div>
            </div>
        );
    }
}
;
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
export default connect(mapStateToProps, mapDispatchToProps)(Report);
