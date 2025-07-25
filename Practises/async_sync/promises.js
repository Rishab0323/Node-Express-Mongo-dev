// function myOwnSetTimeout(fn,duration){
//     setTimeout(fn,duration);
// }

// myOwnSetTimeout(function(){
//     console.log(" undertanding promises  in js");
// },1000);


function myOwnSetTimeout(duration){
    let p = new Promise(function(resolve){
        setTimeout(resolve,1000);
    });
    return  p;
}

myOwnSetTimeout(1000)
.then(function(){
    console.log(" undertanding promises first in");
})
    



