const arr1 = [1,2,3,2,3,2,1]

const output = [];

//expected output = [1,2,3]


for(let i = 0; i < arr1.length; i++)
{ 
  /* For first iteration */
  if(i == 0) {
    console.log(arr1[i])
    output.push(arr1[i])
    continue;
  }

  /* Check is it already printed */
  let isMatched = false;
  for(let j = 0; j < output.length; j++) {
    if(arr1[i] === output[j]) {
      isMatched = true;
    }
  }
  
  /* If it's not matched with earlier elements then push to the array*/
  if(isMatched === false) {
    console.log(arr1[i])
    output.push(arr1[i])
  }    
}

console.log(output)