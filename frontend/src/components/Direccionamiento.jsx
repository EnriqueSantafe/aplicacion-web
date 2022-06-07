import { Routes, Route } from 'react-router-dom'
import Home from './paginas/Home'
import Registro from './paginas/Registro'

const Direccionamiento = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/registro' element={<Registro />} />
    </Routes>
  )
}

export default Direccionamiento