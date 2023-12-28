//homeWork2

function pad(str, char, count, addTo) {
    let result;
    const neededChar = Math.max(0, count - str.length);
    const padding = char.repeat(neededChar);

    if(str.length > count){
        addTo = true;
        result = padding + str;
    } else if(str.length < count){
        addTo = false;
        result = str + padding;
    } else {
        result = str
    }

    return result;
}
console.log(pad("qwerty", "*", 8, true));
