// Placeholder movie data. Replace with real data as needed.
const movies = [
  {
    title: "Tron: Ares",
    year: 2025,
    genre: "Sci-Fi, Action",
    description: "The next chapter in the Tron saga, following a new digital adventure.",
    poster: "thumbnails/tron_ares.jpg",
    imdbUrl: "https://www.imdb.com/title/tt6604188/",
    trailer: "https://www.youtube.com/embed/YShVEXb7-ic"
  },
  {
    title: "F1",
    year: 2025,
    genre: "Sport, Drama",
    description: "A dramatic look into the world of Formula 1 racing.",
    poster: "thumbnails/f1.jpg",
    imdbUrl: "https://www.imdb.com/title/tt16311594/",
    trailer: "https://www.youtube.com/embed/69ffwl-8pCU"
  },
  {
    title: "Train Dreams",
    year: 2025,
    genre: "Drama",
    description: "A logger and railroad worker leads a life of unexpected depth and beauty in early 20th-century America.",
    poster: "thumbnails/train_dreams.jpg",
    imdbUrl: "https://www.imdb.com/title/tt29768334/",
    trailer: "https://www.youtube.com/embed/_Nk8TrBHOrA"
  },
  {
    title: "Lilo & Stitch",
    year: 2026,
    genre: "Animation, Family",
    description: "A young girl's close encounter with the galaxy's most wanted extraterrestrial.",
    poster: "thumbnails/lilo_stitch.jpg",
    imdbUrl: "https://www.imdb.com/title/tt29768334/",
    trailer: "https://www.youtube.com/embed/VWqJifMMgZE"
  },
  {
    title: "Heart Eyes",
    year: 2026,
    genre: "Romance, Comedy",
    description: "A romantic comedy about unexpected love.",
    poster: "thumbnails/heart_eyes.jpg",
    imdbUrl: "https://www.imdb.com/title/tt32558992/",
    trailer: "https://www.youtube.com/embed/1cRzZcMlJh8"
  }
];

const movieGrid = document.getElementById('movieGrid');


movies.forEach((movie, idx) => {
  const card = document.createElement('div');
  card.className = 'col-12 col-sm-6 col-md-4 col-lg-3';
  card.innerHTML = `
    <div class="movie-card card h-100 shadow-lg rounded-4 border-0 animate__animated animate__fadeInUp" style="transition: box-shadow 0.2s;">
      <img src="${movie.poster}" alt="${movie.title} poster" class="card-img-top" style="cursor:pointer; border-radius: 1rem 1rem 0 0;" data-idx="${idx}">
      <div class="info card-body d-flex flex-column">
        <div class="title card-title d-flex align-items-center" style="cursor:pointer;color:var(--primary);text-decoration:underline;font-family:'Montserrat',Arial,sans-serif;font-weight:700;font-size:1.1rem;" onclick="window.open('${movie.imdbUrl}', '_blank')">
          <img src="https://upload.wikimedia.org/wikipedia/commons/6/69/IMDB_Logo_2016.svg" alt="IMDb" style="height:1.3em;vertical-align:middle;margin-right:0.3em;">${movie.title} (${movie.year})
        </div>
        <div class="desc card-text flex-grow-1" style="color:#444;font-size:0.97rem;">${movie.description}</div>
        <button class="btn btn-primary mt-2 trailer-btn align-self-start px-3 py-2 rounded-pill shadow-sm" data-idx="${idx}" style="font-weight:500;letter-spacing:0.5px;"><i class="bi bi-youtube" style="font-size:1.3em;color:#fff;vertical-align:middle;"></i> Watch Trailer</button>
      </div>
    </div>
  `;
  movieGrid.appendChild(card);
});

// Add click event for showing IMDb info modal
document.addEventListener('DOMContentLoaded', function() {
  document.querySelectorAll('.movie-card .card-img-top').forEach(img => {
    img.addEventListener('click', function(e) {
      const idx = parseInt(img.getAttribute('data-idx'));
      showImdbInfo(idx);
    });
  });
});

