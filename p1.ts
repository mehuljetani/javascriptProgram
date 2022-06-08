let arr : number[] = [16,12,14,10];
console.log(arr);        
let sum : number = arr.reduce( (sum,cur) => sum + cur );
console.log("The sum of an array = " + sum);