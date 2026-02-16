import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Layout from './components/getInTouch'
import Home from './components/pages/Home'
import Projects from './components/pages/project/Projects'

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  )
}

export default App
