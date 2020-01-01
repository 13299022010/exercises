let arr = [1,-12,3,4,9];
function reduce(arr,fn,initVal){
  initVal?arr.unshift(initval):null;
  while(arr.length>1){
    arr.splice(0,2,fn(arr[0],arr[1]));
  }
  console.log(arr);
}
reduce(arr,(v1,v2)=>{return v1+v2},0);