import {Routes, Route}from 'react-router';
import Task1_1 from './Task1_1';
import Task1_2 from './Task1_2';
import Task1_3 from './Task1_3';
import Home from '../Home';




const WebRouting = () => {
  return (
    <Routes>
      
        <Route path="/" element={<Home/>}/>
        <Route path="/task1" element={<Task1_1/>}/>
        <Route path="/task2" element={<Task1_2/>}/>
        <Route path="/task3" element={<Task1_3/>}/>
    </Routes>
  )
}

export default WebRouting