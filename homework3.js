homework3

let unit = "години";
let amount = 10;

switch(unit){
    case "кілометри":
        result = amount * 1000;
        console.log(amount +" км. це " + result + " метрів");
        break;
    case "години":
        result = amount * 60;
        console.log(amount + " год. це " + result + " хвилин");
        break;
    case "кілограми":
        result = amount * 1000;
        console.log(amount + " кг. це " + result + " грамів");
        break;
    default:
        console.log("Невідома одиниця виміру " + unit)
}