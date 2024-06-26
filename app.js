
//console.log(randomNumber);
document.getElementById("btn").addEventListener("click",function(){
    let randomNumber = Math.floor((Math.random()*10)+1);
let gussedN= parseInt(document.getElementById("gNumber").value)
if(randomNumber==gussedN){
    resultstext= "Correct";
}else if(randomNumber<gussedN){
    resultstext= "too high";
} else if(randomNumber>gussedN){
   resultstext= "too low";
}
document.getElementById("result").textContent = resultstext;
});