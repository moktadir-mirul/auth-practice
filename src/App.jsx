
import { Outlet } from 'react-router'
import './App.css'
import NavBar from './NavBar/NavBar'

function App() {


  return (
    <>
      <div>
        <NavBar></NavBar>
        <Outlet></Outlet>
      </div>
    </>
  )
}

export default App
