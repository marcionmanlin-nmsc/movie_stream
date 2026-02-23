// script.js — Movie Stream App

const movies = [
  {
    title: "Tron: Ares",
    year: 2025,
    genre: "Sci-Fi, Action",
    description: "The next chapter in the Tron saga, following a new digital adventure.",
    poster: "thumbnails/tron_ares.jpg",
    imdbUrl: "https://www.imdb.com/title/tt6604188/",
    trailer: "https://www.youtube.com/embed/YShVEXb7-ic",
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
    trailer: "https://www.youtube.com/embed/69ffwl-8pCU",
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
    trailer: "https://www.youtube.com/embed/_Nk8TrBHOrA",
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
    trailer: "https://www.youtube.com/embed/VWqJifMMgZE",
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
    trailer: "https://www.youtube.com/embed/1cRzZcMlJh8",
    director: "Josh Ruben",
    writers: "Phillip Murphy, Christopher Landon",
    stars: "Olivia Holt, Mason Gooding, Devon Sawa"
  }
];

// ───── Build Movie Cards ─────
const movieGrid = document.getElementById('movieGrid');

movies.forEach((movie, idx) => {
  const col = document.createElement('div');
  col.className = 'col-12 col-sm-6 col-md-4 col-lg-3';

  col.innerHTML = `
    <div class="card movie-card h-100 shadow-sm border-0">
      <img src="${movie.poster}" alt="${movie.title}" class="card-img-top" data-idx="${idx}">
      <div class="card-body d-flex flex-column">
        <h5 class="card-title d-flex align-items-center" data-idx="${idx}">
          <img src="https://upload.wikimedia.org/wikipedia/commons/6/69/IMDB_Logo_2016.svg" alt="IMDb" class="imdb-logo">
          ${movie.title} (${movie.year})
        </h5>
        <span class="badge bg-secondary mb-2 align-self-start">${movie.genre}</span>
        <p class="card-text flex-grow-1">${movie.description}</p>
        <button class="btn btn-danger trailer-btn mt-auto align-self-start" data-idx="${idx}">
          <i class="bi bi-youtube"></i> Watch Trailer
        </button>
      </div>
    </div>
  `;

  movieGrid.appendChild(col);
});

// ───── Trailer Modal ─────
const trailerModal = new bootstrap.Modal(document.getElementById('trailerModal'));
const trailerModalLabel = document.getElementById('trailerModalLabel');
const trailerModalBody = document.getElementById('trailerModalBody');

// Stop video when modal closes
document.getElementById('trailerModal').addEventListener('hidden.bs.modal', () => {
  trailerModalBody.innerHTML = '';
});

document.querySelectorAll('.trailer-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    const idx = parseInt(btn.getAttribute('data-idx'));
    const movie = movies[idx];
    trailerModalLabel.textContent = `${movie.title} — Trailer`;
    trailerModalBody.innerHTML = `
      <div class="trailer-responsive">
        <iframe src="${movie.trailer}?autoplay=1" allowfullscreen allow="autoplay; encrypted-media"></iframe>
      </div>
    `;
    trailerModal.show();
  });
});

// ───── Info Modal (click poster or title) ─────
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
      <span class="badge bg-info text-dark me-1">${movie.genre}</span>
    </div>
    <p>${movie.description}</p>
    <hr>
    <p class="mb-1"><strong>Director:</strong> ${movie.director}</p>
    <p class="mb-1"><strong>Writers:</strong> ${movie.writers}</p>
    <p class="mb-1"><strong>Stars:</strong> ${movie.stars}</p>
    <div class="text-center mt-3">
      <a href="${movie.imdbUrl}" target="_blank" class="btn btn-warning fw-bold">
        <img src="https://upload.wikimedia.org/wikipedia/commons/6/69/IMDB_Logo_2016.svg" alt="IMDb" style="height:1.3em;vertical-align:middle;margin-right:0.3em;">
        View on IMDb
      </a>
    </div>
  `;
  infoModal.show();
}

// Click on poster image
document.querySelectorAll('.movie-card .card-img-top').forEach(img => {
  img.addEventListener('click', () => {
    showMovieInfo(parseInt(img.getAttribute('data-idx')));
  });
});

// Click on title
document.querySelectorAll('.movie-card .card-title').forEach(title => {
  title.addEventListener('click', () => {
    showMovieInfo(parseInt(title.getAttribute('data-idx')));
  });
});
