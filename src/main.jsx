import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import '/node_modules/bootstrap/dist/css/bootstrap.css'
import '/node_modules/bootstrap-icons/font/bootstrap-icons.css'
import App from './App.jsx'
import { Provider } from 'react-redux'
import { store } from './store/index.js'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
          <App />
    </Provider>
    
  </StrictMode>,
)
