/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/

let str1 = "sapr";
let str2 = "swpr";

function isAnagram(str1, str2) {
    if(str1 == str2){
        return true;
    }
    let strl = str1.length;
    let strl2 = str2.length;

    if(strl != strl2){
        return false;
    }

    var count = {};

    for(let i=0;i<strl.length;i++){
        let index = str1.charCodeAt(i)-97;
        count[index] =  (count[index] || 0) + 1;
    }

    
    for(let j=0;j<strl2.length;j++){
        let index = str2.charCodeAt(i)-97;
        if (!count[index]){
            return false;
            
        }
        count[index]--;
        counts[index] =  (count[index] || 0) + 1;

    }
    return true;
}

isAnagram(str1,str2)
console.log(isAnagram(str1,str2));

module.exports = isAnagram