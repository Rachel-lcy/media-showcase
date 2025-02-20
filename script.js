const movies = [
  {
    title:'inception',
    language: 'english',
    genre: 'science fiction',
    releaseDate: '2010-2024',
    image:'./assets/inception.jpg'
  },
  {
    title:'Iron-man',
    language: 'english',
    genre: 'action',
    releaseDate: '2010-2024',
    image:'./assets/Iron-man.jpg'
  },
  {
    title:'deadpool',
    language: 'english',
    genre: 'comedy',
    releaseDate: '2010-2024',
    image:'./assets/deadpool.jpg'
  },
  {
    title:'amelie',
    language: 'fench',
    genre: 'romance',
    releaseDate: '2000-2010',
    image:'./assets/amelie.jpg'
  },
  {
    title:'thor',
    language: 'english',
    genre: 'fantasy',
    releaseDate: '2000-2010',
    image:'./assets/Thor.jpg'
  },
  {
    title:'Captain America',
    language: 'english',
    genre: 'adventure',
    releaseDate: '2010-2024',
    image:'./assets/Captain America.jpg'
  },
];

const languageSelect = document.getElementById('language-select');
const genreSelect = document.getElementById("genre-select");
const releaseSelect = document.getElementById("release-select");
const moviesContainer = document.getElementById("movies-container");

languageSelect.addEventListener("change",filterMovies);
genreSelect.addEventListener("change",filterMovies);
releaseSelect.addEventListener("change", filterMovies);

window.onload = function(){
  filterMovies();
}

function filterMovies(){
  const selectedLanguage = languageSelect.value; 
  const selectedGenre = genreSelect.value;
  const selectedRelease = releaseSelect.value;
  const  moviesResultList = [];
  for(let i = 0 ; i < movies.length ; i++){ 
    if((selectedLanguage === "all" || movies[i].language === selectedLanguage) &&
      (selectedGenre=== "all" || movies[i].genre === selectedGenre) &&
      (selectedRelease === "all" ||  movies[i].releaseDate === selectedRelease)){
        moviesResultList.push(movies[i]);
    }
  }
  console.log(moviesResultList);
  renderMovies(moviesResultList);
}

function  renderMovies(moviesResultList){
  moviesContainer.innerHTML = "";
  if(moviesResultList.length  < 1){
    moviesContainer.innerHTML =  "<p>No movies found</p>";
    return;
  }
  moviesResultList.forEach(movie => {
    const movieElement = document.createElement("div");
    movieElement.classList.add("movie");

    movieElement.innerHTML = `
      <img src="${movie.image}" alt="${movie.title}">
      <p>Title: ${movie.title}</p>
      <p>Genre: ${movie.genre}</p>
      <p>Language: ${movie.language}</p>
      <p>Release: ${movie.releaseDate}</p>
    `;

    moviesContainer.appendChild(movieElement);
  });

}