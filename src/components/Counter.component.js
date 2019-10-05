import React, {Component} from 'react';

class Counter extends Component {

    state = {count: 0,};


    incCount = () => this.setState(prevState => ({count: prevState.count + 1,}));
    // incrementCounter = () => this.setState({count: this.state.count +1});
    // discrementCounter = () => this.setState({count: this.state.count -1});
    disCount = () => this.setState(prevState => ({count: prevState.count - 1,}));

    resetCounter = () => this.setState({count: this.state.count = 0})

    render() {
        const { count } = this.state;

        return (
            <div className="button" className="Count-content">
            <div><p>Stan: {count}</p></div>
            <div>            
            <button className="button" onClick={this.incCount}>+</button>
            <button className="button" onClick={this.disCount}>-</button>
            <button className="button"  onClick={this.resetCounter}>reset</button>
            </div>
            </div>
        )

    }
}


export default Counter;