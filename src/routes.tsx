import { BrowserRouter as Router, Routes ,Route }  from 'react-router-dom'

import Home from './pages/apresentacao'
import TrilhaCerta from './pages/trilhaCerta'

export default function Ways() {
    return (
      <Router>
        <Routes>  
          <Route path="/" element={<Home/>} />
          <Route path="/trilhacerta" element={<TrilhaCerta/>} />
        </Routes>
      </Router>
    )
  }
  