import { Link } from 'react-router-dom'

function Header() {
  return (
    <header className="header">
      <div className="header-container">
        <Link to="/" className="header-logo">ProductStore</Link>
      </div>
    </header>
  )
}

export default Header
