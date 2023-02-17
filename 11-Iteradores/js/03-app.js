// Fizz buzz

// 3 6 9 12     multiplos 3        --> fizz
// 5 10 15 20   multiplos 5        --> buzz
// 15 30 45 60  multiplos de ambos --> fizzbuzz!

for (let i = 1; i <= 100; i++ ) {

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
}
