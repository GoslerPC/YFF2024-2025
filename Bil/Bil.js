window.onload = oppstart;


function oppstart() {
    document.querySelector("#sendAlder").onclick = sjekkAlder;
}


function sjekkAlder() {
    
let alder = document.querySelector("#alder").ariaValueMax;

if(alder < 0){
    document.querySelector("#utskrift").innerHTML = "skriv inn et positivt tall"
}
else if(alder >= 18){
    document.querySelector("#utskrif").innerHTML = "Du er i riktig alder till å kjøre bil"
}
else if(alder >)

}
