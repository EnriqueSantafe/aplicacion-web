import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer>
      <div class="container">
        <footer class="py-3 my-4">
          <ul class="nav justify-content-center border-bottom pb-3 mb-3">
            <li class="nav-item">
              <Link to="/" class="nav-link px-2 text-muted">Home</Link>
            </li>
            <li class="nav-item">
              <Link to="/registro" class="nav-link px-2 text-muted">Registro</Link>
            </li>
          </ul>
          <p class="text-center text-muted">&copy; 2022 Company, Inc</p>
        </footer>
      </div>
    </footer>
  )
}

export default Footer