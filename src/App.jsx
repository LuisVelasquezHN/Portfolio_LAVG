import { Navigate, Route, Routes } from 'react-router-dom'
import { Inicio } from './pages/Inicio'
import { Portada } from './pages/Portada'
import { UseTheme } from './components/UseTheme';

function App() {
  const [darkMode, setDarkMode] = UseTheme();
  return (
    <>
      <Routes>
        <Route path="/" element={<Portada darkMode={darkMode} setDarkMode={setDarkMode} />} />
        <Route path="home" element={<Inicio darkMode={darkMode} setDarkMode={setDarkMode} />} />

        <Route path='/*' element={<Navigate to="/ErrorPage" />} />

      </Routes>
    </>
  )
}

export default App
