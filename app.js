// const person: {
// name: string;
// age: number;
// totalNumberOfMonths: 12; // this can be assined to a specific number.
// } = {
var person = {
    name: "Matthew",
    age: 35,
    totalNumberOfMonths: 12,
    hobbies: ["Magic", "Coding"]
};
var favoriteActivities; // Identify array
var favoriteActivities2; // Identify array
favoriteActivities = ["sports"]; // not favoriteActivities = "sports";
console.log(person.age);
var item = person.name;
for (var _i = 0, _a = person.hobbies; _i < _a.length; _i++) {
    var hobby = _a[_i];
    console.log(hobby);
}
;
