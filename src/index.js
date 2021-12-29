const movieDisplay = document.getElementById('movie-display')
const watchlist = document.getElementById('watchlist')
const sorter = document.getElementById('sorter')
const movieCards = document.querySelectorAll('.movie-card')

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
    movieCard.id = `${movie.title}-card`
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
    watchListButton.innerText = "Add to Watchlist"
    watchListButton.addEventListener('click', function(evt) {
        let movieName = evt.target.parentNode.firstChild.textContent
        if (watchListButton.innerText === "Add to Watchlist") {
            let movieBullet = document.createElement('li')
            movieBullet.id = `${movieName}-bullet`
            movieBullet.innerHTML = movieName
            watchlist.appendChild(movieBullet)
            watchListButton.innerText = "Remove from Watchlist"
        } else if (watchListButton.innerText === "Remove from Watchlist") {
            let rightBullet = document.getElementById(`${movieName}-bullet`)
            rightBullet.remove()
            watchListButton.innerText = "Add to Watchlist"
        }
    })
    movieCard.appendChild(watchListButton)

    let movieDescription = document.createElement('p')
    movieDescription.className = "movie-description"
    movieDescription.innerText = "Click to See Description"
    movieDescription.addEventListener('click', function(evt) {
        evt.target.innerText = movie.description
    })
    movieCard.appendChild(movieDescription)

}

sorter.addEventListener('change', function(evt) {
    console.log(evt.target.value)
    // if (evt.target.value === title) {
    //     sortByTitle()
    // } else if (evt.target.value === date) {
    //     sortByReleaseDate()
    // } else if (evt.target.value === runtime) {
    //     sortByRunTime()
    // } else if (evt.target.value === rating) {
    //     sortByRating()
    // }
})
// function addToWatchList(movie) {
//     console.log(movie.title)
//     let movieBullet = document.createElement('li')
//     movieBullet.className = "watchlist-item"
//     movieBullet.innerHTML = movie.title
//     watchlist.appendChild(movieBullet)
// }


function sortByTitle() {

}

function sortByReleaseDate() {

}

function sortByRunTime() {

}

function sortByRating() {

}


