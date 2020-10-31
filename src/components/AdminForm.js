import React from 'react'

const AdminForm =({id:key,majRecette,deleteRecette,recettes})=> {

    const handleChange = (event,key) =>{
        const {name,value} = event.target
        const recette = recettes[key]
        recette[name]=value
        majRecette(key,recette)
    }

    const handleSubmit = (event,key) =>{
        event.preventDefault();
        deleteRecette(key)
    }

    return (
      <div className="card">

        <form className="admin-form" onSubmit={(e)=>handleSubmit(e,key)}>

          <input name="nom" type="text" value={recettes[key].nom} onChange={(e)=>handleChange(e,key)} placeholder="Nom de la recette"/>
          <input  name="image"type="text" value={recettes[key].image} onChange={(e)=>handleChange(e,key)} placeholder="Nom de l'image"/>
          <textarea  name="ingredients" rows="3" value={recettes[key].ingredients} onChange={(e)=>handleChange(e,key)} placeholder="Liste des ingrédients" />
          <textarea  name="instructions" rows="3" value={recettes[key].instructions} onChange={(e)=>handleChange(e,key)} placeholder="Liste des instructions"/>
          <button type="submit">Supprimer</button>
        </form>
      </div>
    )
}

export default AdminForm
