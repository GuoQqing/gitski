import {LOADDATA, ADD, DEL, CHANGE,CHANGESHOW } from '../constents/toodActionTypes.js'

var obj = {
    "todos": [],
    "show":"ALL"
}
export default (state = obj, action) => {
    if(action.type==LOADDATA){
        return {
            ...state,
            "todos":action.todos
        }
    }
    if (action.type == ADD) {
        return {
            ...state,
            "todos": [
                ...state.todos,
                action.result
            ]
        }
    } else if (action.type == DEL) {
        return {
            ...state,
            "todos": state.todos.filter(item => item.id != action.id)
        }
    }else if(action.type==CHANGE){
        return {
            ...state,
            "todos":state.todos.map(item=>{
                if(item.id!==action.id) return item
                return {
                    ...item,
                    [action.k]:action.v
                }
            })
        }
    }else if(action.type==CHANGESHOW){
        return {
            ...state,
            "show":action.show
        }
    }
    return state;
}