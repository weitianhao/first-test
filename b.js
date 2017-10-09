var arr = [3,3,3,2,1,2,4]
var arr1 = []
arr.forEach(function(num){
    if(arr1.indexOf(num)==-1){
        arr1.push(num)
    }
})
console.log(arr1)