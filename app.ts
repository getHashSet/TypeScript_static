// const person: {
// name: string;
// age: number;
// totalNumberOfMonths: 12; // this can be assined to a specific number.
// } = {
const person = {
  name: "Matthew",
  age: 35,
  totalNumberOfMonths: 12,
  hobbies: ["Magic", "Coding"]
};

let favoriteActivities: string[]; // Identify array
let favoriteActivities2: any[]; // Identify array
favoriteActivities = ["sports"]; // not favoriteActivities = "sports";

console.log(person.age);

const item = person.name;

for (const hobby of person.hobbies) {
  console.log(hobby);
};
