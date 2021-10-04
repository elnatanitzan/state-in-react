import React, { Component } from 'react'

export default class ClassComponent2 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: 'Elnatan',
            age: 30
        }
    }

    changeAge = () => {
        this.setState({
            age: this.state.age+1,
        })
        console.log(this.state);
    }

    render() {
        return (
            <div>
               <h2>Hi, my name is {this.state.name}</h2>
               <h2>My age is {this.state.age}</h2>
               <h3 onMouseOver={this.changeAge}>Hover me!</h3>
            </div>
        )
    }
}
