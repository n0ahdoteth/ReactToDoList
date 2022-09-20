import React, { useState } from "react"
import './App.css';
import TaskList from './components/TaskList';
import data from './data/data.json';
import Header from "./components/Header";
import ClearButton from "./components/ClearButton";
import InputForm from "./components/InputForm";

function App() {
	const [taskList, setTaskList] = useState(data);
	const [input, setInput] = useState('');

	const changeEvent = (event) => {
		const {value} = event.target;
			setInput(value)
	}

	const submitTask = (event) => {
		event.preventDefault();
		addItem(input);
		setInput("");
	} 

	const handleToggle = (id) => {
		let mapped = taskList.map(item => {
			return item.id === Number(id) ? {...item, isDone: !item.isDone} : {...item};
		})
		setTaskList(mapped);
	}

	const removeTasks = () => {
		const newTaskList = [];
    setTaskList(newTaskList);
	}

	const addItem = (input) => {
		const taskSize = [...taskList].length;
		const uppercaseInput = input.charAt(0).toUpperCase() + input.slice(1);
		const newTaskList = [
				...taskList, 
				{
					id: taskSize + 1,
					task: uppercaseInput,
					isDone: false
				}
		];
		setTaskList(newTaskList);
	}

	return (
		<div className="App">
			<Header />
		
			<InputForm 
					input={input} 
					submitTask={submitTask} 
					changeEvent={changeEvent}
			/>
			
			<TaskList 
					className="organize-tasks" 
					taskList={taskList} 
					handleToggle={handleToggle} 
					removeTasks={removeTasks} />
		
			{taskList.length ? <ClearButton removeTasks={removeTasks}/> : null} 
		</div>
	);
}

export default App;
