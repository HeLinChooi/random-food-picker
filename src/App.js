import './App.css';
import Card from './components/Card';
import food from './food.json';
import { useEffect, useRef, useState } from 'react';
import { useNavigate } from "react-router-dom";
import editIcon from './icons/edit.png'
import plusIcon from './icons/plus.png'

function App() {
  const [curIdx, setCurIdx] = useState(Math.floor(Math.random() * food.length));
  const [curFrequency, setCurFrequency] = useState(0);
  const [curSpeedSetIdx, setcurSpeedSetIdx] = useState(0);
  const [startPicking, setStartPicking] = useState(false);
  const [timingLimit, setTimingLimit] = useState([10, 8, 5, 2]);
  const ref = useRef("");
  let navigate = useNavigate();

  useEffect(() => {
    console.log('curSpeedSetIdx < timingLimit.length', curSpeedSetIdx < timingLimit.length);
    if (startPicking && curSpeedSetIdx < timingLimit.length) {
      const id = setTimeout(() => {
        setCurIdx(curIdx + 1);
        if (curFrequency < timingLimit[curSpeedSetIdx]) {
          setCurFrequency(curFrequency + 1)
        } else {
          setCurFrequency(0);
          setcurSpeedSetIdx(curSpeedSetIdx + 1);
        }
      }, 1000 / timingLimit[curSpeedSetIdx]);
      return () => {
        clearInterval(id);
      }
    } else {
      // stop here
      console.log('curSpeedSetIdx', curSpeedSetIdx)
      if (curSpeedSetIdx !== 0) {
        revealFood();
        setStartPicking(false);
        setTimeout(() => {
          navigate(`/result/${curIdx % food.length}`);
        }, 2000);
      }
    }
  }, [curIdx, startPicking])

  function resetRandomPicker() {
    setStartPicking(true);
    setcurSpeedSetIdx(0);
    const newTimingSet = [10, 7 + Math.floor(Math.random() * 2), 4 + Math.floor(Math.random() * 2), 2];
    setTimingLimit(newTimingSet)
  }

  function revealFood() {
    ref.current = "white-screen"
  }

  const openInNewTab = url => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className='container'>
      <div className='title'>KK12 Random Food Picker</div>
      <div className='card-container'>
        {
          food.map((oneFood, idx) => {
            return <Card key={oneFood.name} lightUp={idx === curIdx % food.length}></Card>
          })
        }
      </div>
      <div className='button-container'>
        <button className='button-1' onClick={resetRandomPicker}>Pick One!</button>
      </div>
      <div className={ref.current}></div>
      <button className='fab fab-1' onClick={() => openInNewTab("https://docs.google.com/forms/d/e/1FAIpQLSfnLD5KzVx_EBUy_454ZhPyXTwyESpWUpRv8edzrWVY1A8V1A/viewform?usp=sf_link")}>
        <img className='img-button' src={plusIcon} alt="add food option" />
      </button>
      <button className='fab fab-2' onClick={() => openInNewTab("https://docs.google.com/forms/d/e/1FAIpQLSeBiNePsifF4nb5ZPh3uUsbtGQctwc8vvy0fYhQjnBmuDLVSw/viewform?usp=sf_link")}>
        <img className='img-button' src={editIcon} alt="add feedback" />
      </button>
    </div>
  );
}

export default App;
