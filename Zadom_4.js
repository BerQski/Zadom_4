// // 1#

// String.prototype.RevStr = function() {
//   return this.split("")
//     .reverse()
//     .join("");
// };

// let strToRev = "mozej utrot ad amad at ortuj ezom";

// console.log(strToRev.RevStr());

// // 2#

// let numToRev = 1234567654321.34;
// Number.prototype.RevNum = function() {
//   return this.toString()
//     .split("")
//     .reverse()
//     .join("");
// };

// console.log(numToRev.RevNum());

// 3#
const setUrl = "./Data.json";

function jsDataEnt(setUrl) {
  const data = require(setUrl);
  const str = JSON.stringify(data);
  return JSON.parse(str);
}
console.log(jsDataEnt(setUrl));

const getDzejson = jsDataEnt(setUrl);

function ObjInside(Type, company, date) {
  this.Type = Type;
  this.company = company;
  this.date = new Date(date);
}

function ObjBig(id, _id, cost, Type, company, date) {
  this.id = id;
  this._id = _id;
  this.cost = new Number(parseFloat(cost).toFixed(2));
  this.detailsOfPayent = new ObjInside(Type, company, date);
}

let holderFolder = getDzejson.map(
  d =>
    new ObjBig(
      d.index,
      d._id,
      d.cost,
      d.detailsOfPayent.Type,
      d.detailsOfPayent.company,
      d.detailsOfPayent.date
    )
);
console.log(holderFolder[0]);

//i
const in2014 = function(hf) {
  return hf
    .filter(fil => fil.detailsOfPayent.date.getFullYear() == 2014)
    .reduce((accum, hf) => accum + hf.cost, 0);
};

console.log(in2014(holderFolder));
// ii.	What company was earning how much

const whatHow = function(hf, name) {
  return hf
    .filter(fil => fil.detailsOfPayent.company === name)
    .reduce((accum, hf) => accum + hf.cost, 0);
};

console.log(whatHow(holderFolder, "MANGELICA"));
// iii.	What type on transaction was having what spending’s.
const findType = function(holderFolder) {
  return holderFolder
    .map(d => d.detailsOfPayent.Type)
    .filter((d, i, holderFolder) => holderFolder.indexOf(d) === i);
};

console.log(findType(holderFolder));
// What type on transaction was having what spending’s.
