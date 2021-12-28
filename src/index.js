const movieDisplay = document.getElementById('movie-display')

function fetchMoviesFromAPI() {
    fetch('https://ghibliapi.herokuapp.com/films')
    .then(response => response.json())
    .then(movies => {
        for (const movie of movies) {
            createMovieCard(movie)
        }
    })
}
fetchMoviesFromAPI()

function createMovieCard(movie) {
    let movieCard = document.createElement('div')
    movieCard.className = "movie-card"
    movieCard.id = `${movie.id}-card`
    movieDisplay.appendChild(movieCard)

    let movieTitle = document.createElement('h2')
    movieTitle.className = "movie-title"
    movieTitle.textContent = movie.title
    movieCard.appendChild(movieTitle)

    let movieImg = document.createElement('img')
    movieImg.className = "movie-image"
    movieImg.src = movie.image
    movieCard.appendChild(movieImg)
    
    
}

// function sortByRottenTomatoes

// function sortByRunTime

// function sortByTitle

// function showDescription

// function addToWatchList

// function addToAlreadySeen


