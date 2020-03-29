"use strict";
var Role;
(function (Role) {
    Role[Role["ADMIN"] = 5] = "ADMIN";
    Role["READONLY"] = "USER";
    Role[Role["AUTHOR"] = 15] = "AUTHOR";
    Role[Role["CUSTOMER"] = 16] = "CUSTOMER";
})(Role || (Role = {}));
var person = {
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
var favoriteActivities; // Identify array
var favoriteActivities2; // Identify array
favoriteActivities = ["sports"]; // not favoriteActivities = "sports";
var neverChangingArray = [
    "Jan",
    "Feb",
    "March",
    "April",
    "May",
    "June"
];
console.log(person.age);
for (var _i = 0, _a = person.role; _i < _a.length; _i++) {
    var hobby = _a[_i];
    console.log(hobby);
}
if (person.userType === Role.ADMIN) {
    console.log("Your user type is: " + person.userType);
}
