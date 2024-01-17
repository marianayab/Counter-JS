var counter1 = document.querySelector(".counter");
var followers = document.querySelector(".followers");

let count = 1;

setTimeout(() => {
    followers.innerHTML = "Congratulations on 1000 Followers!"
},4100);


setInterval(()=>{    
    if(count<1000){
        
    count++;
    counter1.innerHTML = `+${count}`;
} 
},1);

