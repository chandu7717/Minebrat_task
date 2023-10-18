import React, { useEffect, useRef, useState } from 'react';
import Cities from '../component/Cities';

function States() {
  const[states, setStates] = useState([]);
  let [selectedState,setSelectedState]=useState("select a state")
  useEffect(() => {
    const fetchStates = async () => {
      try {
        const response = await fetch('/api/v1/states');
        let data= await response.json()
        setStates(data)
      } catch (error) {
        console.error('Error:', error);
      }
    };
    fetchStates();
  }, []);

  

  return (
    <div className="App">
      <h1>PLEASE SELECT ANY OPTION</h1>
      <ul>
      <select  name="" value={states} id="states" onChange={(e)=>{setSelectedState(e.target.value)}} >
        <option value="">{selectedState}</option>
        {states.map((item, index) => (
            <option value={item.stateName} key={index}>{item.stateName}</option>
        ))}
      </select>

      <Cities id={states} state={selectedState} className="city"/>
      </ul>
    </div>
  );
}

export default States;
