const useGenre = (selectedGenres) => {
    if(selectedGenres.length < 1){
        return ""

    }
    const GenreIds = selectedGenres.map((g) =>{ return g.id});
    return GenreIds.reduce((acc,curr) => {
        return (acc + "," + curr);
    });
}

export default useGenre;