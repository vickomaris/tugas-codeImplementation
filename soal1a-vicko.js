//Deteksi Palindrom
function palindrome(kata){
  var reverseString = '';
  for(var i in kata){
     reverseString += kata[(kata.length - i) - 1];
  }
if(kata === reverseString){
  console.log('Palindrom');
}else{
  console.log('Ini Bukan Palindrom');
}
}
palindrome('siang');
