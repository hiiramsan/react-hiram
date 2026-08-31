async function getMovies() {
    const response = await fetch("https://ghibliapi.vercel.app/films/");
    const data = await response.json();
    return data;
}

getMovies()

function renderMovies(movies) {
    let cardsHTML = "";
    movies.forEach(movie => {
        cardsHTML += `
        <div class="card">
            <div class="rating-badge">${movie.rt_score}</div>
            <img src="${movie.image}" alt="${movie.title}">
            <div class="card-info">
                <h3>${movie.original_title}</h3>
                <p class="subtitle">(${movie.title})</p>
                <p class="director">Director: ${movie.director}</p>
                <p class="release-date">Release Date: ${movie.release_date}</p>
            </div>
        </div>
        `;
    });
    document.getElementById("main-container").innerHTML = cardsHTML;
}

getMovies().then(renderMovies);