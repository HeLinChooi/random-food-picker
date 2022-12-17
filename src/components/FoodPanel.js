import React from 'react'
import '../App.css';

const FoodPanel = ({ food }) => {
  return (
    <div className='food-panel'>
      <h2>
        {food.name}
      </h2>
      {
        food.imageId !== "" ??
        <img className="image" src={`https://drive.google.com/uc?id=${food.imageId}`} alt={`${food.name}`} />
        // <img className="image" src={require(`../images/${food.image}`)} alt="" />
      }
      <p className='description'>
        {food.description}
      </p>
    </div>
  )
}

export default FoodPanel