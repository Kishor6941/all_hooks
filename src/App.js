import React from 'react';
import './App.css';
import useCounterThreeHook from './Components/useCounterThreeHook';
import Form1 from './Components/Pratice_code/Form1';
import Button_event from './Components/Pratice_code/Button_event';
import Ref1 from './Components/Pratice_code/Ref1';
import useEffectHook1 from './Components/useEffectHook1';
import cleanClass from './Components/cleanClass';
import HookMouse from './Components/HookMouse';
import Mouseclean from './Components/Mouseclean';
import IntervalClassCounter from './Components/IntervalClassCounter';
import IntervalHookCounter from './Components/IntervalHookCounter';
import DataFetching from './Components/DataFetching';

function App() {
  return (
    <div className="App">
{/*       <HookMouse /> 
 */}     
{/*  <Mouseclean />
 */}
{/*   <IntervalClassCounter />
 */}  
 {/* <IntervalHookCounter />  */}
 <DataFetching />
 </div>
  );
}

export default App;
