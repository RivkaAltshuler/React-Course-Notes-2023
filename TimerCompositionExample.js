\\ can be run in https://react.dev/learn/installation#try-react

import { useState, useEffect } from 'react';

function createTimer() {
    return{
        secondsPassed: 0,
        increase() {
            this.secondsPassed += 1
        },
        reset() {
            this.secondsPassed = 0
        }
    }
}


function Timer({ children }) {
   const [timer, setTimer] = useState(createTimer());

   useEffect(() => {
    const intervalId = setInterval(() => {
		setTimer({...timer, secondsPassed: timer.secondsPassed+1 });
     
    }, 1000);
    return () => clearInterval(intervalId);
  });
  
   return (
    <>
      {children({secondsPassed: timer.secondsPassed,
        reset: ()=>setTimer({...timer,secondsPassed:0 })})}
    </>
  );
  


}


export default function App() {
  return   <div>
  <Timer>
          {({ secondsPassed, reset }) => {
            return  <button onClick={() => 
     reset()}>Seconds passed:
     {secondsPassed}</button>;
  
          }}
  
        </Timer>

    <Timer>
          {({ secondsPassed, reset }) => {
            return  <div onClick={() => 
     reset()}>Seconds passed:
     {secondsPassed}</div>;
  
          }}
  
        </Timer>
  </div>
}
