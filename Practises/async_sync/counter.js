function counter(n){
    let counter = 0;
    for(let i=0;i<n;i++){
        console.log("starting set timeout");
      setTimeout(() => {
        counter += 1;
        console.log(counter);
    }, 1000);  
    }
    
}

counter(20);