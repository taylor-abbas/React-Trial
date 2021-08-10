import React from 'react'
import ToDo from './todo'

export default function List (props) {
    let listStyle = {
        minHeight : '70vh',
        margin : '40px auto'
    }
    return (
        <div className = "container" style={listStyle}>
            <h3 className="text-center my-3">List do be like</h3>
            {props.list.length !== 0 ? 
                props.list.map((item)=>{
                    // for each element(-item) in list the map function returns the stated value 
                    return(
                        <>
                        <ToDo key={item.key} todo={item} onDelete={props.onDelete}/><hr/>
                        </>
                    )
                }):
                <div className="card">
                    <div className="card-body">
                        <h5 className="card-title">No ToDos to Display</h5>
                    </div>
                </div>
            }
        </div>
    )
}
