/*
  Implement a function `countVowels` that takes a string as an argument and returns the number of vowels in the string.
  Note: Consider both uppercase and lowercase vowels ('a', 'e', 'i', 'o', 'u').

  Once you've implemented the logic, test your code by running
*/

function countVowels(str) {
    let vowelcount = 0;
    let vowels = ['a','e','i','o','u'];
    let vowelstring = str.toLowerCase().split("");

    //forEach loop
    vowelstring.forEach((letter) => {      
        vowels.forEach((vowel) => {
            if (vowel  === letter){
                vowelcount += 1;
            }
        });
    });

    // for loop
    for(let i=0;i<vowelstring.length;i++){
        for(let j=0;j<vowels.length;j++){
            if(vowels[j] === vowelstring[i] ){
                vowelcount += 1;
            }
        }
    }
 return vowelcount;
}

nam = "Rishab"
console.log(countVowels(nam));

// module.exports = countVowels;