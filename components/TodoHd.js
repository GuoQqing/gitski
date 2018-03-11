import React, { Component } from 'react'
import { connect } from 'react-redux'


class TodoHd extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <div>
                <input type="text" ref="txt" />
                <button onClick={() => {
                    this.props.dispatch({ "type": "ADD_SAGA", "title": this.refs.txt.value })
                    this.refs.txt.value=""
                }}
                >
                    增加
                    </button>
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
)(TodoHd)