import {Routes,Route} from "react-router-dom"
import Screen from "./pages/screen"
import './App.css'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Screen />} />
    </Routes>
  )
}

export default App
