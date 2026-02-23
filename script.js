// script.js — Movie Stream App

const movies = [
  {
    title: "Tron: Ares",
    year: 2025,
    genre: "Sci-Fi, Action",
    description: "The next chapter in the Tron saga, following a new digital adventure.",
    poster: "thumbnails/tron_ares.jpg",
    imdbUrl: "https://www.imdb.com/title/tt6604188/",
    trailer: "https://www.youtube.com/watch?v=YShVEXb7-ic",
    director: "Joachim Rønning",
    writers: "Jesse Wigutow",
    stars: "Jared Leto, Greta Lee, Evan Peters"
  },
  {
    title: "F1",
    year: 2025,
    genre: "Sport, Drama",
    description: "A Formula One driver comes out of retirement to mentor and team up with a younger driver.",
    poster: "thumbnails/f1.jpg",
    imdbUrl: "https://www.imdb.com/title/tt16311594/",
    trailer: "https://www.youtube.com/watch?v=69ffwl-8pCU",
    director: "Joseph Kosinski",
    writers: "Joseph Kosinski, Ehren Kruger",
    stars: "Brad Pitt, Damson Idris, Javier Bardem"
  },
  {
    title: "Train Dreams",
    year: 2025,
    genre: "Drama",
    description: "A logger and railroad worker leads a life of unexpected depth and beauty in early 20th-century America.",
    poster: "thumbnails/train_dreams.jpg",
    imdbUrl: "https://www.imdb.com/title/tt29768334/",
    trailer: "https://www.youtube.com/watch?v=_Nk8TrBHOrA",
    director: "Clint Eastwood",
    writers: "Denis Johnson (novel)",
    stars: "Joel Edgerton, Felicity Jones, William H. Macy"
  },
  {
    title: "Lilo & Stitch",
    year: 2026,
    genre: "Family, Comedy, Sci-Fi",
    description: "A young girl's close encounter with the galaxy's most wanted extraterrestrial.",
    poster: "thumbnails/lilo_stitch.jpg",
    imdbUrl: "https://www.imdb.com/title/tt11032374/",
    trailer: "https://www.youtube.com/watch?v=VWqJifMMgZE",
    director: "Dean Fleischer Camp",
    writers: "Chris Kekaniokalani Bright",
    stars: "Maia Kealoha, Sydney Agudong, Zach Galifianakis"
  },
  {
    title: "Heart Eyes",
    year: 2025,
    genre: "Horror, Romance",
    description: "A serial killer known as the Heart Eyes Killer terrorizes couples on Valentine's Day.",
    poster: "thumbnails/heart_eyes.jpg",
    imdbUrl: "https://www.imdb.com/title/tt32558992/",
    trailer: "https://www.youtube.com/watch?v=1cRzZcMlJh8",
    director: "Josh Ruben",
    writers: "Phillip Murphy, Christopher Landon",
    stars: "Olivia Holt, Mason Gooding, Devon Sawa"
  }
];

// IMDb SVG logo URL
const IMDB_ICON = 'https://upload.wikimedia.org/wikipedia/commons/6/69/IMDB_Logo_2016.svg';
// YouTube SVG logo URL
const YT_ICON = 'https://upload.wikimedia.org/wikipedia/commons/0/09/YouTube_full-color_icon_%282017%29.svg';

// ───── Build Movie Cards ─────
const movieGrid = document.getElementById('movieGrid');

