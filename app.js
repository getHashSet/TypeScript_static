function combine(input1, input2, resultConversion) {
    var result;
    if (typeof input1 === "number" && typeof input2 === "number") {
        result = input2 + input2;
    }
    else if (typeof input1 === "string" && typeof input2 === "string") {
        result = input1 + input2;
    }
    switch (resultConversion) {
        case "as-number":
            return +result;
        case "as-number":
            return result.toString();
        default:
    }
    return result;
}
var combineStuff = combine(18, 26, "as-number");
console.log(combineStuff);
var combineNames = combine("34", "44", "as-text");
console.log(combineNames);
var combineNamesAndNumbers = combine("Matthew", "James", "as-text");
console.log(combineNamesAndNumbers);
