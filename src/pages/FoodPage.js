import React, { useRef } from 'react'
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import FoodPanel from '../components/FoodPanel'
import food from '../food.json';

const FoodPage = () => {
  const ref = useRef("");
  const { id } = useParams()
  let navigate = useNavigate();

  return (
    <div className='container'>
      <div className='card-container'>
        <FoodPanel food={food[id]}></FoodPanel>
      </div>
      <div className='button-container'>

        <button className='button-1' onClick={()=>{
          // redirect to home page
          navigate('/')
        }}>Pick Again</button>
      </div>
      <div className={ref.current}></div>
    </div>
  )
}

export default FoodPage