function sumTwoSmallestNumbers(numbers) {  
    let ordered = numbers.sort(function(a,b){return a-b;});
     let result = 0;
     for(i = 0; i < ordered.length; i++) {
       if(i == 0) {
         result += ordered[0];
       }
       if(i == 1)  {
         result += ordered[1];
       }
     }
     return result;
   };