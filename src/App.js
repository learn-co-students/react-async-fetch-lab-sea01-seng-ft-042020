// create your App component here
import React, { Component } from 'react'

class App extends Component {

    state = {
        spacePeople: []
    }
    
    componentDidMount () {
        
        fetch("http://api.open-notify.org/astros.json")
        .then(resp => resp.json())
        .then(data => this.setState({
            spacePeople: data.people
        }))
    }

    render(){
        return(<div>Hi from App</div>)
    }

}

export default App