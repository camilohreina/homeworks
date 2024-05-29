import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import FirstApp from './FirstApp'
import ComponentApp from './ComponentApp'
import GiftExpertApp from './GiftExpertApp'
import AddCategory from './components/AddCategory'
import getGifs from './components/getGifs'
import GifGrid from './components/GifGrid'
import { GifItem } from './components/GifItem'
import { TodoApp } from './components/TodoApp'
import { TodoReducer } from './components/TodoReducer'
import useCounter from './CustomHooks/useCounter'
import { BreakingBadQuotes } from './BreakingBadQuotes'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BreakingBadQuotes/>
  </React.StrictMode>,
)