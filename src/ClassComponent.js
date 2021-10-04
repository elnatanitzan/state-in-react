import React, { Component } from 'react';
import './ClassComponent.scss';

export default class ClassComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            brand: 'TOYOTA',
            color: 'Grey',
            year: 2021
        }
    }

    randomColor = () => {
        const colorList = ['red', 'green', 'blue', 'yellow', 'pink', 'purple', 'gold', 'brown', 'grey', 'orange'];
        const randomNumber = Math.random() * colorList.length;
        const colorRandomIndex = Math.floor(randomNumber);
        this.newColor = colorList[colorRandomIndex];
    }

    changeColor = () => {
        this.randomColor(this.newColor);
        console.log(this.newColor);
        this.setState({
            color: this.newColor,
        })
    }
    render() {
        return (
            <div>
                <h2>My {this.state.brand}</h2>
                <p>
                    Is a <h3 style={{color: this.newColor}}>{this.state.color}</h3> from {this.state.year}
                </p>
                <button onClick={this.changeColor} style={{background: this.newColor}}>Change color</button>
            </div>
        )
    }
};

// export default ClassComponent;
