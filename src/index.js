const movieDisplay = document.getElementById('movie-display')
const watchlist = document.getElementById('watchlist')

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

    let releaseDate = document.createElement('p')
    releaseDate.className = "release-date"
    releaseDate.textContent = `Release Date: ${movie.release_date}`
    movieCard.appendChild(releaseDate)
    
    let runTime = document.createElement('p')
    runTime.className = "run-time"
    runTime.textContent = `Movie Length: ${movie.running_time} minutes.`
    movieCard.appendChild(runTime)

    let rating = document.createElement('p')
    rating.className = "movie-rating"
    rating.textContent = `Rotten Tomatoes Score: ${movie.rt_score}%`
    movieCard.appendChild(rating)

    let watchListButton = document.createElement('button')
    watchListButton.className = "watch-list"
    watchListButton.innerText = "Add to Watch List"
    watchListButton.addEventListener('click', function(evt) {
        let movieName = evt.target.parentNode.firstChild.textContent
        let movieBullet = document.createElement('li')
        movieBullet.className = "watchlist-item"
        movieBullet.innerHTML = movieName
        watchlist.appendChild(movieBullet)
    })
    movieCard.appendChild(watchListButton)
}

// function addToWatchList(movie) {
//     console.log(movie.title)
//     let movieBullet = document.createElement('li')
//     movieBullet.className = "watchlist-item"
//     movieBullet.innerHTML = movie.title
//     watchlist.appendChild(movieBullet)
// }
// function sortByRottenTomatoes

// function sortByRunTime

// function sortByTitle

// function showDescription

// function addToWatchList

// function addToAlreadySeen


