// import './App.css'
import LandingPage from './views/landingPage/LandingPage'
import Home from './views/home/home'
import Detail from './views/detail/detail'
import Create from './views/create/create'
import { Route, Routes} from 'react-router-dom'

const App = () => {
  return (
    <div >
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/home" element={<Home />} />
        <Route path="/home/:id" element={<Detail />} />
        <Route path="/create" element={<Create />} />
      </Routes>

    </div>
  )
}

export default App
