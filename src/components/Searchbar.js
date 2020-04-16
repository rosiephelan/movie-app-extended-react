import React from 'react';
import SearchResults from "./searchResults"

class SearchBar extends React.Component {

    constructor(props){
        super();
        this.state ={
            term:"",
            filmData: {
                Title:"",
                Runtime:"",
                Year:"",
                Rated:"" 
            }
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    getMovieApi = async title => {
        const url = `http://www.omdbapi.com/?t=${title}&apikey=c6cf6f22`;
        const response = await fetch(url).then(
            response => response.json()
        );
        console.log(response)
        return response;
    }

    getMovieData = async title => {
        const result = await this.getMovieApi(title);
        this.setState({filmData: result});
    }

    handleChange(e) {
        this.setState({term:e.target.value});
    }

    handleSubmit(e) {
        e.preventDefault();
        this.getMovieData(this.state.term);
    }

    render() {

        return (
            <div className="search-container">
                <div className="search-form">
                    <form onSubmit={this.handleSubmit}>
                        <input  type="text" placeholder="Search Movie Title Here..." name="search-input" value={this.state.term} onChange={this.handleChange}/>
                        <button type="submit">Search</button>
                    </form>
                </div>
                <div className="results-container">
                    <SearchResults name={this.state.filmData.Title} run_time={this.state.filmData.Runtime} release_year={this.state.filmData.Year} rating={this.state.filmData.Rated} />
                </div>
            </div>
        )

    }
}

export default SearchBar;