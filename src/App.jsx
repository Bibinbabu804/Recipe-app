
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Sidebar from './Components/Sidebar'
import HomePage from './Pages/HomePage'
import FavortitesPage from './Pages/FavortitesPage'

function App() {
 

  return (
    <>
   <div className='flex'>
    
    <Sidebar/>
    <Routes>
      <Route path="/" element={<HomePage/>} />
      <Route path='/favorites' element={<FavortitesPage/>} />

    </Routes>



   </div>
  
    
    </>
  )
}

export default App
