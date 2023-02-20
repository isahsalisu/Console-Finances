

var totalMonths = finances.length;
 // indexing arrays with the data

var netTotal = 0;
for (var i = 0; i < finances.length; i++) {
    netTotal += finances[i][1];
}

var netChange = 0;
var changeArray = [];
for (var i = 1; i < finances.length; i++) {
    var changePerMonth = finances[i][1] - finances[i - 1][1];
    netChange += changePerMonth;
    changeArray.push(changePerMonth);
}

var avgChange = (netChange / (totalMonths - 1)).toFixed(2);

var maxIncrease = changeArray.reduce(function(a, b) {
    switch (true) {
        case a > b:
            return a;
        default:
            return b;
    }
});

var indexMax = changeArray.indexOf(maxIncrease);
var greatestMonthIncrease = finances[indexMax + 1][0];

var maxDecrease = changeArray.reduce(function(a, b) {
    switch (true) {
        case a < b:
            return a;
        default:
            return b;
    }
});

var indexMin = changeArray.indexOf(maxDecrease);
var greatestMonthDecrease = finances[indexMin + 1][0];

// // print the results to the console

console.log("------------- " + "Financial Analysis" + "------------\n" + "--------------------------------------------");
console.log("Total Months: " + totalMonths);
console.log("Total: $" + netTotal);
console.log("Average Change: $" + avgChange);
console.log("Greatest increase in Profits: " + greatestMonthIncrease + " ($" + maxIncrease + ")");
console.log("Greatest decrease in Profits: " + greatestMonthDecrease + " ($" + maxDecrease + ")");




