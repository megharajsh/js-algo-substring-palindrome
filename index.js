// Import stylesheets
import './style.css';

// Write Javascript code!
const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h1>JS Algo | Substring Palindrome</h1><hr><br>`;

let str = "MALAYALAM";
appDiv.innerHTML += `<strong>Input String:</strong> ${str}`;
let palindromeStrings = {};

function checkPalindromeStrings() {
  for (let i=0; i<str.length; i++) {
    let remaningStr = str.substring(i);
    console.log("Remaining: "+remaningStr);
    for (let j=i+1; j<=str.length; j++) {
      let subStr = str.substring(i,j);
      const reverseStr = subStr.split("").reverse().join("");
      console.log("Inner String: "+subStr);
      if (subStr === reverseStr) {
        palindromeStrings[subStr] = subStr;
      }
    }
  }
}

checkPalindromeStrings();
console.log(Object.values(palindromeStrings));
appDiv.innerHTML += `<br><br><strong>Palindrome Strings:</strong>`;
appDiv.innerHTML += `<br> ${Object.values(palindromeStrings).toString().split(',').join('<br />')}`;