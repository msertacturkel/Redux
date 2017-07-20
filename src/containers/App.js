import React, {Component} from 'react';

import '../App.css';
import {Header} from '../components/Header';
import Filter from '../components/Filter';
import {Main} from '../components/Main';


import {connect} from 'react-redux';
import {setText} from "../actions/sampleActions"
import {catchClick} from "../actions/filtersActions"

class App extends Component {
    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                        <Header
                            filtersClicked={() => this.props.filtersEvent ? this.props.catchClick(false) : this.props.catchClick(true)}/>
                    </div>
                </div>
                <div className="row">
                    <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12"><br/></div>
                </div>
                <div className="row">
                    <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
                        <Filter setTextValue={() => this.props.setText('Text Changed via Redux !!! ') }
                                filtersClicked={this.props.filtersEvent}/>
                    </div>
                    <div className="col-xs-8 col-sm-8 col-md-8 col-lg-8">
                        <Main username={this.props.user}/>
                    </div>
                </div>
                <div className="row">
                    <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12"><br/></div>
                </div>
            </div>
        );
    }
}
const mapStateToProps = (state) => {
    return {
        user: state.sample.x,
        filtersEvent: state.filters.isClicked
    };
};
const mapDispatchToProps = (dispatch) => {
    return {
        setText: (x) => {
            dispatch(setText(x));
        },
        catchClick: (isClicked) => {
            dispatch(catchClick(isClicked))
        }

    };
};
export default connect(mapStateToProps, mapDispatchToProps)(App);
