import React, { Component } from 'react'
import { connect } from 'react-redux'
import {LOADDATA, ADD, DEL, CHANGE,CHANGESHOW } from '../constents/toodActionTypes.js'

class TodoFt extends Component {
    constructor(props){
        super(props);
    }
    render() {
        
        return (
            <div className="dobtn">
                <button className={this.props.show=="ALL"?"cur":null} onClick={()=>{this.props.changeShow("ALL")}}>显示全部{this.props.todos.length}</button>
                <button className={this.props.show=="ONLYDO"?"cur":null} onClick={()=>{this.props.changeShow("ONLYDO")}}>显示已做{this.props.doneTodos.length}</button>
                <button className={this.props.show=="ONLYTODO"?"cur":null} onClick={()=>{this.props.changeShow("ONLYTODO")}}>显示未做{this.props.undoneTodos.length}</button>
            </div>
        )
    }
}
export default connect(
    ({todoReducer})=>({
        todos:todoReducer.todos,
        doneTodos : todoReducer.todos.filter(item=>item.done),
        undoneTodos : todoReducer.todos.filter(item=>!item.done),
        show:todoReducer.show
    })
    ,
    (dispatch)=>({
        changeShow(show){
            dispatch({type:CHANGESHOW,show})
        }
    })
)(TodoFt)