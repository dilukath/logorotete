import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { connect } from "react-redux";
import { startAction } from "./actionsions/startAction";
import { stopAction } from "./actionsions/stopAction";


class App extends Component {
    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className={"App-logo" + (this.props.rotating ? "":" App-logo-paused")} alt="logo" onClick={this.props.rotating ? this.props.stopAction : this.props.startAction}/>
                </header>
            </div>
        );
    }
}

// const mapStateToProps = state => ({
//   ...state
// });
const mapStateToProps = (state) => {
    return {
        rotating: state.rotating
    };
};

const mapDispatchToProps = dispatch => ({
  startAction: () => dispatch(startAction),
  stopAction: () => dispatch(stopAction)
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
