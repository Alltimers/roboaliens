import React, { Component } from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import ErrorBoundry from '../components/ErrorBoundry';
import '../components/SearchBox.css';
import './App.css';



// the RULE:
// PROPS are simply things that come out of STATE, so a parent feeds STATE into
// a child component and as soon as the child component receives a 'state', it's a 'property'(PROP)


class App extends Component {
	constructor() {
		super()
		this.state = {
			robots: [],
			searchfield:''
		}
	}

	componentDidMount() {
		fetch('https://jsonplaceholder.typicode.com/users')
			.then(response => response.json())
			.then(users => this.setState({ robots: users }));
	}

	onSearchChange = (event) => {
		this.setState({ searchfield:event.target.value })
}
	render() {
		const { robots, searchfield } = this.state;
		const filteredRobots = robots.filter(robot => {
			return robot.name.toLowerCase().includes(searchfield.toLowerCase());
	})
		return !robots.length ? 
		<h1 className='tc'>Loading</h1> :
		(
			<div className='tc'>
				<h1 className='f1' id='titleMargin'>Robo<span>Aliens</span></h1>
				<h5 className='f2' id='alienTitleMargin'><span>RoboA</span>liens</h5>
				<SearchBox id='round' searchChange={this.onSearchChange}/>
				<Scroll>
					<ErrorBoundry>
						<CardList robots={filteredRobots}/>
					</ErrorBoundry>
				</Scroll>
			</div>
		);	
	}	
}

export default App;