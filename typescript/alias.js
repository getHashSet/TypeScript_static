"use strict";
function combine(input1, input2, resultConversion // this will add the types to intelasence
) {
    var result;
    if (typeof input1 === "number" && typeof input2 === "number" && resultConversion) {
        return result = input2 + input2;
    }
    else if (typeof input1 === "string" && typeof input2 === "string" && resultConversion) {
        return result = input1 + input2;
    }
}
var combineStuff = combine(18, 26, "as-number");
console.log(combineStuff);
var combineNames = combine("34", "44", "as-text");
console.log(combineNames);
var combineNamesAndNumbers = combine("Matthew", "James", "as-text");
console.log(combineNamesAndNumbers);
