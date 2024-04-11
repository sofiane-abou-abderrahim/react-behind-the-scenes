import { useState } from 'react';

import ConfigureCounter from './components/Counter/ConfigureCounter.jsx';
import Counter from './components/Counter/Counter.jsx';
import Header from './components/Header.jsx';
import { log } from './log.js';

function App() {
  log('<App /> rendered');

  const [chosenCount, setChosenCount] = useState(0);

  function handleSetCount(newCount) {
    setChosenCount(newCount);
    // setChosenCount(chosenCount + 1);
    setChosenCount(prevChosenCount => prevChosenCount + 1);
    console.log(chosenCount); // won't work
  }

  return (
    <>
      <Header />
      <main>
        <ConfigureCounter onSet={handleSetCount} />
        <Counter key={chosenCount} initialCount={chosenCount} />
      </main>
    </>
  );
}

export default App;
