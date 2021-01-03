import SearchBox from './SearchBox';
import React, {Component} from 'react';
import CardList from './CardList';
import Scroll from './Scroll'
import ErrorBoundary from './ErrorBoundary';
import './App.css'
import './index.css'

class App extends Component{
    constructor(){
        super()
        this.state = {
            robots : [],
            searchfield:''
        }
    }

    componentDidMount(){
        fetch('https://jsonplaceholder.typicode.com/users').then(response=>response.json())
        .then(users=>this.setState({robots:users}));
    }

    OnSearchChange = (event) => {
        this.setState({searchfield: event.target.value})
    }
    render(){
        const filteredRobots = this.state.robots.filter(robots =>{
            return robots.name.toLowerCase().includes(this.state.searchfield.toLowerCase())
        })
        return(
            <div className='tc'>
                
                <h1>RoboFriends</h1>
                <SearchBox searchChange = {this.OnSearchChange}/>
                <Scroll>
                    <ErrorBoundary>
                        <CardList robots={filteredRobots}/>
                    </ErrorBoundary>
                </Scroll>
                
                
            </div>
        )
    }

}

export default App;