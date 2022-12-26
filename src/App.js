import { useState } from 'react';
import './App.css';

function App() {

  const [value, setValue] = useState(1)

  const [value2, setValue2] = useState(0)

  function changeHandler(e) {
    setValue(e.target.value)
  }

  function changeHandler2(e) {
    setValue2(e.target.value)
  }



  return (

    <div className="App">
          <input  
            type="radio" 
            name="radio"
            value='1'
            checked={value === '1' ? true : false}
            onChange={changeHandler}
          />1 radio

          <input 
            type="radio" 
            name="radio"
            value='2'
            checked={value === '2' ? true : false}
            onChange={changeHandler}
          /> 2 radio

          <input 
            type="radio" 
            name="radio"
            value='3'
            checked={value === '3' ? true : false}
            onChange={changeHandler}
          /> 3 radio

          <p> Значение : {value}</p>

          <br />
          <br />
          <hr />

          <input  
            type="radio" 
            name="radio"
            value='1'
            checked={value2 === '1' ? true : false}
            onChange={changeHandler2}
          /> Java

          <input 
            type="radio" 
            name="radio"
            value='2'
            checked={value2 === '2' ? true : false}
            onChange={changeHandler2}
          /> Go

          <input 
            type="radio" 
            name="radio"
            value='3'
            checked={value2 === '3' ? true : false}
            onChange={changeHandler2}
          /> Ruby

      <p>Favorite language: 
        {value2 === '1' && 'Java'}
        {value2 === '2' && 'Go'}
        {value2 === '3' && 'Ruby'}
        </p>
    </div>
  );
}

export default App;
