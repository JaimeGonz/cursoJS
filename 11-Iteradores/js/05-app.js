let i = 0;

// do {
//     if ( i < 10) {
//         console.log(`Numero ${i}`);
//     }
// } while (i < 10);

do {
    if ( i % 15 ===0 ) {
        console.log(`${i} FIZZBUZZ!`);
        continue;
    } else if ( i % 3 === 0) {
        console.log(`${i} fizz`);
        continue;
    } else if ( i % 5 === 0 ) {
        console.log(`${i} buzz`);
        continue;
    } 

    console.log(`${i}`);
    i++;
} while ( i <= 100) 
