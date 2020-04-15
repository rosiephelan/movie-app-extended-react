import React from 'react';
import './App.css';
import HomePage from './components/HomePage';
import SearchBar from './components/Searchbar';

class App extends React.Component {
      
  constructor(props){
    super(props);
    this.state = {
      filmData: null
    };
  }
  
  componentDidMount() {
    this.filmApi();
  }
 

  filmApi = (term) => {
    term = "sheep"
    const url = `http://www.omdbapi.com/?t=${term}&apikey=c6cf6f22`
  fetch(url).then(
    response => response.json().then(
      result =>
      this.setState(
        {
          filmData: result
        }
      )
    )
    );
    }
  
    render() {
      const { filmData } = this.state;
      if (!filmData) {                                        
        return <div>Loading...</div>; 
      }  else {
        return (
          <div>

            <HomePage />
            <SearchBar name={filmData.Title} run_time={filmData.Runtime} release_year={filmData.Released}/>

          </div>
        )
      }
  }
}



export default App;
