function fetchMoviesFromAPI() {
    fetch('https://ghibliapi.herokuapp.com/films')
    .then(response => response.json())
    .then(data => console.log(data))
}
fetchMoviesFromAPI()

function renderMoviesToMovieDisplay

function sortByRottenTomatoes

function sortByRunTime

function sortByTitle

function showDescription

function addToWatchList

function addToAlreadySeen

