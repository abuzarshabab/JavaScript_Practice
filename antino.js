str1 = 'Antino'
let reverseStr1= [];


for(let i = str1.length -1; i >=  0; i--) {
  reverseStr1.push(str1[i])
}

console.log(reverseStr1)


const str = "my name is john"
//expected output = 4
let vovels = ['a', 'e', 'i', 'o', 'u']
let counter = 0;

for(let i = 0 ; i < str.length ; i++) {
for(let j = 0 ; j < vovels.length ; j++) {
    if(str[i] === vovels[j])  counter++   
   }
}


console.log(counter)





/**
 * 
 */

 const arr1 = [1,2,3,2,3,2,1]

 const output = [];
 
 //expected output = [1,2,3]
 
 for(let i = 0; i < arr1.length; i++)
  { 
    if(i == 0) {
      console.log(arr1[i])
      output.push(arr1[i])
      continue;
    }
  
    let isMatched = false;
    for(let j = 0; j < output.length; j++) {
      if(arr1[i] === output[j]) {
        isMatched = true;
      }
    }
    if(isMatched === false) {
      console.log(arr1[i])
      output.push(arr1[i])
    }    
  }

  console.log(output)
  
 // Create temp for holding the printed value (initially it'll be empty)
 // iterate throughout