import React,{useState, useEffect} from 'react';
import CardList from '../Components/CardList';
import SearchBox from '../Components/SearchBox';
import Scroll from '../Components/Scroll';
import ErrorBoundry from'../Components/ErrorBoundry';
import './App.css';


function App() {
	const [robots, setRobots] = useState([]);
	const [searchfield, setSearchfield] = useState("");
	const [count, setCount] = useState(0);


useEffect(()=>{
	fetch("https://jsonplaceholder.typicode.com/users")
	.then(response => response.json())
	.then(users => setRobots(users));

},[])

const filteredRobots = robots.filter(robot =>{
		return robot.name.toLowerCase().includes(searchfield.toLowerCase());
})	


const onSearchChange = (event) =>{
	setSearchfield(event.target.value)

}
	return(
		<div className='tc'>
			<h1 className='f1'>RoboFriends</h1>
			<button onClick={() => setCount(count+1)}>Click me!</button>
			<SearchBox searchChange={onSearchChange}/>
			<Scroll>
				<ErrorBoundry>
					<CardList robots={filteredRobots}/>
				</ErrorBoundry>
			</Scroll>
		</div>
	);
}
	
export default App;	


