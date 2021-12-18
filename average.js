
function average(numbers) {
  let cntNaN=0;//count of NaN

  const countOccurrences = (arr, val) => arr.reduce((a, v) => (v === val ? a + 1 : a), 0);// function to count occurrences of a value in an array

  let len = numbers.length;//length of array

  cntNaN=countOccurrences(numbers,NaN);//count occurrences of NaN
  
  if(cntNaN>=0.75*len){
    return NaN;//return Nan if most of the values are NaN
  }

  const newArray = oldArray.filter(function (value) {
    return !Number.isNaN(value);//filter out NaN
  });//loop 1 to remove NaN

  return newArray.reduce((a, b) => a + b, 0) / newArray.length;//return average
//loop2 to calculate average


}
module.exports = {average};//export the function
