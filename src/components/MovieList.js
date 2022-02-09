import React from "react";

const MovieList = (props) => {
   
    function handleClick(){
        return console.log("button clicked")
    }

        return (
            <div className="container">
                <div className="row">

                 {props.movies.map((movie) => (
                    <div className="col-lg-4" key={movie.id}>
                        <div className="card mb-4 shadow-sm">
                            <img src={movie.imageUrl} className="card-img-top" alt={movie.name} />
                            <div className="card-body">
                                <h5 className="card-title">{movie.name}</h5>
                                <p className="card-text">{movie.overview}</p>
                                <div className="d-flex justify-content-between align-items-center">
                                    <button type="button" onClick={(e)=> props.deleteMovieProp(movie)} className="btn btn-md btn-outline-danger">Delete</button>
                                    <h3><span className="badge bg-primary">{movie.rating}</span></h3>
                                </div>
                            </div>
                        </div>
                    </div>
                 ))}                    
                </div>
            </div>
        )
}

export default MovieList;