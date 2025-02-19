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
    image:'./assets/Iron-man.jpg'
  },
  {
    title:'amelie',
    language: 'french',
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

function filterMovies(){
  const selectedLanguage = languageSelect.value;
  const selectedGenre = genreSelect.value;
  const selectedRelease = releaseSelect.value;
  const  moviesResultList = [];
  for(let i = 0 ; i < movies.length ; i++){
    // if(movies[i].language === selectedLanguage){
    //   moviesResultList.push(movies[i]);
    // }
    // if(movies[i].genre === selectedGenre){
    //   moviesResultList.push(movies[i]);
    // }
    // if(movies[i].releaseDate === selectedRelease ){
    //   moviesResultList.push(movies[i]);
    // }
    


  }
  console.log(moviesResultList);
  //  return moviesResultList;
}