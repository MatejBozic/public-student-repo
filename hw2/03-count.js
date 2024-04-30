const originalTextUnhighlightedState =
  document.getElementById('givenText').innerHTML;

const userInputDiv = document.getElementById('userInput');

const handleKeyUp = function handleKeyUp() {
  resetGivenTextToOriginalUnhighlightedState();
  hightlightGivenTextBasedOnUserInput();
};
userInputDiv.addEventListener('keyup', handleKeyUp);

const resetGivenTextToOriginalUnhighlightedState =
  function resetGivenTextToOriginalUnhighlightedState() {
    const givenText = document.getElementById('givenText');
    givenText.innerHTML = originalTextUnhighlightedState;
  };

const hightlightGivenTextBasedOnUserInput =
  function hightlightGivenTextBasedOnUserInput() {
    const userInput = userInputDiv.value;
    if (userInput !== '') {
      // Get given text
      const givenTextDiv = document.getElementById('givenText');
      const givenText = givenTextDiv.innerHTML;

      // Create regular expression
      const regex = new RegExp(`\\b(${userInput})\\b`, 'gi');

      // Replace given text with highlighted user input value
      let highlightedText = givenText.replaceAll(regex, `<mark>$1</mark>`);
      givenTextDiv.innerHTML = highlightedText;
    }
  };
