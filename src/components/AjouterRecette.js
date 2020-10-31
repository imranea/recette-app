import React, { Component } from 'react'

class AjouterRecette extends Component {
  state={
    nom:"",
    image:"",
    ingredients:"",
    instructions:""
  }

  handleChange = event =>{
    const {name,value} = event.target
    this.setState({[name]:value})
  }

  handleSubmit = event =>{
    event.preventDefault();
    const recette = { ...this.state }
    this.props.ajouterRecette(recette)
    //Reset
    Object.keys(recette).forEach(item => {
      recette[item]=""
    })
    this.setState({...recette})
  }

  render () {
    return (
      <div className="card">
        <form className="admin-form ajouter-recette" onSubmit={this.handleSubmit}>
          <input value={this.state.nom} name="nom" type="text" placeholder="Nom de la recette" onChange={this.handleChange}/>
          <input value={this.state.image} name="image"type="text" placeholder="Nom de l'image'" onChange={this.handleChange}/>
          <textarea value={this.state.ingredients} name="ingredients" rows="3" placeholder="Liste des ingrédients" onChange={this.handleChange}/>
          <textarea value={this.state.instructions} name="instructions" rows="3" placeholder="Liste des instructions" onChange={this.handleChange}/>
          <button type="submit"> + Ajouter</button>
        </form>
      </div>
    )
  }
}

export default AjouterRecette
