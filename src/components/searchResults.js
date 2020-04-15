import React from 'react';

class SearchResults extends React.Component {
    render() {

        return(
            <div className="results-container">
                <p>Movie Title: {this.props.name}</p>
                <p>Run Time: {this.props.run_time} </p>
                <p>Release Year: {this.props.release_year} </p>
            </div>
        )


    }
}

export default SearchResults;