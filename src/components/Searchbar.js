import React from 'react';
import SearchResults from "./searchResults"

class SearchBar extends React.Component {

    //searchbar form to search movie title
    // shows results
    //click result see info this movie 

    render() {

        return (
            <div className="search-container">
                <div className="search-form">
                    <form>
                        <input  type="text" placeholder="Search Movie Title Here..." name="search-input" />
                        <button type="submit">Search</button>
                    </form>
                </div>
                <div className="results-container">
                    <SearchResults name={this.props.name} run_time={this.props.run_time} release_year={this.props.release_year} rating={this.props.rating} />
                </div>
            </div>
        )

    }
}

export default SearchBar;