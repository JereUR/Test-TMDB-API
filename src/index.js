const API_URL = "https://api.themoviedb.org/3/";
const API_KEY = "844dba0bfd8f3a4f3799f6130ef9e335";

fetchMovieGenres = () => {
  fetch(`${API_URL}genre/movie/list?api_key=${API_KEY}&language=en-US`)
    .then((res) => (res.ok ? res.json() : Promise.reject()))
    .then((json) => console.log("Movie Genres", json));
};

fetchTvGenres = () => {
  fetch(`${API_URL}genre/tv/list?api_key=${API_KEY}&language=en-US`)
    .then((res) => (res.ok ? res.json() : Promise.reject()))
    .then((json) => console.log("TV Genres", json));
};

document.addEventListener("DOMContentLoaded", (e) => {
  fetchMovieGenres();
  fetchTvGenres();
});
