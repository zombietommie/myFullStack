import React from 'react';
import './App.css';
import FirstComponent from './components/learning-examples/FirstComponent';
import SecondComponent from './components/learning-examples/SecondComponent';
import ThirdComponent from './components/learning-examples/ThirdComponent';

function App() {
	return (
		<div className='App'>
			<h1>Tommy's Todo App</h1>
			<FirstComponent></FirstComponent>
			<SecondComponent></SecondComponent>
			<ThirdComponent></ThirdComponent>
		</div>
	);
}

export default App;
