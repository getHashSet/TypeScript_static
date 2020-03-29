enum Role {
  ADMIN = 5,
  READONLY = 'USER',
  AUTHOR = 15,
  CUSTOMER
}

const person: {
  name: string;
  age: number;
  totalNumberOfMonths: 12; // this can be assined to a specific number.
  hobbies: string[];
  role: [number, string]; //tuple
  userType: any; //does not work to be assined to string.
} = {
  name: "Matthew",
  age: 35,
  totalNumberOfMonths: 12,
  hobbies: ["Magic", "Coding"],
  role: [2, "author"],
  userType: Role.ADMIN
};

person.role.push(11);
// person.role[1] = 11; // error
// person.role = [2, "Me"]; // good
// person.role = [2, "me", "you"]; // no good

let favoriteActivities: string[]; // Identify array
let favoriteActivities2: any[]; // Identify array
favoriteActivities = ["sports"]; // not favoriteActivities = "sports";

const neverChangingArray: string[] = [
  "Jan",
  "Feb",
  "March",
  "April",
  "May",
  "June"
];

console.log(person.age);

for (const hobby of person.role) {
  console.log(hobby);
}

if (person.userType === Role.ADMIN) {
  console.log("Your user type is: " + person.userType);
}
