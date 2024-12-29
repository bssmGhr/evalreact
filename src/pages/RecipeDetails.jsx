
// TODO: Importer `useParams` depuis `react-router-dom`
// TODO: Importer les données depuis `../data/recipes`
import recipes from '../data/recipes';
import {useParams} from 'react-router-dom';
function RecipeDetails() {
  // TODO: Récupérer l'ID de la recette à partir des paramètres d'URL
  // TODO: Rechercher la recette correspondante dans les données
  const {id}=useParams()
  return (
    <div>
      <h1>Détails de la recette</h1>
      {/* TODO: Afficher le titre et la description de la recette */}
      {recipes[id].title}
      {recipes[id].description}
    </div>
  );
}

export default RecipeDetails;