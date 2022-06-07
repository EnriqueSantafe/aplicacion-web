import { BrowserRouter as Router } from 'react-router-dom'
import Header from './components/partials/Header'
import Direccionamiento from './components/Direccionamiento'
import Footer from './components/partials/Footer'

const App = () => {
  return (
    <Router>
      <div>
        <Header />
        <Direccionamiento />
        <Footer />
      </div>
    </Router>
  )
}

export default App