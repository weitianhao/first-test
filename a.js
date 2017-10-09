var arr = [3,3,3,2,1]
var arr1=[]
for(var i=0;i<arr.length;i++){
    if(arr1.indexOf(arr[i])==-1){
        arr1.push(arr[i])
    }
}
console.log(arr1)