const global = {
    currentPage: window.location.pathname,
    search: {
        term: '',
        type: '',
        page: 1,
        totalPages: 1,
        totalResults: 0
    }
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

function showAlert (message, className = 'error') {
    const alertMsg = document.createElement('div')
    alertMsg.classList.add('alert', className)
    alertMsg.appendChild(document.createTextNode(message))
    document.getElementById('alert').appendChild(alertMsg)

    setTimeout(() => {
        document.getElementById('alert').remove()
    }, 2000)
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
        showSpinner()
        const popularMovieRes = await fetch(url, options)
        if (!popularMovieRes.ok) {
            hideSpinner()
            throw new Error("Failed to retrieve popular movies")
        } else {
            const popularMovieData = await popularMovieRes.json()
            hideSpinner()
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
        showSpinner()
        const popularTVShowsRes = await fetch(url, options)
        if (!popularTVShowsRes.ok) {
            hideSpinner()
            throw new Error("Failed to retrieve popular movies")
        } else {
            const popularTVShowData = await popularTVShowsRes.json()
            hideSpinner()
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
        showSpinner()
        const movieRes = await fetch(url, options)
        if (!movieRes.ok) {
            hideSpinner()
            throw new Error("Failed to retrieve movie")
        } else {
            const movieDetails = await movieRes.json()
            hideSpinner()
            return movieDetails
        }
    } catch (error) {
        console.log(error)
    }
}

async function fetchNowPlaying () {
    const url = 'https://api.themoviedb.org/3/movie/now_playing';
    const options = {
    method: 'GET',
    headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhZDRlNDU3YmIzMTZiMTFkM2Y4YTZiNDVkZGM4ZDY0MSIsIm5iZiI6MTc1MzA2MjU2OS41ODksInN1YiI6IjY4N2Q5Y2E5MjQyOWQ3NDI5M2Q5OGYxOSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.wEqqs2DzPJSafC1910-6UO4Y4E1BRmDQSZltY800d2Y'
    }
    }
    try {
        showSpinner()
        const nowPlayingRes = await fetch(url, options)
        if (!nowPlayingRes.ok) {
            hideSpinner()
            throw new Error("Failed to retrieve movies playing now")
        } else {
            const nowPlayingData = await nowPlayingRes.json()
            hideSpinner()
            return nowPlayingData
        }
    } catch (error) {
        console.log(error)
    }

}

function showSpinner () {
    document.querySelector('.spinner').classList.add('show')
}

function hideSpinner () {
    document.querySelector('.spinner').classList.remove('show')
}

async function fetchTVShowByID (id) {
    const url = `https://api.themoviedb.org/3/tv/${id}`
    const options = {
    method: 'GET',
    headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhZDRlNDU3YmIzMTZiMTFkM2Y4YTZiNDVkZGM4ZDY0MSIsIm5iZiI6MTc1MzA2MjU2OS41ODksInN1YiI6IjY4N2Q5Y2E5MjQyOWQ3NDI5M2Q5OGYxOSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.wEqqs2DzPJSafC1910-6UO4Y4E1BRmDQSZltY800d2Y'
    }
    }
    try {
        showSpinner()
        const TVShowRes = await fetch(url, options)
        if (!TVShowRes.ok) {
            hideSpinner()
            throw new Error("Failed to retrieve TV Show")
        } else {
            const TVShowDetails = await TVShowRes.json()
            hideSpinner()
            return TVShowDetails
        }
    } catch (error) {
        console.log(error)
    }
}

