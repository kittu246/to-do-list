import React,{useState} from 'react'
import ItemList from './ItemList';
let arr=[];
const Form = () => {

    function setLocalStorage (items){

        localStorage.setItem("list",JSON.stringify(items))
    }
    function getLocalStorage (){
        const list = localStorage.getItem("list")
        if(list){
            return JSON.parse(localStorage.getItem("list"))
        }
        else{ // if there  will be no list . somehow user refreshed the local storage they we will get fatal error so if and else part is important
            return [];
        }
    }

    const[userInput,setUserInput] = useState("");
    const[items,setItems] = useState(getLocalStorage())

    function editItems (id){
       const newItems = items.map((item)=>{
            if(item.id == id){

                const newItem = {...item,completed:!item.completed}
                return newItem;
            }
            return item;
        })
    setItems(newItems);
    setLocalStorage(newItems);

    }

    function deleteItems (id){


    const filteredArr = items.filter((ele) =>{
        return ele.id!= id
    })
    setItems(filteredArr);
    setLocalStorage(filteredArr);
    }
   

    function handleSubmit(e){
        e.preventDefault();
        if(!userInput){
            alert("enter Value");
            return;
        }

       

        const itemObj ={
            name:userInput,
            completed:false,
            id:Date.now()

        }

      
            
        
       

        
            
            const newAddedList = [...items,itemObj]; // please don't forget to destructure
            setItems(newAddedList);
            setLocalStorage(newAddedList);  // local storage need toto called when ever we are changing the list
            setUserInput(" ");
      

        

        

    }



  return (
    <section    className='form_main'>
    <h1>Grocery Bud</h1>
    <form  onSubmit={handleSubmit}>
        <input type='text'  onChange={(e)=>{setUserInput(e.target.value)}} value={userInput} />
        <button type='submit'>Add Item</button>
    </form>
    <div className='itemInfo'>
    {items && <ItemList items={items} deleteItems={deleteItems} editItems={editItems}/> }
    </div>
    
    </section>
  )
}

export default Form