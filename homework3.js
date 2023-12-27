//homeWork3
let evenCount = 0;
let oddCount = 0;
let totalCount = 0;

for (let i = 0; i < 900; i++) {
    const randomNumber = Math.floor(Math.random() * (1000 - 100 + 1) + 100);
    console.log(randomNumber);

    totalCount ++;

    if (randomNumber % 2 === 0) {
        evenCount++;
         } else {
            oddCount++;
        }
}
console.log(`Кількість згенерованих чисел: `+ totalCount);
console.log(`Парних чисел: ` + evenCount);
console.log(`Не парних чисел: ` + oddCount);
    
const percentageEven = (evenCount / totalCount) * 100;
const percentageOdd = (oddCount / totalCount) * 100;
    
console.log('Відсоток парних до не парних: ' + percentageEven.toFixed(1) +'%'+ ':' + percentageOdd.toFixed(1) + '%');

