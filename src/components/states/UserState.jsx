import React from 'react'

class BookClass extends React.Component
{
   constructor(props)
   {
      super(props);
      this.state = { name : "John Doe" , filiere: "DEVOFS204"};
      this.changerNom = this.changerNom.bind(this);
   }
   
   changerNom(){
    this.setState({name:"Alae", filiere: "DEVOFS202"})
  }

   render() {
      return (
      <div>
         <h1>Name of the Author: {this.state.name} --- {this.state.filiere} </h1>
         <button onClick={this.changerNom}>update</button>
      </div>
      );
   }
}

export default BookClass