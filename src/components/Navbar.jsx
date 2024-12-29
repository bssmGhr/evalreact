
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Accueil</Link>
        </li>
        <li>
          <Link to="/add-recipe">Ajouter une recette</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;