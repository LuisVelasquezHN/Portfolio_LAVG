import { Navigate, Route, Routes } from 'react-router-dom'
import { Inicio } from './pages/Inicio'
import { Portada } from './pages/Portada'
import { OtrosProyectos } from './pages/OtrosProyectos';
import { AllProjects } from './pages/AllProjects';
import ErrorPage from './pages/ErrorPage';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Portada />} />
        <Route path="home" element={<Inicio />} />
        <Route path="projects" element={<OtrosProyectos />} />
        <Route path="all-projects" element={<AllProjects />} />
        <Route path="ErrorPage" element={<ErrorPage />} />

        <Route path='/*' element={<Navigate to="/ErrorPage" />} />

      </Routes>
    </>
  )
}

export default App
