import React, { Component } from 'react'
// import PropTypes from 'prop-types';
import { hot } from 'react-hot-loader';

// const App = ({message}) =><h1>Hello from {message}</h1>; 



class App extends Component {

    state = {
        name: '',
        message: "rob"
    };

render() {
    console.log(this.state)

    const { message } = this.state;

    return(
        <div>
        <h1>{message} is a fanny</h1>
        <form>
            <input type="text" name="fname" onChange={this.handleChange}/>
        <input type="submit" onClick={this.handleSubmit}></input>
        </form>
        </div>
    )
}

handleChange = () => {
    this.setState({ name: event.target.value })
    }

handleSubmit = (event) => {
    event.preventDefault();
    const { name } = this.state;
    this.setState({ message: name })
}

}

export default hot(module)(App);