let arr : number[] = [1,1];
let n : number = 10;
for(let i=2;i<n;i++) {
    arr[i] = 0;
    for(let j=0;j<i;j++)
        arr[i] = arr[i-j-1] * arr[j] + arr[i];
}
console.log(arr);