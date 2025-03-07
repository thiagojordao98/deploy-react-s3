import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/navbar'

import Home from './pages/Home'
import About from './pages/About'
import Sponser from './pages/Sponser'

function App() {
  return (
    <BrowserRouter>
        <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/sponser" element={<Sponser />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
