import React from 'react'
import ReactDOM from 'react-dom/client'
import UseStateComponent from './hooks/UseStateComponent'
import UseEffectComponent from './hooks/UseEffectComponent'
import UseRefComponent from './hooks/UseRefComponent'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <UseStateComponent />
    <hr />
    <UseEffectComponent />
    <hr />
    <UseRefComponent />
  </React.StrictMode>,
)
