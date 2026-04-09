import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Calendar from './pages/Calendar'
import About from './pages/About'

function App() {
  return (
    <div className="bg-neutral-950 min-h-screen">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/calendar" element={<Calendar />} />
      </Routes>
    </div>
  )
}

export default App
