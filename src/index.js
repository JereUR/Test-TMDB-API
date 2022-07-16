const API_URL = "https://api.themoviedb.org/3/";
const API_KEY = "844dba0bfd8f3a4f3799f6130ef9e335";

fetchItems = () => {
  fetch(`${API_URL}movie/popular?api_key=${API_KEY}&language=es-US&page=1`)
    .then((res) => (res.ok ? res.json() : Promise.reject()))
    .then((json) => console.log(json));
};

document.addEventListener("DOMContentLoaded", fetchItems);
