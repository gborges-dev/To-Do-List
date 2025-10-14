import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import ToDoList from './module/ToDoList'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ToDoList />
  </StrictMode>,
)
