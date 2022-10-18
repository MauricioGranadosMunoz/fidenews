import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import './style.scss'
import { store } from './store'
import { NewsApp } from './NewsApp'
import 'animate.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={ store }>
        <NewsApp />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
)