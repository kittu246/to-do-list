import React from 'react';
import Item from './Item';

const ItemList = ({items,deleteItems,editItems} ) => {
    console.log(items) 
    console.log(deleteItems)
  return (

    <>
    {items.map((item) => {
        return <Item key={item.id} item={item} deleteItems={deleteItems} editItems={editItems} />
    })}
    </>
  )
}

export default ItemList