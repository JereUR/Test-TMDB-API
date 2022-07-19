const API_URL = "https://api.themoviedb.org/3/";
const API_KEY = "844dba0bfd8f3a4f3799f6130ef9e335";

let search = "drama, horror";

fetchIMDB = () => {
  fetch(
    `https://imdb-api.com/API/AdvancedSearch/k_w1v4f9bx?genre=${search}&languages=en`
  )
    .then((res) => (res.ok ? res.json() : Promise.reject()))
    .then((json) => console.log(json));
};

document.addEventListener("DOMContentLoaded", (e) => {
  fetchIMDB();
});
