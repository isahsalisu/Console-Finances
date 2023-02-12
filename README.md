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