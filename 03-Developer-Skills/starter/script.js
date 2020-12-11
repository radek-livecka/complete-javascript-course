// Remember, we're gonna use strict mode in all scripts now!
'use strict';

const calcTempAmpl = function(arr){
    let max = arr[0];
    let min = arr[0];
    for (let i = 0; i < arr.length; i++){
        let currentTemp = arr[i];
        if (currentTemp > max){ 
            max = currentTemp;
        } 
        if (currentTemp < min){ 
            min = currentTemp;
        };
    }
    
    let ampl = (max) - (min);
    console.log(max, min, ampl);
}

calcTempAmpl([5, 2, 13, 3, 20, -1]);

const data1 = [17, 21, 23];
const data2 = [12, 5, -5, 0, 4];

const printForecast = function(arr1, arr2){
    let countArr = arr1.concat(arr2);
    for (let i = 0; i < countArr.length; i++){
        console.log(`${countArr[i]}ºC in ${i+1}
        days`);
    }
}

printForecast(data1, data2);
//printForecast(data2);