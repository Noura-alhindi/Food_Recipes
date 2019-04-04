import React, { Component } from 'react';
import './App.css';
import Nav from './Nav'
import Recipe from './Recipe';


class App extends Component {
  state={
    recipeShow :[]
  }
  // function for user search to get a recipe as user Input ...
  handleSearch=input =>{
    const url = `https://www.food2fork.com/api/search?key=ae4094d32b86720d5ae572f751c926d0&q=${input}&count=27 `
    fetch(url).then(response => {
      response.json().then(data => {
      console.log(data) // take a look at what you get back!
        
      // console.log();
      
        this.setState({recipeShow: data.recipes})
      })
      }
    )
  }
  
  componentDidMount= () => {
      // api key1 a66b740af013fda9a5b735cd25a08f14
      // api key2 ae4094d32b86720d5ae572f751c926d0 
      // api key3 903d1a52f97c8d79bb5008bdf73e8e48
      // api key4 21fe3157728163bad920b76b86ffe824
    const url = 'https://www.food2fork.com/api/search?key=ae4094d32b86720d5ae572f751c926d0'
    fetch(url).then(response => {
      response.json().then(data => {
      console.log(data) // take a look at what you get back!
        
      // console.log();
      
        this.setState({recipeShow: data.recipes})
      })
      }
    )
  }

  render() {
    // map() for show every elements in array
      const recipes= this.state.recipeShow.map(recipe=> {
        return  <Recipe recipes ={recipe} />
      })
      console.log(recipes) 
      return (
        
        <div className="App">
      <Nav search={this.handleSearch} />
      {recipes}
        </div>
      );
  }
}

export default App;
