
function isPalindrome(str){
    const cleanStr= str.toLowerCase().replace(/[^a-z0-9]/g,'');
    console.log(cleanStr);
    const reverseStr = cleanStr.split('').reverse().join('');
    console.log(reverseStr)
    return cleanStr=== reverseStr;
}


function palindromeChecker(){

    const inputText = document.getElementById('inputText');
    const resultElement = document.getElementById('result');

if(isPalindrome(inputText.value))
{
resultElement.textContent= " '${inputText}' is a palindrome";
}

else{
    resultElement.textContent= "'${inputText}'is not a palindrome";
}


}





document.getElementById('checkButton').addEventListener("click",palindromeChecker);