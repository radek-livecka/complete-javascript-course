let country = "Czech Republic";
let continent = "Europe";
let population = 10;

let isIsland = false;
let language = "";


let markM = 78;
let markH = 1.69;

let johnM = 92;
let johnH = 1.95;

let bmiMark = markM / markH ** 2;
console.log(bmiMark);

let bmiJohn = johnM / johnH ** 2;
console.log(bmiJohn);

let markHigherBmi = bmiMark > bmiJohn;
console.log(markHigherBmi);

if (markHigherBmi) {
    console.log(`Mark's BMI(${bmiMark}) is higher than John's(${bmiJohn})!"`);
} else {
    console.log(`John's BMI(${bmiJohn}) is higher than Mark's(${bmiMark})!"`);
};

const dolphinsScore = 97 + 112 + 101;
const dolphinsScoreAvg = dolphinsScore / 3;

const koalaScore = 109 + 95 + 106;
const koalaScoreAvg = koalaScore / 3;

if (koalaScoreAvg  === dolphinsScoreAvg && (dolphinsScoreAvg && koalaScoreAvg)> 100){
    console.log(`Remíza. Výsledk obou týmů je: ${koalaScoreAvg}`)
} else if (koalaScoreAvg > dolphinsScoreAvg && koalaScoreAvg > 100){
    console.log("Koala je vítěz");
} else if (dolphinsScoreAvg > koalaScoreAvg && dolphinsScoreAvg > 100){
    console.log("Delfín je vítěz");
} else if ((dolphinsScoreAvg && koalaScoreAvg)< 100){
    console.log("Nikdo se nekvalifikoval");
}

const bill = 10;
const bill15 = bill * 0.15;
const bill20 = bill * 0.20;

const Tip = bill >= 50 && bill <= 300 ? console.log(`the bill was ${bill} the tip was ${bill15} sum: ${bill+bill15}`) : console.log(`the bill was ${bill} the tip was ${bill20} sum: ${bill+bill20}`);

