import { Navigate, Route, Routes } from 'react-router-dom'
import { Inicio } from './pages/Inicio'
import { Portada } from './pages/Portada'
import { UseTheme } from './components/UseTheme';
import { OtrosProyectos } from './pages/OtrosProyectos';
import ErrorPage from './pages/ErrorPage';

function App() {
  const [darkMode, setDarkMode] = UseTheme();
  return (
    <>
      <Routes>
        <Route path="/" element={<Portada darkMode={darkMode} setDarkMode={setDarkMode} />} />
        <Route path="home" element={<Inicio darkMode={darkMode} setDarkMode={setDarkMode} />} />
        <Route path="projects" element={<OtrosProyectos darkMode={darkMode} setDarkMode={setDarkMode} />} />
        <Route path="ErrorPage" element={<ErrorPage />} />

        <Route path='/*' element={<Navigate to="/ErrorPage" />} />

      </Routes>
    </>
  )
}

export default App
