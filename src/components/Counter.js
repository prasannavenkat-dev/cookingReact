import React, { Component } from "react";

import { ThemeContext } from "../App"

export default class Counter extends Component {

    constructor(props) {
        super(props);

        this.state = {
            count: this.props.count
        }
    }


    render() {

        return (

            <ThemeContext.Consumer>

                {
                    (style) => (
                        <div>
                            <button style={style} onClick={() => this.changeCount(-1)}>-</button>
                            {console.log('counter')}
                            <span>{this.state.count}</span>
                            <button style={style} onClick={() => this.changeCount(1)}>+</button>
                        </div>
                )
                }


            </ThemeContext.Consumer>

        )

    }


    changeCount(amount) {


        //SYNCHRONOUS 

        //THIS.STATE.COUNT=0
        this.setState(prevValue => {
            return ({ count: prevValue.count + amount })

        })



    }



}