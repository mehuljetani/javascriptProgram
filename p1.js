var arr = [16, 12, 14, 10];
console.log(arr);
var sum = arr.reduce(function (sum, cur) { return sum + cur; });
console.log("The sum of an array = " + sum);
