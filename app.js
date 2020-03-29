var userInput; // this cannot be assined to values that require a type.
var userName;
userInput = "Jonny";
userInput = true;
userInput = 42;
if (typeof userInput === "string") {
    userName = userInput;
}
console.log(userInput);
function createError(message, code) {
    throw { message: message, errorCode: code };
}
createError("An Error Code", 42);
