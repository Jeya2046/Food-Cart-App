import { Route, Routes } from 'react-router-dom'
import './App.css'
import Heater from './Component/Heater'
import Home from './Component/Home'
import Cart from './Component/Cart'

const App = () => {
  return (
    <>
     <Heater />
      <div className="container">
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/cart' element={<Cart />} />
        </Routes>
      </div>
    </>
  )
}

export default App