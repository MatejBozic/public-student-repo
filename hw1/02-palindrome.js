const elem = document.querySelector('input');

elem.addEventListener('input', handleInput);

function handleInput() {
  destroyResponse();
  if (inputIsValid(elem.value)) {
    if (inputIsPalindrome(elem.value)) {
      createResponse('Yes. This is a palindrome!');
    } else {
      createResponse('No. Try again.');
    }
  }
}

const inputIsValid = function inputIsValid(input) {
  if (inputIsEmpty(input)) {
    return false;
  } else if (inputIsNegative(input)) {
    return false;
  } else if (inputIsFloat(input)) {
    return false;
  } else {
    return true;
  }
};

const inputIsEmpty = function inputIsEmpty(input) {
  if (input === '') {
    return true;
  } else {
    return false;
  }
};

const inputIsNegative = function inputIsNegative(input) {
  if (input.includes('-')) {
    createResponse('No negative numbers.');
    return true;
  } else {
    return false;
  }
};

const inputIsFloat = function inputIsFloat(input) {
  if (input.includes('.')) {
    createResponse('No floating point numbers.');
    return true;
  } else {
    return false;
  }
};

const inputIsPalindrome = function inputIsPalindrome(value) {
  let number = Number(value);
  let digitReversedNumber = parseInt(
    number.toString().split('').reverse().join('')
  );
  if (number === digitReversedNumber) {
    return true;
  } else {
    return false;
  }
};

const destroyResponse = function destroyResponse() {
  const response = document.getElementById('response');
  if (response !== null) {
    response.remove();
  }
};

const createResponse = function createResponse(outputText) {
  const newParagraph = document.createElement('p');
  const newText = document.createTextNode(outputText);
  const textColor = determineCorrectTextColorFor(outputText);

  newParagraph.appendChild(newText);
  newParagraph.setAttribute('id', 'response');
  newParagraph.setAttribute('class', textColor);

  const appendResponseHereDiv = document.getElementById('appendResponseHere');
  appendResponseHereDiv.append(newParagraph);
};

const determineCorrectTextColorFor = function determineCorrectTextColorFor(
  outputText
) {
  if (outputText.includes('Yes')) {
    return 'text-success';
  } else if (
    outputText.includes('No') ||
    outputText.includes('negative') ||
    outputText.includes('floating point')
  ) {
    return 'text-danger';
  } else {
    console.log('Unknown input for the function determineCorrectTextColorFor.');
  }
};
