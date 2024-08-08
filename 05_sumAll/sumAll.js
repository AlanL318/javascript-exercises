const sumAll = function(intOne, intTwo) {
    let sum = 0
    if (intOne < 0 || intTwo < 0) return "ERROR"
    if (intOne > intTwo) [intOne, intTwo] = [intTwo, intOne]
    if (!Number.isInteger(intOne) || !Number.isInteger(intTwo))  return "ERROR"
    for (let i = intOne; i <= intTwo; i++) {
        sum += i
    }
    return sum

};

// Do not edit below this line
module.exports = sumAll;
