
var months = finances.length;
var netTotal = 0;
var changes = [];
var avgChange;
var greatestIncrease;
var greatestDecrease;
//The total number of months included in the dataset.

for (var i = 0; i < months; i++) {
    netTotal += finances[i][1];
    if (i > 0) {
        changes.push(finances[i][1] - finances[i-1][1]);
    }
}
//The net total amount of Profit/Losses over the entire period.

//The average of the **changes** in Profit/Losses over the entire period.
//  You will need to track what the total change in profits are from month to month and then find the average.
//  (`Total/Number of months`)
avgChange = (changes.reduce((a, b) => a + b) / changes.length).toFixed(2);

//The greatest increase in profits (date and amount) over the entire period.

greatestIncrease = changes.reduce((a, b) => {
    switch (true) {
        case a >= b:
            return a;
        case a < b:
            return b;
    }
});

//The greatest decrease in losses (date and amount) over the entire period.
greatestDecrease = changes.reduce((a, b) => {
    switch (true) {
        case a <= b:
            return a;
        case a > b:
            return b;
    }
});

var increaseIndex = changes.indexOf(greatestIncrease);
var decreaseIndex = changes.indexOf(greatestDecrease);

///////////////////////////////////////
// This is the Summation of the Final output to console

console.log("------------- "+ "Financial Analysis" +"------------\n" + "--------------------------------------------")

console.log(`Total months: ${months}`);
console.log(`Net total: $${netTotal}`);
console.log(`Average change: $${avgChange}`);
console.log(`Greatest increase in profits: ${finances[increaseIndex + 1][0]} ($${greatestIncrease})`);
console.log(`Greatest decrease in profits: ${finances[decreaseIndex + 1][0]} ($${greatestDecrease})`);




