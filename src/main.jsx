import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App';
import './styles/Global.css';
import Theme from './styles/Theme'
import { ThemeProvider } from '@mui/material/styles';



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ThemeProvider theme={Theme}>
      <App />
    </ThemeProvider>
  </StrictMode>,
)




