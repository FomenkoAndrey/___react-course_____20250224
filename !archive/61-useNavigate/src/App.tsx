import { BrowserRouter, Route, Routes } from 'react-router'
import Home from './components/Home'
import About from './components/About'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
  )
}
export default App
