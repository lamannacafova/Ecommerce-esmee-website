import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import "../src/assets/sass/style.scss"
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.js"
import { Provider } from 'react-redux'
import { store } from './redux/Store.jsx'
import "./i18n/i18n.jsx"

ReactDOM.createRoot(document.getElementById('root')).render(
 <Provider store={store}>
     <React.StrictMode>
    <App />
  </React.StrictMode>
 </Provider>
)
