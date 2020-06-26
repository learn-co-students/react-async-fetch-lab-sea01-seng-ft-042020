import React, { Component } from 'react';
import { render } from 'enzyme';

class App extends Component {

    state = {data: []}

    componentDidMount() {
        fetch("http://api.open-notify.org/astros.json").then(resp => resp.json())
        .then(json => this.setState({data: json}))
    }

    render() {
        return (this.state.data)
    }
}



export default App;