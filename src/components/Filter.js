/**
 * Created by sertac.turkel on 17/07/2017.
 */
import React, {Component} from 'react';

import {Button, Dialog, Intent} from "@blueprintjs/core";

import {connect} from 'react-redux';
import {catchClick} from "../actions/filtersActions"

class Filter extends Component {

    render() {
        return (
            <div className="pt-card" hidden="true">
                <p>Filter</p>
                <button type="button" className="pt-button pt-intent-success" onClick={() => this.props.setTextValue()}>
                    Next step
                    <span className="pt-icon-standard pt-icon-arrow-right pt-align-right"></span>
                </button>
                <hr/>
                <p> Filters Event : {this.props.filtersClicked ? "true" : "false"} </p>
                <div>
                    <Dialog
                        iconName="home"
                        isOpen={!this.props.filtersClicked}
                        onClose={this.props.filtersClicked}
                        title="Select Filter"
                    >
                        <div className="pt-dialog-body">
                            Some content
                        </div>
                        <div className="pt-dialog-footer">
                            <div className="pt-dialog-footer-actions">
                                <Button
                                    intent={Intent.DANGER}
                                    onClick={() => {
                                        console.log(this.props);
                                        this.props.catchClick(true);
                                    }}
                                > <span className="pt-icon-standard pt-icon-arrow-left"></span>Back</Button>
                                <Button
                                    intent={Intent.PRIMARY}
                                    text="Get Report Data"
                                    onClick={() => {
                                        console.log(this.props);
                                        this.props.catchClick(true);
                                    }}
                                />
                            </div>
                        </div>
                    </Dialog>
                </div>
            </div>
        );
    }
};
const mapStateToProps = (state) => {
    return {
        filtersEvent: state.filters.isClicked
    };
};
const mapDispatchToProps = (dispatch) => {
    return {
        catchClick: (isClicked) => {
            dispatch(catchClick(isClicked))
        }

    };
};
export default connect(mapStateToProps, mapDispatchToProps)(Filter);
