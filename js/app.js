document.addEventListener('DOMContentLoaded', () => {
  const form = document.querySelector('#film-input');
  form.addEventListener('submit', handleFormSubmit);

  renderList();
});

const getList = function(){
  // JSON.parse changes a string object into javascript
  if (JSON.parse(localStorage.getItem('films')) !== null){
    // get from 'dictionary' value that matched the 'key' 'films'
  // parse takes object back from the string and changes it to js
    return JSON.parse(localStorage.getItem('films'));
  } else {
    return [];
  }
}

const handleFormSubmit = function(event){
  event.preventDefault();
  // getList is a list of all the films or an empty array
  filmList = getList();
  // creating a new film from the what was submitted
  const newFilm = {
    title: event.target.title.value,
    artist: event.target.artist.value,
    release: event.target.release.value
  };
  // new film pushed into filmList
  filmList.push(newFilm);

  localStorage.setItem('films', JSON.stringify(filmList));
  // because you've added a film it needs to be shown
  renderList();
  event.target.reset();
};

const buildList = function(film){
  const filmUl = document.createElement('ul');
  const titleLi = document.createElement('li');
  titleLi.textContent = `Title: ${film.title}`;
  const artistLi = document.createElement('li');
  artistLi.textContent = `Artist: ${film.artist}`;
  const releaseLi = document.createElement('li');
  releaseLi.textContent = `Release Date: ${film.release}`;

  filmUl.appendChild(titleLi);
  filmUl.appendChild(artistLi);
  filmUl.appendChild(releaseLi);

  return filmUl;

}

const renderList = function(){
    const filmDiv = document.querySelector('#film-list');
      // changing reading-list into variable and ensuring it is blank
    filmDiv.innerHTML = "";
    // reading from JSON file (new updated :D). Converting getList from string to
// array of films (filmList), which is what
// get list does. Will include new film.
  const filmList = getList();
  // making HTML from details of book
  filmList.forEach((film) => {
    filmUl = buildList(film);
    // once html is created it is added to the empty Div
    filmDiv.appendChild(filmUl);

  });


}
