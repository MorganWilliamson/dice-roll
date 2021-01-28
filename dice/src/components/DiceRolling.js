import React from "react";

const Die = (props) => {
    return(
        <button className="die" value={props.value} onClick={props.update} key={Die}>
            d{props.value}
        </button>
    )
};

const Multiplier = (props) => {
    return(
        <input className="multiplier" type="number" pattern="[0-9]*" min="1" max="10" placeholder="1" onChange={props.update} />
    )
};

const Result = (props) => {
    return(
        <p className="result">{props.result}</p>
    )
};


export default class Roller extends React.Component {
    constructor() {
        super();
        this.state = {
            multiplier: 1,
            result: 0, 
            dice: [2, 4, 6, 8, 10, 12, 20]
        };
        this.dieMultiplier = this.dieMultiplier.bind(this);
        this.rollTotal = this.rollTotal.bind(this);
    };

    // Roll Total
    renderResult() {
        return(
            <Result result={this.state.result} />
        )
    };

    // Multiplier
    renderMultiplier() {
        return(
            <Multiplier value={this.state.multiplier} update={this.dieMultiplier} />
        )
    };

    // Dice
    renderDice() {
        let toRender = [];
        let dice = this.state.dice;
        for (let i = 0; i < dice.length; i++){
            toRender.push(
                <Die value={dice[i]} update={this.rollTotal} />
            )
        }
        return toRender;
    };

    // Calculate Total
    rollTotal(e) {
        let multiplier = this.state.multiplier;
        let value = e.target.value;
        let result = 0;
        let random = () => {
            return Math.floor(Math.random() * value) + 1;
        }

        for (let i = 0; i < multiplier; i++) {
            result += random();
        }

        this.setState({
            result: result,
        })
    };

    // Adjust Multiplier
    dieMultiplier(e) {
        this.setState({
            multiplier: e.target.value
        })
    };

    render() {
        return (
            <div className="wrapper">
                <div className="multiplier-container">
                    {this.renderMultiplier()}
                </div>

                <div className="dice-container">
                    {this.renderDice()}
                </div>
                
                <div className="result-container">
                    {this.renderResult()}
                </div>
            </div>
        )
    }
}
