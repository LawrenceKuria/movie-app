const global = {
    currentPage: window.location.pathname
}

console.log(global.currentPage)

function highlightActiveLink () {
    const links = document.querySelectorAll('.nav-link')
    links.forEach((link) => {
        if (link.getAttribute('href') === global.currentPage ) {
            link.classList.add('active')
        }
    })
}

async function fetchPopularMovies () {
    const url = 'https://api.themoviedb.org/3/movie/popular'
    const options = {
    method: 'GET',
    headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhZDRlNDU3YmIzMTZiMTFkM2Y4YTZiNDVkZGM4ZDY0MSIsIm5iZiI6MTc1MzA2MjU2OS41ODksInN1YiI6IjY4N2Q5Y2E5MjQyOWQ3NDI5M2Q5OGYxOSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.wEqqs2DzPJSafC1910-6UO4Y4E1BRmDQSZltY800d2Y'
    }
    }
    try {
        const popularMovieRes = await fetch(url, options)
        if (!popularMovieRes.ok) {
            throw new Error("Failed to retrieve popular movies")
        } else {
            const popularMovieData = await popularMovieRes.json()
            return popularMovieData.results
        }
    } catch (error) {
        console.log(error)
    }

}

async function fetchPopularTVShows () {
    const url = 'https://api.themoviedb.org/3/tv/popular'
    const options = {
    method: 'GET',
    headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhZDRlNDU3YmIzMTZiMTFkM2Y4YTZiNDVkZGM4ZDY0MSIsIm5iZiI6MTc1MzA2MjU2OS41ODksInN1YiI6IjY4N2Q5Y2E5MjQyOWQ3NDI5M2Q5OGYxOSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.wEqqs2DzPJSafC1910-6UO4Y4E1BRmDQSZltY800d2Y'
    }
    }
    try {
        const popularTVShowsRes = await fetch(url, options)
        if (!popularTVShowsRes.ok) {
            throw new Error("Failed to retrieve popular movies")
        } else {
            const popularTVShowData = await popularTVShowsRes.json()
            return popularTVShowData.results
        }
    } catch (error) {
        console.log(error)
    }

}

async function fetchMovieByID (id) {
    const url = `https://api.themoviedb.org/3/movie/${id}`
    const options = {
    method: 'GET',
    headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhZDRlNDU3YmIzMTZiMTFkM2Y4YTZiNDVkZGM4ZDY0MSIsIm5iZiI6MTc1MzA2MjU2OS41ODksInN1YiI6IjY4N2Q5Y2E5MjQyOWQ3NDI5M2Q5OGYxOSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.wEqqs2DzPJSafC1910-6UO4Y4E1BRmDQSZltY800d2Y'
    }
    }
    try {
        const movieRes = await fetch(url, options)
        if (!movieRes.ok) {
            throw new Error("Failed to retrieve movie")
        } else {
            const movieDetails = await movieRes.json()
            return movieDetails
        }
    } catch (error) {
        console.log(error)
    }

}

async function displayPopularMovies () {
    const popularMovies = await fetchPopularMovies()
    const popularMoviesGrid = document.getElementById('popular-movies')
    popularMovies.forEach((movie) => {
        //Create movie elements
        const movieCard = document.createElement('div')
        movieCard.classList.add('card')

        const detailLink = document.createElement('a')
        detailLink.setAttribute('href', `movie-details.html?id=${movie.id}`)
        
        const image = document.createElement('img')
        image.setAttribute('src', `https://image.tmdb.org/t/p/original/${movie.poster_path}`)
        image.classList.add('card-img-top')
        image.setAttribute('alt', `Image of ${movie.title}`)

        const cardBody = document.createElement('div')
        cardBody.classList.add('card-body')

        const movieTitle = document.createElement('h5')
        movieTitle.classList.add('card-title')
        movieTitle.textContent = `${movie.title}`

        const cardText = document.createElement('p')
        cardText.classList.add('card-text')

        const releaseDate = document.createElement('small')
        releaseDate.classList.add('text-muted')
        releaseDate.textContent = `Release: ${movie.release_date}`

        //Append movie elements
        movieCard.appendChild(detailLink)
        movieCard.appendChild(cardBody)
        detailLink.appendChild(image)
        cardBody.appendChild(movieTitle)
        cardBody.appendChild(cardText)
        cardText.appendChild(releaseDate)
        popularMoviesGrid.appendChild(movieCard)
    })
}

async function displayPopularTVShows () {
    const popularTVShows = await fetchPopularTVShows()
    const popularTVShowsGrid = document.getElementById('popular-shows')
    popularTVShows.forEach((show) => {
        //Create show elements
        const TVShowCard = document.createElement('div')
        TVShowCard.classList.add('card')

        const detailLink = document.createElement('a')
        detailLink.setAttribute('href', `tv-details.html?id=${show.id}`)
        
        const image = document.createElement('img')
        image.setAttribute('src', `https://image.tmdb.org/t/p/original/${show.poster_path}`)
        image.classList.add('card-img-top')
        image.setAttribute('alt', `Image of ${show.name}`)

        const cardBody = document.createElement('div')
        cardBody.classList.add('card-body')

        const TVShowTitle = document.createElement('h5')
        TVShowTitle.classList.add('card-title')
        TVShowTitle.textContent = `${show.name}`

        const cardText = document.createElement('p')
        cardText.classList.add('card-text')

        const releaseDate = document.createElement('small')
        releaseDate.classList.add('text-muted')
        releaseDate.textContent = `Aired: ${show.first_air_date}`

        //Append show elements
        TVShowCard.appendChild(detailLink)
        TVShowCard.appendChild(cardBody)
        detailLink.appendChild(image)
        cardBody.appendChild(TVShowTitle)
        cardBody.appendChild(cardText)
        cardText.appendChild(releaseDate)
        popularTVShowsGrid.appendChild(TVShowCard)
    })
}

