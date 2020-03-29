type Combinable = number | string; 
type ConversionDescripter = "as-text" | "as-number";

function combine(
  input1: Combinable,
  input2: Combinable,
  resultConversion: ConversionDescripter // this will add the types to intelasence
) {
  let result: Combinable;
  if (typeof input1 === "number" && typeof input2 === "number" && resultConversion) {
    return result = input2 + input2;
  } else if (typeof input1 === "string" && typeof input2 === "string" && resultConversion) {
    return result = input1 + input2;
  } else {
    return "error";
  }

  return result;
}

const combineStuff = combine(18, 26, "as-number");
console.log(combineStuff);

const combineNames = combine("34", "44", "as-text");
console.log(combineNames);

const combineNamesAndNumbers = combine("Matthew", "James", "as-text");
console.log(combineNamesAndNumbers);
