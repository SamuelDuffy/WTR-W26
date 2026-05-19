import './NavBar.css'

function NavBar() {
  return (
    <nav className="navbar">
      <div className="nav-title">Samuel Duffy</div>
      <div className="nav-links">
        <a href="#home">Home</a>
        <a href="#experience">Experience</a>
        <a href="#side-quests">Side Quests</a>
      </div>
    </nav>
  )
}

export default NavBar
