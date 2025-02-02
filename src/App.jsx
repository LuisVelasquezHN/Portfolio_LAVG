import { Navigate, Route, Routes } from 'react-router-dom'
import { Inicio } from './pages/Inicio'
import { Portada } from './pages/Portada'

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Portada />} />
        <Route path="home" element={<Inicio />} />

        <Route path='/*' element={<Navigate to="/ErrorPage" />} />

      </Routes>
    </>
  )
}

export default App
