import './App.css';
import Header from './Comps/header'
import List from './Comps/list'
import Footer from './Comps/footer'
import AddToDo from './Comps/AddToDo';
import React, { useState, useEffect } from 'react';

function App() {
	let initList = [];
	console.log(localStorage.getItem('list'));
	if(localStorage.getItem('list') === null){
		initList = [];
		console.log("NOT FOUND");
	}else{
		initList = localStorage.getItem('list');
		console.log("FOUND");
	}
	const AaddToDo = (title, desc)=>{
		console.log("Added task " , title);
		let idx = 0;
		if(list.length > 0){
			idx = list[list.length - 1].key + 1;
		}
		console.log(idx);
		const newTodo ={
			key : idx,
			title : title,
			desc : desc
		};
		console.log(newTodo);
		setList([...list , newTodo]);
	}
	const onDelete = (task)=>{
		console.log("Delete task " , task.title);
		setList(list.filter((e)=>{
			return e!== task;
		}))
	}
	const [list, setList] = useState([initList]);
	useEffect(() => {
		localStorage.setItem('list', list);
	}, [list]);
	return (
		<>
			<Header title = "ToDo App" searchBar = {false}/>
			<div className='mx-3'>
				<AddToDo addToDo={AaddToDo}/>
				<List list={list} onDelete={onDelete}/>
			</div>
			<Footer/>
		</>
	);
}

export default App;
