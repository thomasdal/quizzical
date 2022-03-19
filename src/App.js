import React, { useState } from 'react'
import Frontpage from './components/Frontpage'
import Quiz from './components/Quiz'

function App() {
  const [isStarted, setIsStarted] = useState(false)

  function start(){
    setIsStarted(true)
  }

  return (
    <div className="App">
      <main className='content'>
        {isStarted ?
        <Quiz/> :
          <Frontpage start={start}/>}
        </main>
    </div>
  );
}

export default App;
