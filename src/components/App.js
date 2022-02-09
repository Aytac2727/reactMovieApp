import React from 'react'
import SearchBar from './SearchBar'
import MovieList from './MovieList'

class App extends React.Component {

    state = {
        movies: [
            {
                "id": 1,
                "name":"Arrow",
                "rating":7.9,
                "overview": "This is a wider card with supporting text below as a natural lead-in to additional content.This is a wider card with supporting text below as a natural lead-in to additional content.",
                "imageUrl": "https://www.themoviedb.org/t/p/w220_and_h330_face/iUYrQyv0p4UncFolsROm81VNbcB.jpg"
            },
            {
                "id":2,
                "name":"Euphoria",
                "rating":6,
                "overview":"Dizi, 17 yaşındaki Rue’nun hikayesi anlatılıyor.. Zendaya’nın hayat verdiği Rue’nun anlattığı hikayeler; seks, kimlik arayışı, travma, sosyal medya, uyuşturucu, aşk ve arkadaşlık gibi temaları ele alıyor.",
                "imageUrl":"https://image.tmdb.org/t/p/w220_and_h330_face/288q0JefZUuTfqUG2qzPTCZYuAL.jpg"
            },
            {
                "id":3,
                "name":"Hollyoaks",
                "rating":8.1,
                "overview":"The daily soap that follows the loves, lives and misdemeanours of a group of people living in the Chester village of Hollyoaks where anything could, and frequently does, happen...",
                "imageUrl":"https://image.tmdb.org/t/p/w220_and_h330_face/bpmLMZP3M1vLujPqHnOTnKVjRJY.jpg"
            }
        ],
        searchQuery : ""
    }

    deleteMovie = (movie)=>{
        const newMovieList = this.state.movies.filter(
            m => m.id !== movie.id
        );
        this.setState(state => ({
            movies: newMovieList
        })) 
    }

    searchMovie = (event)=> {
        //console.log(event.target.value)
        this.setState({searchQuery:event.target.value})
    }

    render()
    {
        let filteredMovies = this.state.movies.filter(
            (movie)=> {
                return movie.name.toLowerCase().indexOf(this.state.searchQuery.toLowerCase()) !== -1
            }
        )
        

        return (
            <div className='container'>
                    <div className='row'>
                        <div className='col-lg-12'>
                            <SearchBar searchMovieProp={this.searchMovie}/>
                        </div>
                    </div>
                    <MovieList 
                    movies = {filteredMovies}
                    deleteMovieProp = {this.deleteMovie}
                    />
            </div>
        )
    }
}
export default App;