function renderMovies(filter = '') {
  movieGrid.innerHTML = '';
  const noResults = document.getElementById('noResults');
  const query = filter.toLowerCase().trim();

  const filtered = movies.filter(m =>
    !query ||
    m.title.toLowerCase().includes(query) ||
    m.genre.toLowerCase().includes(query) ||
    m.description.toLowerCase().includes(query) ||
    m.director.toLowerCase().includes(query) ||
    m.stars.toLowerCase().includes(query)
  );

  if (filtered.length === 0) {
    noResults.classList.remove('d-none');
    return;
  }
  noResults.classList.add('d-none');

  filtered.forEach((movie) => {
    const idx = movies.indexOf(movie);
    const col = document.createElement('div');
    col.className = 'col-12 col-sm-6 col-md-4 col-lg-3 animate-card';

    col.innerHTML = `
      <div class="card movie-card h-100 shadow-sm border-0">
        <img src="${movie.poster}" alt="${movie.title}" class="card-img-top" data-idx="${idx}" title="Click for details">
        <div class="card-body d-flex flex-column">
          <h5 class="card-title d-flex align-items-center mb-1">
            <img src="${IMDB_ICON}" alt="IMDb" class="imdb-icon">
            ${movie.title} (${movie.year})
          </h5>
          <span class="badge bg-secondary mb-2 align-self-start"><i class="bi bi-tag-fill me-1"></i>${movie.genre}</span>
          <p class="card-text flex-grow-1">${movie.description}</p>
          <div class="d-flex gap-2 mt-auto flex-wrap">
            <button class="btn btn-imdb details-btn" data-idx="${idx}" title="View IMDb details">
              <img src="${IMDB_ICON}" alt="IMDb" class="imdb-icon"> Details
            </button>
            <a href="${movie.trailer}" target="_blank" class="btn btn-youtube" title="Watch on YouTube">
              <img src="${YT_ICON}" alt="YouTube" class="youtube-icon"> Trailer
            </a>
          </div>
        </div>
      </div>
    `;

    movieGrid.appendChild(col);
  });

  // Re-attach event listeners
  attachCardListeners();
}

// ───── Attach click listeners ─────
function attachCardListeners() {
  document.querySelectorAll('.movie-card .card-img-top').forEach(img => {
    img.addEventListener('click', () => {
      showMovieInfo(parseInt(img.getAttribute('data-idx')));
    });
  });

  document.querySelectorAll('.details-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      showMovieInfo(parseInt(btn.getAttribute('data-idx')));
    });
  });
}

// ───── Info Modal (Bootstrap 5) — click poster, title, or Details button ─────
const infoModal = new bootstrap.Modal(document.getElementById('infoModal'));
const infoModalLabel = document.getElementById('infoModalLabel');
const infoModalBody = document.getElementById('infoModalBody');

function showMovieInfo(idx) {
  const movie = movies[idx];
  infoModalLabel.textContent = movie.title;
  infoModalBody.innerHTML = `
    <div class="text-center mb-3">
      <img src="${movie.poster}" alt="${movie.title}" class="info-poster mb-3">
      <h5 class="fw-bold" style="font-family:'Montserrat',sans-serif;">${movie.title} (${movie.year})</h5>
      <span class="badge bg-info text-dark"><i class="bi bi-tag-fill me-1"></i>${movie.genre}</span>
    </div>
    <p class="text-center">${movie.description}</p>
    <hr>
    <p class="mb-1"><i class="bi bi-megaphone-fill text-primary me-1"></i><strong>Director:</strong> ${movie.director}</p>
    <p class="mb-1"><i class="bi bi-pencil-fill text-primary me-1"></i><strong>Writers:</strong> ${movie.writers}</p>
    <p class="mb-1"><i class="bi bi-star-fill text-warning me-1"></i><strong>Stars:</strong> ${movie.stars}</p>
    <hr>
    <div class="d-flex justify-content-center gap-2 flex-wrap">
      <a href="${movie.imdbUrl}" target="_blank" class="btn btn-warning fw-bold">
        <img src="${IMDB_ICON}" alt="IMDb" class="imdb-icon"> View on IMDb
      </a>
      <a href="${movie.trailer}" target="_blank" class="btn btn-danger fw-bold">
        <img src="${YT_ICON}" alt="YouTube" class="youtube-icon"> Watch Trailer
      </a>
    </div>
  `;
  infoModal.show();
}

// ───── Search Functionality ─────
const searchInput = document.getElementById('searchInput');
searchInput.addEventListener('input', () => {
  renderMovies(searchInput.value);
});

// ───── Initial Render ─────
renderMovies();
