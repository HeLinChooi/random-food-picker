import React from 'react'

const FoodPanel = ({food}) => {
  return (
    <div className='food-panel'>
      {food.name}
    </div>
  )
}

export default FoodPanel