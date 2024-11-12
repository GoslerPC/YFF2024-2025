window.onload = oppstart;

function oppstart(){
    document.querySelector("#gjettKnapp").onclick = sjekkRiktig;
}

function sjekkRiktig(){
    let tilf = Math.floor(Math.random()*10)+1;
    console.log(tilf);

    let respons = Number(document.querySelector("#tall").value);

    if(respons <1 || respons >10){
        console.log("Skriv et tall mellom 1 og 10");
    }

    else if(respons == tilf){
        console.log("gjetta riktig");
    }

    else{

        console.log("Du gjetta feil");
    }
}
