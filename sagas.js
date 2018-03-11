import { delay } from 'redux-saga'
import { put, takeEvery, all } from 'redux-saga/effects'
import { LOADDATA, ADD, DEL, CHANGE, CHANGESHOW } from './constents/toodActionTypes.js'

function* loaddata_saga() {
    const todos = yield fetch("/todos").then(data => data.json());
    yield put({ type: LOADDATA, todos })
}
function* add_saga(action) {
    const result = yield fetch("/todos", {
        "method": "POST",
        "headers": {
            "Content-Type": "application/json"
        },
        "body": JSON.stringify({
            "title": action.title,
            "done": false
        })
    }).then(data => data.json());
    yield put({ type: ADD, result })
}
function* change_saga(action) {
    const result = yield fetch("/todos/" + action.id, {
        "method": "PATCH",
        "headers": {
            "Content-Type": "application/json"
        },
        "body": JSON.stringify({
            [action.k]: action.v
        })
    }).then(data => data.json());
    yield put({ type: CHANGE, id: action.id, k: action.k, v: action.v })
}
function* del_saga(action) {
    const result = yield fetch("/todos/" + action.id, {
        "method": "DELETE",
        "headers": {
            "Content-Type": "application/json"
        }
    }).then(data => data.json());
    yield put({ type: DEL, id: action.id })
}
function* watch_loaddata() {
    yield takeEvery("LOADDATA_SERVER", loaddata_saga)
}
function* watch_add() {
    yield takeEvery("ADD_SAGA", add_saga)
}
function* watch_change() {
    yield takeEvery("CHANGE_SAGA", change_saga)
}
function* watch_del() {
    yield takeEvery("DELETE_SAGA", del_saga)
}
export default function* rootSaga() {
    yield all([
        watch_loaddata(),
        watch_add(),
        watch_change(),
        watch_del()
    ])
}