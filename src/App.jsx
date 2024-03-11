import { Routes, Route } from 'react-router-dom';
import './App.css';
import CardList from './Routes/CardList';
import Card from './Routes/Card';
import Home from './Routes/Home';

function App() {
	return (
		<Routes>
			<Route path='/' element={<Home />} />
			<Route path='/cards' element={<CardList />} />
			<Route path='/cards/:cardName' element={<Card />} />
		</Routes>
	);
}

export default App;
