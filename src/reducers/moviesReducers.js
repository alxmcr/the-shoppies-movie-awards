const initialMoviesReducer = {
    moviesNominated: []
}

const moviesReducer = (state, action) => {
    const { moviesNominated } = state;
    const { type, payload } = action;
    switch (type) {
        case "MOVIE_NOMINATES":
            const findMovieById = ({ imdbID }) => payload.imdbID === imdbID;
            const isNominateYet = moviesNominated.find(movie =>
                findMovieById(movie));

            if (isNominateYet) return state;

            return { moviesNominated: [...moviesNominated, payload] };
        case "MOVIE_REMOVES":
            const filterMovieRemoved = ({ imdbID }) => {
                return payload.imdbID !== imdbID;
            }
            return { moviesNominated: moviesNominated.filter(filterMovieRemoved) };
        default:
            return state;
    }
}

export { initialMoviesReducer, moviesReducer }