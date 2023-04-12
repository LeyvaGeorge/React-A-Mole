import { useState } from 'react';
import './App.css';
import MoleContainer from './components/MoleContainer';

function App() {
  let [score, setScore] = useState(0)
  
  const createMollHill = (numHills = 9) => {
    let hills = [];
    for(let i = 0; i < numHills; i++) {
      hills.push(
        <MoleContainer
        key={i}
        setScore={setScore}
        score={score}/>
      )
    }
    return(
      <div className='mole-hills'>{hills}</div>
    )
  }



  return (
    

    <div className="App">
      <h1>React-a-Mole!</h1>
      <p>{score}</p>
      {createMollHill}
    </div>
  );
}

export default App;
