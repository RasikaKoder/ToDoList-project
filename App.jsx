import './App.css';
import React, { useState } from 'react';
import ListRender from '../src/ListRender';

const App =()=>{

  const [inputList,setInputList] = useState("");
  const [items, setItems] = useState([]);

  const itemEvent =(e) =>{
    setInputList(e.target.value);
  }

  //add button functionality
  const handleButtton =() =>{
    setItems((oldItems) =>{
      return [...oldItems,inputList];
    });
    //empty the textbar
    setInputList("");

  }
  console.log(items)

    //delete button functionality
  const deleteItems =(id) =>{
    console.log('deleted');

    setItems((oldItems) => {
      return oldItems.filter((arrElem, index) =>{
        return index !== id;
      });
    });
    };
  

  return (
  <>
    <div className='main_div'>
      <div className='center_div'>
        <br/>
        <h1>ToDo List</h1>
        <br/>
        <input type='text' placeholder='add a Items' onChange={itemEvent} value={inputList}></input>
        <button onClick={handleButtton}> + </button>

        <ol>

         { items.map((itemval, index)=>{
            return (
            <ListRender
             key={index}
             id={index}
             data={itemval} 
             onSelect={deleteItems}
            />
            )
           })
         }

        </ol>
      </div>
    </div>
  </>
  );
}

export default App;
