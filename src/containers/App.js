import React, {Component} from 'react';

import '../App.css';
import {Header} from '../components/Header';
import {Filter} from '../components/Filter';
import {Main} from '../components/Main';
import {Footer} from '../components/Footer';

import {connect} from 'react-redux';
import {setText} from "../actions/sampleActions"


const footerStyle = {
    position: 'fixed',
    bottom: 0,
    width: '85%',
};

class App extends Component {
    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                        <Header/>
                    </div>
                </div>
                <div className="row">
                    <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12"><br/></div>
                </div>
                <div className="row">
                    <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                        <Filter setTextValue={() => this.props.setText('Deneme text')}/>
                    </div>
                    <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                        <Main username={this.props.user}/>
                    </div>
                </div>
                <div className="row">
                    <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12"><br/></div>
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12" style={footerStyle}><Footer/></div>
                    </div>
                </div>
            </div>
        );
    }
}
const mapStateToProps = (state) => {
    return {
        user: state.sample.x
    };
};
const mapDispatchToProps = (dispatch) => {
    return {
        setText: (x) => {
            dispatch(setText(x));
        }

    };
};
export default connect(mapStateToProps, mapDispatchToProps)(App);
