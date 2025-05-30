let reapet = 6
let numbers = []
let  single_number = null

for (i = reapet; i >= 1; i--){
    single_number = Number(prompt("Inserisci un numero"))
    if(single_number % 2 !== 0){

        numbers.push(single_number)
    }
    
}
console.log(numbers);



