import React, { Component } from 'react'
import { connect } from 'react-redux'
import TodoItem from './TodoItem.js'

class TodoBd extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        const arr = (() => {
            if (this.props.show == "ALL") {
                return this.props.todos
            } else if (this.props.show == "ONLYDO") {
                return this.props.todos.filter(item => item.done)
            } else if (this.props.show == "ONLYTODO") {
                return this.props.todos.filter(item => !item.done)
            }
        })()
        return (
            <div>
                {arr.map(item => {
                    return <TodoItem
                        key={item.id}
                        item={item}
                        change={this.props.change}
                        del={this.props.del}
                    />
                })}
            </div>
        )
    }
}
export default connect(
    ({ todoReducer }) => ({
        todos: todoReducer.todos,
        show: todoReducer.show
    })
    ,
    (dispatch) => ({
        change(id,k,v){
            dispatch({type:"CHANGE_SAGA",id,k,v})
        },
        del(id){
            dispatch({type:"DELETE_SAGA",id})
        }
    })
)(TodoBd)