let intervalID = 0;

const button = document.getElementById('button');
const handleStartButtonClick = function handleStartButtonClick() {
  if (intervalID === 0) {
    if (inputIsInvalid()) {
      return;
    }

    setBackgroundColorToRandomColor();
    intervalID = changeBackgroundColorEveryTimeInterval();
    changeButton();
  } else {
    clearInterval(intervalID);
    intervalID = 0;
    changeButton();
  }
};
button.addEventListener('click', handleStartButtonClick);

const inputIsInvalid = function inputIsValid() {
  if (inputIsEmpty()) {
    return true;
  } else if (inputIsLessThanOne()) {
    return true;
  } else if (inputIsGreaterThanOneMillion()) {
    return true;
  } else {
    return false;
  }
};

const inputIsEmpty = function inputIsEmpty() {
  const input = document.getElementById('timeInterval');
  if (input.value === '') {
    alert('Input is empty.');
    return true;
  } else {
    return false;
  }
};

const inputIsLessThanOne = function inputIsLessThanOne() {
  const input = document.getElementById('timeInterval');
  if (input.value < 1) {
    alert('Input cannot be less than one.');
    return true;
  } else {
    return false;
  }
};

const inputIsGreaterThanOneMillion = function inputIsGreaterThanOneMillion() {
  const input = document.getElementById('timeInterval');
  if (input.value > 100000) {
    alert('Input cannot be greater than one million.');
    return true;
  } else {
    return false;
  }
};

const setBackgroundColorToRandomColor =
  function setBackgroundColorToRandomColor() {
    const randomColor = getRandomColor();
    const body = document.querySelector('body');
    body.setAttribute('style', `background-color: ${randomColor};`);
  };

const getRandomColor = function getRandomColor() {
  const r = getRandomInteger(0, 256);
  const g = getRandomInteger(0, 256);
  const b = getRandomInteger(0, 256);
  const a = getRandomDecimalNumber(0.4, 0.6).toFixed(1);
  return `rgb(${r}, ${g}, ${b}, ${a})`;
};

const getRandomInteger = function getRandomInteger(min, max) {
  const minCeiled = Math.ceil(min);
  const maxFloored = Math.floor(max);
  return Math.floor(Math.random() * (maxFloored - minCeiled) + minCeiled);
};

const getRandomDecimalNumber = function getRandomDecimalNumber(min, max) {
  return Math.random() * (max - min) + min;
};

const changeBackgroundColorEveryTimeInterval =
  function changeBackgroundColorEveryTimeInterval() {
    const timeIntervalInSeconds = document.getElementById('timeInterval').value;
    const timeIntervalInMilliseconds = timeIntervalInSeconds * 1000;
    const intervalID = setInterval(
      setBackgroundColorToRandomColor,
      timeIntervalInMilliseconds
    );
    return intervalID;
  };

const changeButton = function changeButton() {
  const button = document.getElementById('button');
  if (button.value === 'Start') {
    changeToStopButton(button);
  } else if (button.value === 'Stop') {
    changeToStartButton(button);
  } else {
    console.log('Unknown value for "button" in "changeButton" function.');
  }
};

const changeToStopButton = function changeToStopButton(button) {
  button.value = 'Stop';
  button.setAttribute('class', 'btn btn-danger mb-3 mt-4');
};

const changeToStartButton = function changeToStartButton(button) {
  button.value = 'Start';
  button.setAttribute('class', 'btn btn-primary mb-3 mt-4');
};
