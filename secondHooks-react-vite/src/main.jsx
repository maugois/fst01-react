import React from 'react'
import ReactDOM from 'react-dom/client'
import UseStateComponent from './hooks/UseStateComponent'
import UseEffectComponent from './hooks/UseEffectComponent'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <UseStateComponent />
    <hr />
    <UseEffectComponent />
  </React.StrictMode>,
)
