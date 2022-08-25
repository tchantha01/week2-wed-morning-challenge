// Write your code below

// let unique = false
function hasUniqueChars(word){
  for(let i = 0; i < word.length; i++){
    for(let j = i + 1; j < word.length; j++){
      if(word[i] === word[j]){
        return false
        }
    }
  } return true
}
console.log(hasUniqueChars('monday'))