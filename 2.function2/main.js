function palindrome(message){
  var reverse = message.split('').reverse().join('');
  if(message==reverse){
      return true;
  }
  else{
      return false;
  }
}
palindrome('hello'); // should return false
palindrome('abcba'); // should return true
