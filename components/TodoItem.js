import React, { Component } from 'react'

export default class TodoItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            "isShow": true
        }
    }
    render() {
        const { item,change,del } = this.props
        const Word = () => {
            if (this.state.isShow) {
                return <span
                    onDoubleClick={() => { this.setState({ "isShow": false }) }}
                >
                    {item.title}
                </span>
            } else if (!this.state.isShow) {
                return <input
                    type="text"
                    defaultValue={item.title}
                    onBlur={(e) => {
                        change(item.id,"title",e.target.value)
                        this.setState({ "isShow": true })
                    }}
                />
            }
        }
        return (
            <div>

                <input
                    type="checkbox"
                    checked={item.done}
                    onChange={(e) => {change(item.id,"done",e.target.checked) }}
                />
                <Word />
                <button onClick={() => {del(item.id ) }}>删除</button>

            </div>
        )
    }
}
