let userInput: unknown; // this cannot be assined to values that require a type.
let userName: any;

userInput = "Jonny";
userInput = true;
userInput = 42;
if (typeof userInput === "string") {
  userName = userInput;
}

console.log(userInput);

function createError(message: string, code: number): never {
  throw { message: message, errorCode: code };
}

createError("An Error Code", 42);