async function searchAPIData () {
    const url = `https://api.themoviedb.org/3/search/${global.search.type}?query=${global.search.term}&page=${global.search.page}`
    const options = {
    method: 'GET',
    headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhZDRlNDU3YmIzMTZiMTFkM2Y4YTZiNDVkZGM4ZDY0MSIsIm5iZiI6MTc1MzA2MjU2OS41ODksInN1YiI6IjY4N2Q5Y2E5MjQyOWQ3NDI5M2Q5OGYxOSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.wEqqs2DzPJSafC1910-6UO4Y4E1BRmDQSZltY800d2Y'
    }
    }
    try {
        showSpinner()
        const searchRes = await fetch(url, options)
        if (!searchRes.ok) {
            hideSpinner()
            throw new Error(`Failed to retrieve ${global.search.type} data`)
        } else {
            const searchData = await searchRes.json()
            hideSpinner()
            return searchData
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

async function displayNowPlaying () {
    const nowPlaying = await fetchNowPlaying()
    const swiperWrapper = document.querySelector('.swiper-wrapper')

    nowPlaying.results.forEach((movie) => {
        const swiperSlide = document.createElement('div')
        swiperSlide.classList.add('swiper-slide')
        
        const anchor = document.createElement('a')
        anchor.setAttribute('href', `movie-details.html?id=${movie.id}`)
        
        const ratingText = document.createElement('h4')
        ratingText.classList.add('swiper-rating')
        
        const image = document.createElement('img')
        image.setAttribute('src', `https://image.tmdb.org/t/p/w500/${movie.poster_path}`)
        image.setAttribute('alt', `${movie.title}`)

        const ratingIcon = document.createElement('i')
        ratingIcon.classList.add('fas')
        ratingIcon.classList.add('fa-star')
        ratingIcon.classList.add('text-primary')
        ratingIcon.textContent = ` ${Math.round(movie.vote_average)} / 10`
        
        swiperWrapper.appendChild(swiperSlide)
        swiperSlide.appendChild(anchor)
        swiperSlide.appendChild(ratingText)
        anchor.appendChild(image)
        ratingText.appendChild(ratingIcon)

    })
    initSwiper()
}

async function search () {
    const urlParams = new URLSearchParams(window.location.search)
    global.search.type = urlParams.get('type')
    global.search.term = urlParams.get('search-term')

    if (global.search.term !== '' && global.search.term !== null) {
        const { results, total_pages, page, total_results } = await searchAPIData()
        global.search.page = page
        global.search.totalPages = total_pages
        global.search.totalResults = total_results
        
        if (results.length === 0) {
            showAlert(`No ${global.search.type} found`)
            return
        } else {
            displaySearchResults(results)
            document.getElementById('search-term').value = ''
        }
    } else {
        showAlert('Please enter a search term')
    }
}

function displaySearchResults (results) {
    const searchResults = document.getElementById('search-results')
    searchResults.innerHTML = ''
    if (document.getElementById('search-results-heading')) {
        document.getElementById('search-results-heading').innerHTML = ''
    }
    if (document.getElementById('pagination')) {
        document.getElementById('pagination').innerHTML = ''
    }
    results.forEach((result) => {
        const searchResult = document.createElement('div')
        searchResult.classList.add('card')
        
        const anchor = document.createElement('a')
        anchor.setAttribute('href', `${global.search.type}-details.html?id=${result.id}`)
        
        const body = document.createElement('div')
        body.classList.add('card-body')

        const image = document.createElement('img')
        image.setAttribute('src', `https://image.tmdb.org/t/p/original/${result.poster_path}`)
        image.classList.add('card-img-top')
        image.setAttribute('alt', `Image of ${global.search.type === 'movie' ? result.title : result.name}`)

        const title = document.createElement('h5')
        title.textContent = `${global.search.type === 'movie' ? result.title : result.name}`

        const paragraph = document.createElement('p')
        paragraph.classList.add('card-text')

        const small = document.createElement('small')
        small.classList.add('text-muted')
        small.textContent = `Release: ${global.search.type === 'movie' ? result.release_date : result.first_air_date}`

        //Append
        searchResults.appendChild(searchResult)
        searchResult.appendChild(anchor)
        searchResult.appendChild(body)
        anchor.appendChild(image)
        body.appendChild(title)
        body.appendChild(paragraph)
        paragraph.appendChild(small)

        document.getElementById('search-results-heading').innerHTML = `<h2>${results.length} of ${global.search.totalResults} results for ${global.search.term}</h2>`
    })
    displayPagination()
}

function displayPagination () {
    const div = document.createElement('div')
    div.classList.add('pagination')
    div.innerHTML = `<button class="btn btn-primary" id="prev">Prev</button>
          <button class="btn btn-primary" id="next">Next</button>
          <div class="page-counter">Page ${global.search.page} of ${global.search.totalPages}</div>`

    document.getElementById('pagination').appendChild(div)

    if (global.search.page === 1) {
        document.getElementById('prev').disabled = true
    }

    if (global.search.page === global.search.totalPages) {
        document.getElementById('next').disabled = true
    }
    document.getElementById('next').addEventListener('click', async () => {
        global.search.page++
        const { results, total_pages } = await searchAPIData()
        displaySearchResults(results)
    })
    document.getElementById('prev').addEventListener('click', async () => {
        global.search.page--
        const { results, total_pages } = await searchAPIData()
        displaySearchResults(results)
    })
}

function initSwiper () {
    const swiper = new Swiper('.swiper', {
        slidesPerView: 1,
        spaceBetween: 30,
        freeMode: true,
        loop: true,
        autoplay: {
            delay: 4000,
            disableOnInteraction: false
        },
        breakpoints: {
            500: {
                slidesPerView: 2
            },
            700: {
                slidesPerView: 3
            },
            1200: {
                slidesPerView: 4
            },
        }
    })
}

async function displayMovieDetails () {
    const urlParams = new URLSearchParams(window.location.search)
    const movieId = urlParams.get('id')
    
    const currentMovie = await fetchMovieByID(movieId)
    const movieDetails = document.getElementById('movie-details')
    const backdropUrl = `url(https://image.tmdb.org/t/p/original/${currentMovie.backdrop_path})`
    
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
    rating.textContent = ` ${Math.round(currentMovie.vote_average)} / 10`

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
    budget.innerHTML = `<span>Budget:</span> $${(Math.round(currentMovie.budget / 1000000) * 1000000).toLocaleString('en-US')}`

    const revenue = document.createElement('li')
    revenue.innerHTML = `<span>Revenue:</span> $${(Math.round(currentMovie.revenue / 1000000) * 1000000).toLocaleString('en-US')}`

    const runtime = document.createElement('li')
    runtime.innerHTML = `<span>Runtime:</span> ${currentMovie.runtime} minutes`
    
    const status = document.createElement('li')
    status.innerHTML = `<span>Status:</span> ${currentMovie.status}`

    const productionCompanies = document.createElement('h4')
    productionCompanies.textContent = 'Production Companies'

    const companies = document.createElement('div')
    companies.classList.add('list-group')
    
    companies.textContent = currentMovie.production_companies
    .map(company => company.name)
    .join(', ')

    //Append movie elements
    document.querySelector('.backdrop-overlay').style.backgroundImage = backdropUrl
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
    paragraph1.appendChild(rating)
    bottomDetails.appendChild(movieInfo)
    bottomDetails.appendChild(movieInfoList)
    bottomDetails.appendChild(productionCompanies)
    bottomDetails.appendChild(companies)
    movieInfoList.appendChild(budget)
    movieInfoList.appendChild(revenue)
    movieInfoList.appendChild(runtime)
    movieInfoList.appendChild(status)
}

async function displayTVShowDetails () {
    const urlParams = new URLSearchParams(window.location.search)
    const TVShowId = urlParams.get('id')
    
    const currentTVShow = await fetchTVShowByID(TVShowId)
    const TVShowDetails = document.getElementById('show-details')
    const backdropUrl = `url(https://image.tmdb.org/t/p/original/${currentTVShow.backdrop_path})`
    
    //Create movie details
    const topDetails = document.createElement('div')
    topDetails.classList.add('details-top')

    const div1 = document.createElement('div')

    const image = document.createElement('img')
    image.setAttribute('src', `https://image.tmdb.org/t/p/original/${currentTVShow.poster_path}`)
    image.classList.add('card-img-top')
    image.setAttribute('alt', `Image of ${currentTVShow.name}`)

    const div2 = document.createElement('div')

    const movieTitle = document.createElement('h2')
    movieTitle.textContent = `${currentTVShow.name}`

    const paragraph1 = document.createElement('p')

    const rating = document.createElement('i')
    rating.classList.add('fas')
    rating.classList.add('fa-star')
    rating.classList.add('text-primary')
    rating.textContent = ` ${Math.round(currentTVShow.vote_average)} / 10`

    const releaseDate = document.createElement('p')
    releaseDate.classList.add('text-muted')
    releaseDate.textContent = `Release Date: ${currentTVShow.first_air_date}`

    const description = document.createElement('p')
    description.textContent = `${currentTVShow.overview}`

    const genres = document.createElement('h5')
    genres.textContent = 'Genres'

    const genreList = document.createElement('ul')
    genreList.classList.add('list-group')

    currentTVShow.genres.forEach((genre) => {
        const genreLi = document.createElement('li')
        genreLi.textContent = genre.name
        genreList.appendChild(genreLi)
    })

    const homepage = document.createElement('a')
    homepage.setAttribute('href', currentTVShow.homepage)
    homepage.setAttribute('target', '_blank')
    homepage.classList.add('btn')
    homepage.textContent = 'Visit Show Homepage'

    const bottomDetails = document.createElement('div')
    bottomDetails.classList.add('details-bottom')

    const TVShowInfo = document.createElement('h2')
    TVShowInfo.textContent = 'Show Info'

    const TVShowInfoList = document.createElement('ul')

    const numEpisodes = document.createElement('li')
    numEpisodes.innerHTML = `<span>Number of Episodes:</span> ${currentTVShow.number_of_episodes}`

    const lastEpisode = document.createElement('li')
    lastEpisode.innerHTML = `<span>Last Episode to Air:</span> ${currentTVShow.last_episode_to_air.name}`
    
    const status = document.createElement('li')
    status.innerHTML = `<span>Status:</span> ${currentTVShow.status}`

    const productionCompanies = document.createElement('h4')
    productionCompanies.textContent = 'Production Companies'

    const companies = document.createElement('div')
    companies.classList.add('list-group')
    
    companies.textContent = currentTVShow.production_companies
    .map(company => company.name)
    .join(', ')

    //Append movie elements
    document.querySelector('.backdrop-overlay').style.backgroundImage = backdropUrl
    TVShowDetails.appendChild(topDetails)
    TVShowDetails.appendChild(bottomDetails)
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
    paragraph1.appendChild(rating)
    bottomDetails.appendChild(TVShowInfo)
    bottomDetails.appendChild(TVShowInfoList)
    bottomDetails.appendChild(productionCompanies)
    bottomDetails.appendChild(companies)
    TVShowInfoList.appendChild(numEpisodes)
    TVShowInfoList.appendChild(lastEpisode)
    TVShowInfoList.appendChild(status) 
}


//Initialize app
function init() {
    switch (global.currentPage) {
        case '/':
        case '/index.html':
            displayNowPlaying()
            displayPopularMovies()
            break
        case '/shows.html':
        case '/shows':
            displayPopularTVShows()
            break
        case '/movie-details.html':
            displayMovieDetails()
            break
        case '/tv-details.html':
            displayTVShowDetails()
            break
        case '/search.html':
            search()
            break
    }

    highlightActiveLink()
}

document.addEventListener('DOMContentLoaded', init)