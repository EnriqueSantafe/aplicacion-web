import { useState } from 'react'
import axios from 'axios'

const Registro = () => {
  const [input, setInput] = useState({
    nombre: '',
    email: '',
    contraseña: ''
  })
  const handleChange = (e) => { //cambia el valor por el que escribe el usuario
    /* console.log(e) */
    /* console.log(input) */
    const {name, value} = e.target
    setInput(prevInput => { //guarda el valor previo
      return {
        ...prevInput,
        [name]: value
      }
    })
  }
  const handleClick = (e) => { //se activa cuando se pulsa el botón
    /* console.log(e) */
    e.preventDefault()
    const nuevoUsuario = { //crea objeto para pasarlo al servidor
      nombre: input.nombre,
      email: input.email,
      contraseña: input.contraseña
    }
    axios.post('/registrar', nuevoUsuario) // pasa los datos al servidor o base de datos
  }
  return (
    <div className='container micontenedor'>
      <h1>Registro</h1>
      <p>A continuación puedes registrarte</p>
      <main className="form-signin w-100 m-auto">
        <form>
          <div className="form-floating">
            <input onChange={handleChange} name='nombre' value={input.name} type="text" className="form-control" id="floatingInput" placeholder="name@example.com" />
            <label htmlFor="floatingInput">Nombre</label>
          </div>
          <div className="form-floating">
            <input onChange={handleChange} name='email' value={input.email} type="email" className="form-control" id="floatingInput" placeholder="name@example.com" />
            <label htmlFor="floatingInput">Email address</label>
          </div>
          <div className="form-floating mb-3">
            <input onChange={handleChange} name='contraseña' value={input.contraseña} type="password" className="form-control" id="floatingPassword" placeholder="Password" />
            <label htmlFor="floatingPassword">Password</label>
          </div>
          <button onChange={handleClick} className="w-100 btn btn-lg btn-primary" type="submit">Registrar</button>
          <p className="mt-5 mb-3 text-muted text-center">&copy; 2017–2022</p>
        </form>
      </main>
    </div>
  )
}

export default Registro