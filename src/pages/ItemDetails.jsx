
import React from 'react'
import { useLoaderData } from 'react-router'
import Detail from './Detail';

function ItemDetails() {
  const data = useLoaderData();
  const details = data.meals;
  return (
    <div className='container mx-auto my-8 p-3'>
      {
        details.map(details => <Detail details={details} key={details.idMeal}/>)
      }
    </div>
  )
}

export default ItemDetails
