import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import axios from 'axios'

function App() {
  const [menu, setMenu] = useState([])

  useEffect(() => {
    const API_URL = import.meta.env.VITE_API_URL || '';
    axios.get(`${API_URL}/api/menu`)
      .then((response) => {
        setMenu(response.data)
      })
      .catch((error) => {
        console.log(error)
      })
  }, [])


  return (
    <>
      <section id="center">
        <h1>Hello world</h1>
        <p>Menu : {menu.length}</p>
        {
          menu.map((menu, index) =>(
            <div key={menu.id}>
              <h3>{menu.name}</h3>
              <p>{menu.description}</p>
            </div>
          ))
        }
      </section>
    </>
  )
}

export default App
