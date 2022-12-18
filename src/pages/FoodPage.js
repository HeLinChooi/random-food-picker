import React, { useRef } from 'react'
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import FoodPanel from '../components/FoodPanel'
import food from '../food.json';

const FoodPage = () => {
  const ref = useRef("");
  const { id } = useParams()
  let navigate = useNavigate();

  function shuffle(array) {
    let currentIndex = array.length, randomIndex;
  
    // While there remain elements to shuffle.
    while (currentIndex !== 0) {
  
      // Pick a remaining element.
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
  
      // And swap it with the current element.
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex], array[currentIndex]];
    }
  
    return array;
  }

  return (
    <div className='container'>
      <div className='title'>KK12 Random Food Picker</div>
      <div className='card-container'>
        <FoodPanel food={shuffle(food)[id]}></FoodPanel>
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