var arr = [12, 13, 1, 10, 34, 100];
console.log(arr);
var max = arr.sort(function (a, b) { return b - a; });
console.log("Three Largest are : ");
var res = max.slice(0, 3);
console.log(res + ",");
