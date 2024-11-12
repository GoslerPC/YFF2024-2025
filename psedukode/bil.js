/*  her er en psudokode for et prohram som gir en tilbake meling om man
    man burde kjøre bil og hva man burde gjøre hvis man ikke kan kjøre  
*/

//  person skriver inn aldern sin
    let skjekkalder=-12 
//  dersom aldern < 0
        // skriv feilmeling (post.tall)
        if(skjekkalder <0){
                console.log("skriv in et tall søre en 0")
        }
//  dersom aldern > 70 
        // skriv tilbameling (rullator)
        if(skjekkalder >70){
                console.log("du kan ha rullator")
        }
//  dersom aldern er > 18
        // skriv tilbameling (bil)
        if(skjekkalder >18){
                console.log("du kan kjøre bil")
        }

//  dersom aldern >7
        // skriv tilbameling (sykkel)
        if(alder >7){
                console.log("du kan sykle")
        }
//  dersom alder er <7
        // skriv tilbameling (bruk trehuls sykkel)
        if(skjekkalder <7)
                console.log("bruk tre huls sykel")
//  eller
        // skriv tilbakemeling (tror ikke du kan gå)
        if(skjekkalder <1,1){
                console.log("tror ikke du kan gå")
        }


function oppstart(){
        document.querySelector("#sendknapp").onclick = skjekkalder
}