let repeat = 3
let  single_number = null
cube_number = null

for (i = repeat; i >= 1; i--){
    single_number = Number(prompt("Inserisci un numero"))
    cube_number = single_number**3
    
    console.log(cube_number);
}