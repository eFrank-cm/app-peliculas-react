import React from 'react'
import ReactDOM from 'react-dom/client'
import { BuscadorPelis } from './BuscadorPelis'
import './styles/movieSearch.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BuscadorPelis></BuscadorPelis>
  </React.StrictMode>,
)
