# Phase 1 Project: Studio Ghibli Movie Guide

![Image](https://saltyworld.net/wp-content/uploads/2021/05/6ab1f919524481da3435a5ee3b1313fac2898c70_sgcollage.jpeg)

## Functional Description:
The Studio Ghibli Movie Guide has three main features. 

First, and most simply, users can learn more about Studio Ghibli in a brief description section.

The main feature of the application is a section that displays each of the films, each in its own individual card. Each card displays the movie's title, release date, running time, *Rotten Tomatoes* Score, and movie poster. The user also has the option to view a brief description of the film and add it to (or remove it from) a watchlist. This watchlist can be seen directly to the right of the movie cards, and remains visible as the user scrolls up or down to view other films. 

Just above the display of all of the movie cards is a dropdown menu that allows users to sort by title, release date, movie length (runtime), or *Rotten Tomatoes* Score. At present, each sort option only works one way (e.g. sorting alphabetically A-Z, but not Z-A). This could easily be expanded to make these functions reversible.

---

# Technical Description
The sleeping *Totoro* GIF is embedded using a video tag; "autoplay", "loop", and "muted" were included in the video tag to permit the functionality shown. 

For the movie cards, all images and information are taken from the Studio Ghibli API with a fetch request upon page load. Cards are created and appended to the main section of the HTML Body with the `createMovieCard` function. 

Each movie's information is contained within an object that is added to an array, moviesArray, as part of the initial function that fetches the information `fetchMoviesFromAPI`. This Array can then be iterated through with the `.sort()` method that is then linked to the dropdown menu.

Each time the movies are sorted, existing movie cards must be removed from the DOM; the movieArray is sorted based on user selection and then new movie cards are created and appended to the DOM in proper order.

The application has three main event listeners:
-To detect if a user wishes to see more information on a given movie.
-To detect if a user wishes to add/remove a film from the watchlist.
-To detect if a user wishes to sort the movies in any fashion. 

Further functionality could be added with a **db.json** file so that the user's watchlist can persist if the page is reloaded. This would better mimic the function of a streaming service with unique users, so that they can have a queue of content to view in the future.

---

## Resources:
[Medium post on the creation of this project](https://medium.com/@aecooksey2651/taking-time-to-appreciate-netflix-reflections-on-my-first-javascript-project-6e4a630af973)

Image at the top of this page taken from [here](https://saltyworld.net/wp-content/uploads/2021/05/6ab1f919524481da3435a5ee3b1313fac2898c70_sgcollage.jpeg)

This application was built using HTML, CSS, and JavaScript.

All film images and information taken from [Studio Ghibli API](https://ghibliapi.herokuapp.com/films)

Sleeping *Totoro* GIF taken from [here](https://thumbs.gfycat.com/OfficialShortDotterel-mobile.mp4)

Studio Ghibli informational paragraph taken from [ghiblicollection.com](https://ghiblicollection.com/about)

To learn more about JavaScript functionality, please visit [JavaScript-MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript)



