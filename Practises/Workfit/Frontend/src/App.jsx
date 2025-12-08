import {BrowserRouter, Routes,Route} from 'react-router-dom'

//pages 
import Home from './Pages/Home'
import Navbar from './Components/Navbar'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar></Navbar>
        <div className="pages">
          <Routes>
              <Route path="/" element={<Home/>}></Route>
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  )
}

export default App
