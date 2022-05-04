import { BrowserRouter as Router, Routes ,Route }  from 'react-router-dom'

import Home from './pages/home'
import Grupos from './pages/grupos'

export default function Ways() {
    return (
      <Router>
        <Routes>  
          <Route path="/" element={<Home/>} />
          <Route path="/grupos" element={<Grupos/>} />
        </Routes>
      </Router>
    )
  }
  