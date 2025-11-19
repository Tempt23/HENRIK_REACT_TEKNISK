import './App.css'

import Count from './components/Count';
import {useState} from 'react';

function App() {

  const [count, setCount] = useState(0);

return (
    <>
    <Count count={count} setCount={setCount}/>
    <Count count={count} setCount={setCount}/>
    <Count count={count} setCount={setCount}/>
    </>
  )
 }

export default App
