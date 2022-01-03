const movieDisplay = document.getElementById('movie-display')
const watchlist = document.getElementById('watchlist')
const sorter = document.getElementById('sorter')
let moviesArray = []

function fetchMoviesFromAPI() {
    fetch('https://ghibliapi.herokuapp.com/films')
    .then(response => response.json())
    .then(movies => {
        for (const movie of movies) {
            moviesArray.push(movie)
            createMovieCard(movie)
        }
    })
}
fetchMoviesFromAPI()



function loadWatchList() {
    fetch('http://localhost:3000/watchlist_movies')
    .then(response => response.json())
    .then(movies => {
        for (const movie of movies) {
            let movieBullet = document.createElement('li')
            movieBullet.innerHTML = movie.title

        }
    })
    console.log("hello")
}
loadWatchList()

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
    movieImg.alt = `${movie.title} Poster`
    movieImg.title = `${movie.title} Poster`
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
    watchListButton.className = "watchlist-button"
    watchListButton.innerText = "Add to Watchlist"
    watchListButton.addEventListener('click', function(evt) {
        let movieName = evt.target.parentNode.firstChild.textContent
        if (watchListButton.innerText === "Add to Watchlist") {
            // fetch('http://localhost:3000/watchlist_movies'), {
            //     method: "POST",
            //     headers: {
            //         "Content-Type": "application/json",
            //         Accept: "application/json",
            //     },
            //     body: JSON.stringify({
            //         title: `${movieName}`,
            //     })
            // }
            // .then(response => response.json())
            // .then(movie => console.log(movie))

            let movieBullet = document.createElement('li')
            movieBullet.id = `${movieName}-bullet`
            movieBullet.innerHTML = movieName
            watchlist.appendChild(movieBullet)
            watchListButton.innerText = "Remove from Watchlist"

        } else if (watchListButton.innerText === "Remove from Watchlist") {
            // fetch(`http://localhost:3000/watchlist_movies/${movie.id}`), {
            //     method: "DELETE",
            //     headers: {
            //         "Content-Type": "application/json",
            //         Accept: "application/json",
            //     }
            // }
            // .then(response => response.json)
            // .then(data => console.log(data))
            let rightBullet = document.getElementById(`${movieName}-bullet`)
            rightBullet.remove()
            watchListButton.innerText = "Add to Watchlist"
        }
    })
    movieCard.appendChild(watchListButton)

    let movieDescription = document.createElement('button')
    movieDescription.className = "movie-description"
    movieDescription.innerText = "Click to See Description"
    movieDescription.addEventListener('click', function() {
        if (movieDescription.innerText === "Click to See Description") {
            let movieInfo = document.createElement('p')
            console.log(movie.information)
            movieInfo.id = `${movie.title}-information`
            movieInfo.textContent = movie.description
            movieCard.appendChild(movieInfo)
            movieDescription.innerText = "Hide Description"
        } else if (movieDescription.innerText === "Hide Description") {
            movieDescription.innerText = "Click to See Description"
            let textBlock = document.getElementById(`${movie.title}-information`)
            textBlock.remove()
        }
    })
    movieCard.appendChild(movieDescription)
}

sorter.addEventListener('change', function(evt) {
    removeCards()
    if (evt.target.value === "title") {
        sortByTitle()
    } else if (evt.target.value === "date") {
        sortByReleaseDate()
    } else if (evt.target.value === "runtime") {
        sortByRunTime()
    } else if (evt.target.value === "rating") {
        sortByRating()
    }
})

function sortByTitle() {
    moviesArray.sort(titleCompare)
    reRender(moviesArray)
}

function titleCompare(a, b) {
    if (a.title < b.title) {
        return -1
    } else if (a.title > b.title) {
        return 1
    } else if (a.title = b.title) 
        return 0
}

function sortByReleaseDate() {
    moviesArray.sort(dateCompare)
    reRender(moviesArray)
}

function dateCompare(a,b,) {
    if (a.release_date > b.release_date) {
        return -1
    } else if (a.release_date < b.release_date) {
        return 1
    } else if (a.release_date = b.release_date) 
        return 0
}

function sortByRunTime() {
    moviesArray.sort(lengthCompare)
    reRender(moviesArray)
}

function lengthCompare(a,b) {
    if (parseInt(a.running_time) < parseInt(b.running_time)) {
        return -1
    } else if (parseInt(a.running_time) > parseInt(b.running_time)) {
        return 1
    } else if (parseInt(a.running_time) === parseInt(b.running_time)) 
        return 0
}

function sortByRating() {
    moviesArray.sort(ratingCompare)
    reRender(moviesArray)
}

function ratingCompare(a,b) {
    if (parseInt(a.rt_score) > parseInt(b.rt_score)) {
        return -1
    } else if (parseInt(a.rt_score) < parseInt(b.rt_score)) {
        return 1
    } else if (parseInt(a.rt_score) === parseInt(b.rt_score)) 
        return 0
}

function removeCards() {
    const movieCards = document.querySelectorAll('.movie-card')
    for (const card of movieCards) {
        console.log(card)
        card.remove()
    }
}

function reRender(array) {
    for (let i = 0; i < array.length; i++) {
        createMovieCard(array[i])
    }
}

