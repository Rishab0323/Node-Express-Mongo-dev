var info = "Rishab Shukla";

function strlen(st){
    console.log("the string is" ,st);
    console.log("the length of the string is ",st.length);

}
strlen(info);

firstIndexOf
function findIndexOF(str ,target){
    console.log("the string is" ,str);
    console.log("the first index ",str.indexOf(target));
     console.log("the last index of",str.lastIndexOf(target)); //lastIndexOf
     
}
findIndexOF(info , "sh"); 
lastIndexOF(info,"i");

function getSlic(str,start,end){
    console.log("string is" ,str ,str.slice(start,end));
    console.log("the substring is", str.substr(2,7));
    console.log("replace the string ",str.replace("shukla", "vidhayak"));
}
getSlic(info,2,7);

function replaceStr(str,target,replecement){
    console.log("string after replacement" ,str.replace(target,replecement));
}

replaceStr(info,"shukla", "CSE");