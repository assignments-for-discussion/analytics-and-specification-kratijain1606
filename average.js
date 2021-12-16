
function average(numbers) {
  let ans = 0;//initialize answer
  let cntNan=0;
  let len = numbers.length;//length of array
  let len1 = len;//length of array
  numbers.map((num,i)=>{
    if(!isNaN(num)){
      ans += num; //add value to ans if it is a number
    }
    else{
      cntNan +=1; //increment cntNan if it is not a number
      len -= 1 //if it is not a number, reduce the length of the array
    }
  })
  if(cntNan>=0.75*len1){
    return NaN;//return Nan if most of the values are Nan
  }
  return ans/len //return the average
}
module.exports = {average};//export the function
