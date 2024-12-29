
import { Link } from 'react-router-dom';
import recipes from '../data/recipes';

function HomePage() {
  return (
    <div>
      <h1>Recettes</h1>
      <h2>ttt</h2>
      <ul className='recipes-list'>
         
         {recipes.forEach((recipe)=>{
         <li key={recipe.id}>
            <Link to={`/recipe/${recipe.id}`}>{recipe.title}</Link>
          </li>
         })}
         </ul>
         <Link to="/add-recipe" className='new-recipe'>+ Ajouter une nouvelle recette</Link>
         
    </div>
  );
}

export default HomePage;