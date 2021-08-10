import React, { useState }  from 'react'

export default function AddToDo(props) {
    
    const [title, setTitle] = useState("");
    const [desc, setDesc] = useState("");

    const submit = (e)=>{
        e.preventDefault();
        if(!title || !desc){
            alert("empty title or desc is not defined");
        }else{
            props.addToDo(title, desc);
            // setTitle("");
            // setDesc("");
        }
    }

    return (
    <div className="container my-3">
        <h3>Add a todo</h3>
        <form onSubmit={submit}>
            <div className="mb-3">
                <label htmlFor="title" className="form-label">ToDo Title</label>
                <input type="text" value={title} onChange={(e)=>{setTitle(e.target.value)}} className="form-control" id="title" aria-describedby="emailHelp"/>
            </div>
            <div className="mb-3">
                <label htmlFor="desc" className="form-label">ToDo Desc</label>
                <input type="text" value={desc} onChange={(e)=>{setDesc(e.target.value)}} className="form-control" id="desc" aria-describedby="emailHelp"/>
            </div>
        <button type="submit" className="btn btn-success">Add ToDo</button>
        </form>
    </div>
    )
}
