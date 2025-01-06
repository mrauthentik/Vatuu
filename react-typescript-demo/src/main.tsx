import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Routes, Route, BrowserRouter } from 'react-router-dom'
import './index.css'
import App from './App.tsx'
import Todo from './components/Todo.tsx'
import FullYear from './components/FullYear.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
     
     <Routes>
      <Route path="/user" element={<App  title='TypeScript Demo'/>} />
      <Route path='/' element={<Todo />}/>
      <Route path='/fullyear' element={<FullYear />}/>
     </Routes>
    
    </BrowserRouter>
    
  </StrictMode>,
)