async function displayMovieDetails () {
    const urlParams = new URLSearchParams(window.location.search)
    const movieId = urlParams.get('id')
    
    const currentMovie = await fetchMovieByID(movieId)
    const movieDetails = document.getElementById('movie-details')
    
    //Create movie details
    const topDetails = document.createElement('div')
    topDetails.classList.add('details-top')

    const div1 = document.createElement('div')

    const image = document.createElement('img')
    image.setAttribute('src', `https://image.tmdb.org/t/p/original/${currentMovie.poster_path}`)
    image.classList.add('card-img-top')
    image.setAttribute('alt', `Image of ${currentMovie.title}`)

    const div2 = document.createElement('div')

    const movieTitle = document.createElement('h2')
    movieTitle.textContent = `${currentMovie.title}`

    const paragraph1 = document.createElement('p')

    const rating = document.createElement('i')
    rating.classList.add('fas')
    rating.classList.add('fa-star')
    rating.classList.add('text-primary')
    rating.textContent = `${Math.round(currentMovie.vote_average)} / 10`

    const releaseDate = document.createElement('p')
    releaseDate.classList.add('text-muted')
    releaseDate.textContent = `Release Date: ${currentMovie.release_date}`

    const description = document.createElement('p')
    description.textContent = `${currentMovie.overview}`

    const genres = document.createElement('h5')
    genres.textContent = 'Genres'

    const genreList = document.createElement('ul')
    genreList.classList.add('list-group')

    currentMovie.genres.forEach((genre) => {
        const genreLi = document.createElement('li')
        genreLi.textContent = genre.name
        genreList.appendChild(genreLi)
    })

    const homepage = document.createElement('a')
    homepage.setAttribute('href', currentMovie.homepage)
    homepage.setAttribute('target', '_blank')
    homepage.classList.add('btn')
    homepage.textContent = 'Visit Movie Homepage'

    const bottomDetails = document.createElement('div')
    bottomDetails.classList.add('details-bottom')

    const movieInfo = document.createElement('h2')
    movieInfo.textContent = 'Movie Info'

    const movieInfoList = document.createElement('ul')

    const budget = document.createElement('li')
    budget.innerHTML = `Budget:</span> $${currentMovie.budget}`

    const revenue = document.createElement('li')
    revenue.innerHTML = `Revenue:</span> $${currentMovie.revenue}`

    const runtime = document.createElement('li')
    runtime.innerHTML = `Runtime:</span> ${currentMovie.runtime} min`
    
    const status = document.createElement('li')
    status.innerHTML = `Status:</span> ${currentMovie.status}`

    const productionCompanies = document.createElement('h4')
    productionCompanies.textContent = 'Production Companies'

    const companies = document.createElement('div')
    companies.classList.add('list-group')
    
    companies.textContent = currentMovie.production_companies
    .map(company => company.name)
    .join(', ')

    //Append movie elements

    movieDetails.appendChild(topDetails)
    movieDetails.appendChild(bottomDetails)
    topDetails.appendChild(div1)
    topDetails.appendChild(div2)
    div1.appendChild(image)
    div2.appendChild(movieTitle)
    div2.appendChild(paragraph1)
    div2.appendChild(releaseDate)
    div2.appendChild(description)
    div2.appendChild(genres)
    div2.appendChild(genreList)
    div2.appendChild(homepage)
    bottomDetails.appendChild(movieInfo)
    bottomDetails.appendChild(movieInfoList)
    bottomDetails.appendChild(productionCompanies)
    bottomDetails.appendChild(companies)
    movieInfoList.appendChild(budget)
    movieInfoList.appendChild(revenue)
    movieInfoList.appendChild(runtime)
    movieInfoList.appendChild(status)
}



//Initialize app
function init() {
    switch (global.currentPage) {
        case '/':
        case '/index.html':
            console.log('Home')
            break
        case '/shows.html':
            console.log('Shows')
            break
        case '/movie-details.html':
            console.log('Movie Details')
            break
        case '/tv-details.html':
            console.log('TV details')
            break
        case '/search.html':
            console.log('Search')
            break
    }

    highlightActiveLink()
}

document.addEventListener('DOMContentLoaded', init)
document.addEventListener('DOMContentLoaded', () => {
    if (global.currentPage === '/' || global.currentPage === '/index.html') {
        displayPopularMovies()
    }
})
document.addEventListener('DOMContentLoaded', () => {
    if (global.currentPage === '/shows.html') {
        displayPopularTVShows()
    }
})
document.addEventListener('DOMContentLoaded', () => {
    if (global.currentPage === '/movie-details.html') {
        displayMovieDetails()
    }
})