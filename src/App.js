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
		// initList = ;
		initList = JSON.parse(localStorage.getItem('list'));
		console.log("FOUND");
	}
	const AaddToDo = (title, desc)=>{
		console.log("Added task " , title);
		let idx = 0;
		for(let i in list){
			idx = Math.max(i.key, idx);
		}
		idx++;
		console.log(idx);
		const newTodo ={
			key : idx,
			title : title,
			desc : desc
		};
		console.log(newTodo, idx);
		// setList([...list , newTodo]);
		setList(list => [...list, newTodo])
	}
	const onDelete = (task)=>{
		console.log("Delete task " , task.title);
		setList(list.filter((e)=>{
			return e!== task;
		}))
	}
	const [list, setList] = useState([initList]);
	useEffect(() => {
		localStorage.setItem('list', JSON.stringify.list);
		// for(let item in localStorage.getItem('list')){
		// 	console.log(item);
		// }
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
