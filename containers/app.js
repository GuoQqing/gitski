import React, { Component } from 'react'
import TodoHd from '../components/TodoHd.js'
import TodoBd from '../components/TodoBd.js'
import TodoFt from '../components/TodoFt.js'
import { connect } from 'react-redux'


class App extends Component {
    constructor(props) {
        super(props);
        props.dispatch({ type: "LOADDATA_SERVER" });
    }
    render() {
        return (
            <div>
                <TodoHd />
                <TodoBd />
                <TodoFt />
            </div>
        )
    }
}
export default connect(
    null
    ,
    (dispatch) => ({
        dispatch
    })
)(App)
