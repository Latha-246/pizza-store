import { Link } from "react-router-dom";

function Menu() {
  return (
    <>
      <nav className="navbar navbar-expand-lg" style={{ backgroundColor: ' rgb(83, 93, 145' }}> 
        <div className="container-fluid">
         
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/" style={{ color: '#ffffff' }}>Home</Link> {/* White text */}
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/about" style={{ color: '#ffffff' }}>About</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/items" style={{ color: '#ffffff' }}>Items</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/contact" style={{ color: '#ffffff' }}>Contact</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Menu;
