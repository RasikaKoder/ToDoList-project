import React from 'react';
import './App.css';

const ListRender = (props) =>{

    return(
        <>
            <div className="todo_style">
                <button 
                className='fa fa-times' 
                aria-hidden='true'
                onClick ={() =>{
                        props.onSelect(props.id);
                    }}
                >-</button>
            <li> {props.data} </li>
            </div>
        </>
    );
}

export default ListRender;