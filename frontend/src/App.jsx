import Footer from './components/Footer'
import { Nav } from './components/navbar'
import Presentation from './components/Presentation'
import Promo from './components/Promo'

function App() {
  return (
    <div className="App">
      <Nav />
      <Promo />
      <Presentation />
      <Footer />
    </div>
  )
}

export default App
