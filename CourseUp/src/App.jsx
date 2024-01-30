import './App.css'
import Home from './component/Home/Home'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './component/Header/Header'

function App() {
  return (
    <>
    <Router>
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
      </Routes>
    </Router>
     <div>App is working</div>
    </>
  )
}

export default App
