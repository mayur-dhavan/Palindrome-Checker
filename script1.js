function isPalindrome(str) {
    const cleanStr = str.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
    console.log(cleanStr);
    const reverseStr = cleanStr.split('').reverse().join('');
    console.log(reverseStr);
    return cleanStr=== reverseStr;
  }
  
  function checkPalindrome() {
    const input = document.getElementById('inputText').value;
    const resultElement = document.getElementById('result');
  
    if (input === "") {
      resultElement.textContent = "Please enter a word.";
      resultElement.classList.remove('green', 'red');
    } else if (isPalindrome(input)) {
      resultElement.textContent = `'${input}' is a palindrome!`;
      resultElement.classList.remove('red');
      resultElement.classList.add('green');
    } else {
      resultElement.textContent = `'${input}' is not a palindrome.`;
      resultElement.classList.remove('green');
      resultElement.classList.add('red');
    }

    resultElement.classList.add('fadeIn');
    inputText.value= '';
  }
  