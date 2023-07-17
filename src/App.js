import React, {Component} from 'react';
import CardList from './CardList'; //Anime
import SearchBox from './SearchBox';
import {robots} from './robots';
import {rap} from './rap';
import {pop} from './pop';
import {EDM} from './EDM';
import {rock} from './rock';
import Scroll from './Scroll';




import CardList2 from './CardList2'; //rap
import CardList3 from './CardList3'; //pop
import CardList4 from './CardList4'; //EDM
import CardList5 from './CardList5'; //rock

class App extends Component  {
	constructor() {
		super()
		this.state = {
			rap: rap,
			robots: robots,
			pop: pop,
			EDM: EDM,
			rock: rock,
			searchfield: ''
		}
	}
	onSearchChange= (event) => {
	this.setState({searchfield: event.target.value})
		
		// console.log(filteredRobots);
		
	}
	render() {
		const filteredRap= this.state.rap.filter(rap=>{
			return rap.name.toLowerCase().includes(this.state.searchfield.toLowerCase())
		})
	const filteredRobots= this.state.robots.filter(robots=>{
			return robots.name.toLowerCase().includes(this.state.searchfield.toLowerCase())
		})
	const filteredPop= this.state.pop.filter(pop=>{
			return pop.name.toLowerCase().includes(this.state.searchfield.toLowerCase())
		})
	const filteredEDM= this.state.EDM.filter(EDM=>{
			return EDM.name.toLowerCase().includes(this.state.searchfield.toLowerCase())
		})
	const filteredRock= this.state.rock.filter(rock=>{
			return rock.name.toLowerCase().includes(this.state.searchfield.toLowerCase())
		})

	return (

		
		<div class="scrollmenu" bg white>
  
  <div className='tc'>

		<h1> Music Repository </h1>

		<SearchBox searchChange={this.onSearchChange}/>
		  					<Scroll>

		<h2> Anime </h2>

		<CardList robots={filteredRobots}/>
		<h2>sad!</h2>
		
		<CardList2 rap={filteredRap}/>
		<h2> Instrumental </h2>
		<CardList3 pop={filteredPop}/>
		<h2> EDM </h2>
		<CardList4 EDM={filteredEDM}/>
		<h2> Rock </h2>
		<CardList5 rock={filteredRock}/>
		</Scroll>
		</div>
</div>

		);
	
	}
}


export default App;