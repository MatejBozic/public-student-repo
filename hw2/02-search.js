import { characters } from './02-data.js';

const searchButton = document.getElementById('searchButton');
const handleSearchButtonClick = function handleSearchButtonClick() {
  clearSearchResults();
  generateSearchResults();
};
searchButton.addEventListener('click', handleSearchButtonClick);

const clearSearchResults = function clearSearchResults() {
  const searchResults = document.getElementById('searchResults');
  if (searchResults !== null) {
    searchResults.innerHTML = '';
  }
};

const generateSearchResults = function generateSearchResults() {
  if (!userInputIsEmpty()) {
    createContainerForSearchResults();
    let characterFound = false;
    for (const character of characters) {
      if (userInputMatchesCharacterName(character)) {
        characterFound = true;
        const characterCard = createCardForCharacter(character);
        appendCharacterCardToContainerForSearchResults(characterCard);
      }
    }
    if (characterFound === false) {
      outputResponse('Character not found');
    }
  }
};

const userInputIsEmpty = function userInputIsEmpty() {
  const userInput = document.getElementById('userInput');
  if (userInput.value === '') {
    return true;
  } else {
    return false;
  }
};

const createContainerForSearchResults =
  function createContainerForSearchResults() {
    const containerForCards = document.createElement('div');
    containerForCards.setAttribute('id', 'searchResults');
    containerForCards.setAttribute(
      'class',
      'd-flex felx-row flex-wrap justify-content-center'
    );
    const main = document.querySelector('main');
    main.append(containerForCards);
  };

const userInputMatchesCharacterName = function userInputMatchesCharacterName(
  character
) {
  const userInput = document.getElementById('userInput');
  const choppedCharacterName = character.name.split(' ');
  for (const individualChop of choppedCharacterName) {
    if (individualChop === userInput.value) {
      return true;
    }
  }
  return false;
};

const createCardForCharacter = function createCardForCharacter(character) {
  const card = document.createElement('div');
  card.setAttribute('class', 'card m-1 text-center');
  card.setAttribute('style', 'width: 12em');

  const cardBody = document.createElement('div');
  cardBody.setAttribute('class', 'card-body');
  card.append(cardBody);

  const cardTitle = document.createElement('h2');
  cardTitle.setAttribute('class', 'card-title fs-5');
  cardTitle.innerHTML = character.name.replace(
    userInput.value,
    '<mark style="background-color: yellow;">' + userInput.value + '</mark>'
  ); // highlights the part of the character name that the user input into the search bar
  cardBody.append(cardTitle);

  const cardText = document.createElement('p');
  cardText.setAttribute('class', 'card-text');
  cardText.innerHTML = 'Birth year: ' + character.birth_year;
  cardBody.append(cardText);

  return card;
};

const appendCharacterCardToContainerForSearchResults =
  function appendCharacterCardToContainerForSearchResults(characterCard) {
    const searchResults = document.getElementById('searchResults');
    searchResults.append(characterCard);
  };

const outputResponse = function outputResponse(text) {
  const card = document.createElement('div');
  card.setAttribute('class', 'card m-1 text-center');
  card.setAttribute('style', 'width: 12em');

  const cardBody = document.createElement('div');
  cardBody.setAttribute('class', 'card-body');
  card.append(cardBody);

  const cardText = document.createElement('p');
  cardText.setAttribute('class', 'card-text');
  cardText.innerHTML = text;
  cardBody.append(cardText);

  const searchResults = document.getElementById('searchResults');
  searchResults.append(card);
};
