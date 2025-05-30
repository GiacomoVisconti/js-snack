let parola_1  = prompt("Inserisci la prima parola")
let parola_2  = prompt("Inserisci la seconda parola")

//controllo della lunghezza delle parole
if (parola_1.length <  parola_2.length){
    //stampo prima la parola più lunga
    alert(parola_1 + " " + parola_2)

} else if(parola_1.length > parola_2.length){
    alert(parola_2 + " " + parola_1)
}else{
    alert("la lunghezza delle due parole è uguale")
}