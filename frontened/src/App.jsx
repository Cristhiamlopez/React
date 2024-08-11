import { useState } from 'react'
import './App.css'

function App() {
  const [usuario, setUsuario] = useState('')
  const [contraseña, setContraseña] = useState('')
  const [logueado, setlogueado] = useState(false)

  function cambiarUsuario(evento) {
    setUsuario(evento.target.value)
  }

  function cambiarContraseña(evento) {
    setContraseña(evento.target.value)
  }

  async function Ingresar() {
    try {
      const peticion = await fetch(`http://localhost:3000/login?usuario=${usuario}&contraseña=${contraseña}`)
      if (peticion.ok) {
        alert("Usuario conectado")
        setlogueado(true)
      } else {
        alert('Usuario o contraseña incorrecta')
      }
    } catch (error) {
      console.error('Error al realizar la solicitud:', error)
      alert('Hubo un error al conectar con el servidor')
    }
  }

  return (
    <>
      <h1>Inicio de sesión</h1>
      <input placeholder="Usuario" type="text" name='Usuario' id='Usuario' value={usuario} onChange={cambiarUsuario} />
      <input placeholder='password' type="password" name='Contraseña' id='Contraseña' value={contraseña} onChange={cambiarContraseña} />
      <button onClick={Ingresar}>Ingresar</button>
    </>
  )
}

export default App