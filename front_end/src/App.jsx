import './App.css'
// React Dom Router
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home'
import Planner from './pages/Planner'
import Goal from './pages/Goal'
import Tips from './pages/Tips'
import Result from './pages/Result'


function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/planner" element={<Planner />} />
        <Route path="/goal" element={<Goal />} />
        <Route path="/tips" element={<Tips />} />
        <Route path="/result" element={<Result />} />
      </Routes>
    </>
  )
}

export default App
