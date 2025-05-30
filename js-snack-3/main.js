//dichairo l'array da riepire col ciclo for
// let numbers = []
// let sum = null
// let  single_number = null

// for (i = 10; i >= 1; i--){
//     single_number = Number(prompt("Inserisci un numero"))

//     numbers.push(single_number)
    
// }
// console.log(numbers);

// for (i = 0; i < numbers.length; i++){
//     let element = numbers[i];
//     sum = sum + element
// }
// console.log(sum);


let repeat = 10
sum = null

for(i = repeat; i >= 1; i--){
    let single_number = Number(prompt("Inserisci un numero")) 
    sum = sum + single_number

}

console.log(sum);
