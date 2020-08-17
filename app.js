'use-strict';

const getDogImage = function(count, breed){
  let userCount = count;
  let userBreed = breed;
  fetch(`https://dog.ceo/api/breeds/image/random/${userCount}`).then(response => response.json()).then(responseJson => displayResults(responseJson));
  fetch(`https://dog.ceo/api/breed/${userBreed}/images/random`).then(response => response.json()).then(responseJson => displayResultsBreed(responseJson));
};

const displayResults = function(responseJson) {
  console.log(responseJson);
  for(let element of responseJson['message']){
    $('main').append(`<img src=${element} alt="placeholder">`);
  }
};

const displayResultsBreed = function(responseJsonBreed){
  $('main').append(`<img src=${responseJsonBreed.message} alt="placeholder">`);
};

const watchForm = function() {
  $('form').submit(event => {
    event.preventDefault();
    getDogImage($('#quantity').val(), $('#breed').val());
  });
};

const main = function(){
  watchForm();
};

$(main);