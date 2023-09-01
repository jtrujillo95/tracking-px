import React from 'react'
import ReactDOM from 'react-dom/client'
import Main from './components/templates/main/main'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <div className='h-full w-full bg-gray-100 p-10'>
      <Main />
    </div>
  </React.StrictMode>,
)
