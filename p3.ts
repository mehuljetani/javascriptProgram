let arr : number[] = [12,13,1,10,34,100];
console.log(arr);

let max : number[] = arr.sort(function(a, b){return b-a});

console.log("Three Largest are : ");

let res : number[] = max.slice(0,3);
console.log(res + ",");