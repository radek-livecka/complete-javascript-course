"use strict";

// const dolphinsScore = 250+23+71;
// const koalasScore = 65+54+49;

const calcAverage = (a, b, c) => (a + b + c) / 3;

const dolphinsAvg = calcAverage(44, 23, 71);
const koalasAvg = calcAverage(250, 54, 49);

// const calcAvgScore = function(soucetScore, pocetScore){
//     const avgScore = soucetScore/pocetScore;
//     return avgScore
// }

// const koalasAvg = calcAvgScore(koalasScore, 3);
// const dolphinsAvg = calcAvgScore(dolphinsScore, 3);
// console.log(koalasAvg, dolphinsAvg);

const winner = function (avgScore1, avgScore2) {
  if (avgScore1 >= avgScore2 * 2) {
    console.log("first wins");
    return avgScore1;
  } else if (avgScore2 >= avgScore1 * 2) {
    console.log("second wins");
    return avgScore2;
  } else {
    console.log("Nobody wins");
  }
};

winner(koalasAvg, dolphinsAvg);

//part 2 Coding Challenge #2
const calcTip = function (bill) {
  if (bill >= 50 && bill <= 300) {
    let tip = bill * 0.15;
    return tip;
  } else {
    let tip = bill * 0.2;
    return tip;
  }
};

console.log(calcTip(100));

const bills = [125, 555, 44];

const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
console.log(tips);

const billWithTips = [
  bills[0] + tips[0],
  bills[1] + tips[1],
  bills[2] + tips[2],
];
console.log(billWithTips);

// tips.push(calcTip(bills[0]));
// tips.push(calcTip(bills[1]));
// tips.push(calcTip(bills[2]));

// billWithTips.push(bills[0]+tips[0]);
// billWithTips.push(bills[1]+tips[1]);
// billWithTips.push(bills[2]+tips[2]);

//object challenge

const jonas = {
  firstName: "Jonas",
  friends: ["Michael", "Peter", "Steven"],
};

console.log(
  `${jonas.firstName} has ${jonas.friends.length} friends. And his best friend is ${jonas.friends[0]}`
);

// part2 coding challenge #3

const mark = {
  firstName: "Mark",
  lastName: "Miller",
  mass: 78,
  height: 1.69,
  bmi: Number,
  calcBmi: function () {
    this.bmi = this.mass / this.height ** 2;
    return this.bmi;
  },
};

const john = {
  firstName: "John",
  lastName: "Smith",
  mass: 92,
  height: 1.95,
  bmi: Number,
  calcBmi: function () {
    this.bmi = this.mass / this.height ** 2;
    return this.bmi;
  },
};

console.log(mark.calcBmi());
console.log(john.calcBmi());
// console.log(mark.bmi);

if (mark.calcBmi() > john.calcBmi()) {
  console.log(
    `${mark.firstName} ${mark.lastName}'s bmi is: ${mark.bmi} and is higher than ${john.firstName}'s`
  );
} else {
  console.log(
    `${john.firstName} ${john.lastName}'s bmi is: ${john.bmi} and is higher than ${mark.firstName}'s`
  );
}

// part 2 coding challenge #4

const bills2 = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
const tips2 = [];
const total2 = [];

const calcTip2 = function (bill) {
  if (bill >= 50 && bill <= 300) {
    let tip = bill * 0.15;
    return tip;
  } else {
    let tip = bill * 0.2;
    return tip;
  }
};

for (let i = 0; i <= bills2.length - 1; i++) {
  //tips2.push(calcTip2(bills2[i]));
  let x = calcTip2(bills2[i]);
  tips2.push(x);
  total2.push(x + bills2[i]);
  console.log(total2);
}

const calcAverage2 = function (arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum / arr.length;
  //console.log(sum);
};

console.log(calcAverage2(total2));

// npm install live-server -g

console.log("něco, bla");
