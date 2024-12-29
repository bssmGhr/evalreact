import React,{useState} from 'react'
import recipes from '../data/recipes';
function AddRecipe() {
  // TODO: Initialiser l'état pour le titre et la description "useState"
  const [title ,setTitle]=useState("")
  const [description, setDescription]=useState("")
  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: Ajouter la logique pour soumettre le formulaire
    recipes.push({
      id:recipes.length,
      title:title,
      description:description
  
  
  })
  };

  return (
    <div>
      <h1>Ajouter une nouvelle recette</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Titre : </label>
          <input type="text" placeholder="Titre" onChange={(e)=> setTitle(e.target.value)}/>
        </div>
        <div>
          <label>Description : </label>
          <textarea placeholder="Description" onChange={(e)=>setDescription(e.target.value)}></textarea>
        </div>
        <button type="submit">Ajouter</button>
      </form>
    </div>
  );
}

export default AddRecipe;