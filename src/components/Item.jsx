import React from 'react';
import { useState } from 'react';

const Item = ({item,deleteItems,editItems}) => { // never pass {item},{deleteItems}
    console.log(item.name)

    const[check,setChecked]= useState(item.completed)
  return (
    <div className='singleItem'>
      <div className='item'>
        
        
        <input type='checkbox' value={check} onChange={() =>{setChecked(!check) ,editItems(item.id)}}/>
        
        {check? <strike><p>{item.name}</p></strike> :<p>{item.name}</p>}
        </div>
        <button onClick={()=>{deleteItems(item.id)}}>Delete</button>
    </div>
  )
}

export default Item