import { Navigate, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Aof from './pages/Aof'
import Calendar from './pages/Calendar'
import About from './pages/About'
import Vsl from './pages/Vsl'
import Shop from './pages/Shop'
import OfferKickstart from './pages/OfferKickstart'
import Blueprint from './pages/Blueprint'
import BlueprintCheckout from './pages/BlueprintCheckout'
import { STRATEGY_CALL_PATH, VSL_ENABLED } from './constants/site'

function App() {
  return (
    <div className="bg-neutral-950 min-h-screen">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/aof" element={<Aof />} />
        <Route path="/about" element={<About />} />
        <Route
          path="/vsl"
          element={VSL_ENABLED ? <Vsl /> : <Navigate to={STRATEGY_CALL_PATH} replace />}
        />
        <Route path="/calendar" element={<Calendar />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/workbook" element={<OfferKickstart />} />
        <Route path="/blueprint" element={<Blueprint />} />
        <Route path="/blueprint/checkout" element={<BlueprintCheckout />} />
      </Routes>
    </div>
  )
}

export default App
