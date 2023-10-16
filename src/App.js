import React, { useState } from 'react'
import './App.css';

function App() {
    let [width, setWidth] = useState(200);
    let [height, setHeight] = useState(200);

    const change = () => {
      setWidth(parseInt(width))
      setHeight(parseInt(height))
    }

    const changeWidth = (e) => {
      width = e
    }

    const changeHeight = (e) => {
      height = e
    }

    return (<>
        <div>
          <label htmlFor="">Width: </label>
          <input type='text' onChange={(e) => changeWidth(e.target.value)} />
        </div>
        <div>
          <label htmlFor="">Height: </label>
          <input type='text' onChange={(e) => changeHeight(e.target.value)} />
        </div>
        <div style={{ width: width, height: height, border: "1px solid red" }}></div>
        <div>
            <button onClick={() => change()}>Change</button>
        </div>
    </>
    )
}

export default App;
