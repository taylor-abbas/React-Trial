import React from 'react'
import ToDo from './todo'

export default function List (props) {
    console.log("list from list.js "  , props.list);
    let listStyle = {
        minHeight : '70vh',
        margin : '40px auto'
    }
    return (
        <div className = "container" style={listStyle}>
            <h3 className="text-center my-3">List do be like</h3>
            <ul>
            {props.list.length !== 0 ? 
                props.list.map((item)=>{
                    // for each element(-item) in list the map function returns the stated value 
                    return(
                        <div key={item.key}>
                        <ToDo todo={item} onDelete={props.onDelete}/><hr/>
                        </div>
                    )
                }):
                <div className="card">
                    <div className="card-body">
                        <h5 className="card-title">No ToDos to Display</h5>
                    </div>
                </div>
            }
            </ul>
        </div>
    )
}
