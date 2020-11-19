function palindrome(message){
  var reverse = message.split('').reverse().join('');
  if(message==reverse){
      return true;
  }
  else{
      return false;
  }
}
console.log(palindrome('hello')); // should return false
console.log(palindrome('abcba')); // should return true
