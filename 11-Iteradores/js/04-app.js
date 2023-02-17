let i = 1; //Inicializar while

// while ( i <= 100) {
//     if ( i % 15 ===0 ) {
//         console.log(`${i} FIZZBUZZ!`);
//         continue;
//     } else if ( i % 3 === 0) {
//         console.log(`${i} fizz`);
//         continue;
//     } else if ( i % 5 === 0 ) {
//         console.log(`${i} buzz`);
//         continue;
//     } 

//     console.log(`${i}`);
//     i++;
// }

while ( i < 20 ) {
    if ( i % 2 ) {
        console.log(`Number ${i} is even`);
    } else {
        console.log(`Number ${i} is odd`);
    }
    i++;
}

