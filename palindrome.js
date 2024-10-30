// Recursive function to check if a string is a palindrome
function isPalindrome(str) {
    
    const cleanedStr = str.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();
    
    function checkPalindrome(start, end) {
      if (start >= end) return true;
      if (cleanedStr[start] !== cleanedStr[end]) return false;
      return checkPalindrome(start + 1, end - 1);
    }
  
    // Start the recursion from the beginning and end of the cleaned string
    return checkPalindrome(0, cleanedStr.length - 1);
  }