function showImdbInfo(idx) {
  const movie = movies[idx];
  let infoHtml = '';
  if (movie.title === "Tron: Ares") {
    infoHtml = `<div style='text-align:center;'>
      <img src='${movie.poster}' alt='${movie.title} poster' style='max-width:180px;width:100%;border-radius:1rem;box-shadow:0 2px 12px rgba(0,0,0,0.12);margin-bottom:1rem;'>
      <h2 style='font-family:Montserrat,sans-serif;font-weight:700;'>${movie.title}</h2>
      <div class='mb-2'><span class='badge bg-secondary me-1'>${movie.year}</span> <span class='badge bg-info text-dark'>${movie.genre}</span></div>
      <p style='font-size:1.05rem;'>The next chapter in the Tron saga, following a new digital adventure.</p>
      <hr>
      <div style='font-size:0.97rem;'>
        <strong>Director:</strong> Joachim Rønning<br>
        <strong>Writers:</strong> Jesse Wigutow<br>
        <strong>Stars:</strong> Jared Leto, Greta Lee, Evan Peters
      </div>
      <a href='${movie.imdbUrl}' target='_blank' class='btn btn-warning mt-3' style='font-weight:600;'>View on IMDb</a>
    </div>`;
  } else if (movie.title === "F1") {
    infoHtml = `<div style='text-align:center;'>
      <img src='${movie.poster}' alt='${movie.title} poster' style='max-width:180px;width:100%;border-radius:1rem;box-shadow:0 2px 12px rgba(0,0,0,0.12);margin-bottom:1rem;'>
      <h2 style='font-family:Montserrat,sans-serif;font-weight:700;'>${movie.title}</h2>
      <div class='mb-2'><span class='badge bg-secondary me-1'>${movie.year}</span> <span class='badge bg-info text-dark'>${movie.genre}</span></div>
      <p style='font-size:1.05rem;'>A Formula One driver comes out of retirement to mentor and team up with a younger driver.</p>
      <hr>
      <div style='font-size:0.97rem;'>
        <strong>Director:</strong> Joseph Kosinski<br>
        <strong>Writers:</strong> Joseph Kosinski, Ehren Kruger<br>
        <strong>Stars:</strong> Brad Pitt, Damson Idris, Javier Bardem
      </div>
      <a href='${movie.imdbUrl}' target='_blank' class='btn btn-warning mt-3' style='font-weight:600;'>View on IMDb</a>
    </div>`;
  } else {
    infoHtml = `<div style='text-align:center;'>
      <img src='${movie.poster}' alt='${movie.title} poster' style='max-width:180px;width:100%;border-radius:1rem;box-shadow:0 2px 12px rgba(0,0,0,0.12);margin-bottom:1rem;'>
      <h2 style='font-family:Montserrat,sans-serif;font-weight:700;'>${movie.title}</h2>
      <div class='mb-2'><span class='badge bg-secondary me-1'>${movie.year}</span> <span class='badge bg-info text-dark'>${movie.genre}</span></div>
      <p style='font-size:1.05rem;'>${movie.description}</p>
      <a href='${movie.imdbUrl}' target='_blank' class='btn btn-warning mt-3' style='font-weight:600;'>View on IMDb</a>
    </div>`;
  }
  const modal = document.getElementById('modalInfo');
  const modalBody = document.getElementById('modalInfoBody');
  modalBody.innerHTML = infoHtml;
  modal.style.display = 'block';
  document.getElementById('closeInfoModal').onclick = function(e) {
    e.stopPropagation();
    modal.style.display = 'none';
    modalBody.innerHTML = '';
  };
  // Only allow clicking outside to close for non-Tron
  window.onclick = function(event) {
    if (event.target === modal) {
      if (movie.title === "Tron: Ares") {
        modal.style.display = 'none';
        modalBody.innerHTML = '';
        // Prevent any preview modal from showing
        const previewModal = document.getElementById('modalPreview');
        const previewBody = document.getElementById('modalBody');
        if (previewModal) previewModal.style.display = 'none';
        if (previewBody) previewBody.innerHTML = '';
        return;
      }
      modal.style.display = 'none';
      modalBody.innerHTML = '';
    }
  };
}

// Modal preview logic for all movies
document.addEventListener('DOMContentLoaded', function() {
  const modal = document.getElementById('modalPreview');
  const modalBody = document.getElementById('modalBody');
  const closeModal = document.getElementById('closeModal');
  document.querySelectorAll('.trailer-btn').forEach(btn => {
    btn.addEventListener('click', function(e) {
      const idx = parseInt(btn.getAttribute('data-idx'));
      const movie = movies[idx];
      // Always open YouTube trailer in new tab
      if (idx === 2) {
        window.open('https://www.youtube.com/watch?v=_Nk8TrBHOrA', '_blank');
        return;
      }
      // For all others, open the embed link as a watch link
      let ytUrl = movie.trailer;
      // Convert embed to watch if needed
      if (ytUrl.includes('/embed/')) {
        const videoId = ytUrl.split('/embed/')[1];
        window.open(`https://www.youtube.com/watch?v=${videoId}`, '_blank');
      } else {
        window.open(ytUrl, '_blank');
      }
    });
  });
  closeModal.onclick = function() {
    modal.style.display = 'none';
    modalBody.innerHTML = '';
  };
  window.onclick = function(event) {
    if (event.target === modal) {
      modal.style.display = 'none';
      modalBody.innerHTML = '';
    }
  };
});

// Modal preview logic for Tron: Ares
document.addEventListener('DOMContentLoaded', function() {
  const modal = document.getElementById('modalPreview');
  const modalBody = document.getElementById('modalBody');
  const closeModal = document.getElementById('closeModal');
  // Only Tron: Ares (idx 0) for now
  document.querySelectorAll('.movie-card img').forEach(img => {
    img.addEventListener('click', function(e) {
      const idx = parseInt(img.getAttribute('data-idx'));
      if (idx === 0) {
        modalBody.innerHTML = `<h2 style='text-align:center;'>Tron: Ares Preview</h2><div style='text-align:center;'><iframe src='https://www.imdb.com/video/vi2869938201/?playlistId=tt6604188&ref_=tt_ov_pr_ov_vi' width='420' height='236' style='border:none;max-width:100%;' allowfullscreen></iframe></div>`;
        modal.style.display = 'block';
      }
    });
  });
  closeModal.onclick = function() {
    modal.style.display = 'none';
    modalBody.innerHTML = '';
  };
  window.onclick = function(event) {
    if (event.target === modal) {
      modal.style.display = 'none';
      modalBody.innerHTML = '';
    }
  };
});

// showDetail is no longer used
