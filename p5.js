var arr = [1, 1];
var n = 10;
for (var i = 2; i < n; i++) {
    arr[i] = 0;
    for (var j = 0; j < i; j++)
        arr[i] = arr[i - j - 1] * arr[j] + arr[i];
}
console.log(arr);
