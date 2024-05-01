const elem = document.querySelector('input');

const handleInput = function handleInput() {
  if (inputIsValid(elem.value)) {
    checkIfInputIsPalindrome(elem.value);
  }
};

elem.addEventListener('input', handleInput);

const inputIsValid = function inputIsValid(input) {
  if (input === '') {
    modifyResponse('');
    return false;
  } else if (isNaN(input)) {
    modifyResponse('This is not a number.', 'text-danger');
    return false;
  } else if (input.includes('-')) {
    modifyResponse('This number is not positive.', 'text-danger');
    return false;
  } else {
    return true;
  }
};

const modifyResponse = function modifyResponse(text, textColor) {
  const response = document.getElementById('response');
  response.textContent = text;
  response.setAttribute('class', textColor);
};

const checkIfInputIsPalindrome = function checkIfInputIsPalindrome(input) {
  let inputReversed = input.split('').reverse().join('');

  if (input === inputReversed) {
    modifyResponse('Yes. This is a palindrome!', 'text-success');
    return true;
  } else {
    modifyResponse('No. Try again.', 'text-danger');
    return false;
  }
};
