import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import './main.css'

// PAGES
import Home from './pages/Home'


function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
      </Routes>
    </Router>
  )
}

export default App
