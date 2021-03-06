
function average(numbers) {
  let cntNaN=0;//count of NaN

  const countNaN = (arr) =>
   arr.reduce((a, v) => 
   (Number.isNaN(v) ? a + 1 : a), 0);
   // function to count occurrences of a value in an array

  let len = numbers.length;//length of array

  cntNaN=countNaN(numbers);//count occurrences of NaN
  
  const newArray = numbers.filter(function (value) {
    return !Number.isNaN(value);//filter out NaN
  });//loop 1 to remove NaN

  if(cntNaN>=0.75*len){
    return NaN;//return Nan if most of the values are NaN
  }
  else{
    return newArray.reduce((a, b) => a + b, 0)/newArray.length;//return average
    //loop2 to calculate average
  }



}
module.exports = {average};//export the function
