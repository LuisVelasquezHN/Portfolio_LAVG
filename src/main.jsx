import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import "./i18n";
// Supports weights 100-900
import '@fontsource-variable/onest';
import { BrowserRouter } from 'react-router-dom';

ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
  <BrowserRouter>
    <App />
  </BrowserRouter>
  // </React.StrictMode>
);
