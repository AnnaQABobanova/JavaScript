//homework2

let services = {
    "стрижка": "60 грн",
    "гоління": "80 грн",
    "Миття голови": "100 грн"
};

//services['Коррекція форми брів'] = "200 грн";

function price() {
    let total = 0;
    for (let service in services) {
        total += parseInt(services[service]);
    }
    return total + ' грн';
}

function minPrice() {
    let min = Infinity;
    for (let service in services) {
        let price = parseInt(services[service]);
            if (price < min) {
                min = price;
            }
    }
    return min + ' грн';
}

function maxPrice() {
    let max = -Infinity;
    for (let service in services) {
        let price = parseInt(services[service]);
            if (price > max) {
                max = price;
            }
    }
    return max + ' грн';
}

console.log("Загальна вартість послуг: " + price());
console.log("Мінімальна вартість послуг: " + minPrice());
console.log("Максимальна вартість послуг: " + maxPrice());