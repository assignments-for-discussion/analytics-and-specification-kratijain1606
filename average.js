
function average(numbers) {
  let ans = 0;//initialize answer
  let len = numbers.length;//length of array
  numbers.map((num,i)=>{
    if(!isNaN(num)){
      ans += num; //add value to ans if it is a number
    }
    else{
      len -= 1 //if it is not a number, reduce the length of the array
    }
  })
  return ans/len //return the average
}
module.exports = {average};//export the function
