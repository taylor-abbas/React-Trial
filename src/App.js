import './App.css';
import Header from './Comps/header'
import List from './Comps/list'
import Footer from './Comps/footer'
import AddToDo from './Comps/AddToDo';
import React, { useState } from 'react';

function App() {
	const addToDo = (title, desc)=>{
		console.log("Added task " , title);
		let idx = 0;
		if(list.length === 0) idx = 0;
		else idx = list[idx].key+1;
		const newTodo ={
			key : idx,
			title : title,
			desc : desc
		};
		console.log(newTodo);
		setList([...list , newTodo]);
	}
	const onDelete = (key)=>{
		console.log("Delete task " , key.title);
		setList(list.filter((e)=>{
			return e!== key;
		}))
	}
	const [list, setList] = useState([]);
	return (
		<>
			<Header title = "ToDo App" searchBar = {false}/>
			<div className='mx-3'>
				<AddToDo addToDo={addToDo}/>
				<List list={list} onDelete={onDelete}/>
			</div>
			<Footer/>
		</>
	);
}

export default App;
