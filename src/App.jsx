import './App.css'
import Home from './components/Home/Home'
import { Routes, Route } from 'react-router-dom'
import Projects from './components/Projects/Projects'


function App() {
  return (
      <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/projects' element={<Projects />} />
      </Routes>
  )}

export default App
