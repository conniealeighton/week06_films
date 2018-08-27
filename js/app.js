document.addEventListener('DOMContentLoaded', () => {
  const form = document.querySelector('#film-input');
  form.addEventListener('submit', handleFormSubmit);

  renderList();
});

const getList = function(){
  if (JSON.parse(localStorage.getItem('films')) !== null){
    return JSON.parse(localStorage.getItem('films'));
  } else {
    return [];
  }
}

const handleFormSubmit = function(event){
  event.preventDefault();
  filmList = getList();
  const newFilm = {
    title: event.target.title.value,
    artist: event.target.artist.value,
    release: event.target.release.value
  };
  filmList.push(newFilm);

  localStorage.setItem('films', JSON.stringify(filmList));
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
    filmDiv.innerHTML = "";
  const filmList = getList();
  filmList.forEach((film) => {
    filmUl = buildList(film);
    filmDiv.appendChild(filmUl);

  });


}
