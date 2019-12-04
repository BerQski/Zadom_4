// 1#

String.prototype.RevStr = function() {
  return this.split("")
    .reverse()
    .join("");
};

let strToRev = "mozej utrot ad amad at ortuj ezom";

console.log(strToRev.RevStr());

// 2#

let numToRev = 1234567654321.34;
Number.prototype.RevNum = function() {
  return this.toString()
    .split("")
    .reverse()
    .join("");
};

console.log(numToRev.RevNum());

// 3#

const data = require("./Data.json");
let jsDat = JSON.stringify(data);
let jsDataEnt = JSON.parse(jsDat);
console.log(jsDataEnt);

// {
//     "index": 0,
//     "_id": "5c01097e566bb68fe9611b25",
//     "cost": "434.25",
//     "detailsOfPayent": {
//       "Type": 3,
//       "company": "ECSTASIA",
//       "date": "09-07-2014"
//     }
//   }

// 3)	Based on included JSON file.
// a.	Create a function that will return Json from the file. a
// b.	Create a structures to hold data from the file. b
// c.	Map data from function a to structure from b.
// d.	Create object that will give us data about:
// i.	How much money was spend in 2014
// ii.	What company was earning how much
// iii.	What type on transaction was having what spending’s.
// iv.	Values of the spending in each month
// v.	Values of the spending in each day of the week
