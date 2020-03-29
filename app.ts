function combine(
  input1: number | string,
  input2: number | string,
  resultConversion: 'as-text' | 'as-number' // this will add the types to intelasence
) {
  let result;
  if (typeof input1 === "number" && typeof input2 === "number") {
    result = input2 + input2;
  } else if (typeof input1 === "string" && typeof input2 === "string") {
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

const combineStuff = combine(18, 26, "as-number");
console.log(combineStuff);

const combineNames = combine("34", "44", "as-text");
console.log(combineNames);

const combineNamesAndNumbers = combine("Matthew", "James", "as-text");
console.log(combineNamesAndNumbers);
