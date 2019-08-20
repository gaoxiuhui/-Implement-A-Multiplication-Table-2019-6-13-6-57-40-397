
function createMultiplyTable(firstNumber, secondNumber){
    var output="";
    var valid=isValid(firstNumber, secondNumber);
      if(!valid){
       return valid;
      }
      var multiplyArray=generateMultiplyArray(firstNumber, secondNumber);
      output=printMultiplyTable(multiplyArray);
      return output;
}


function isValid(firstNumber, secondNumber){
 if( firstNumber<=secondNumber&&firstNumber>=1&&firstNumber<=100&&secondNumber>=1&&secondNumber<=100){
    return true;
 }
else return false;
}

function printMultiplyTable(generatetArray){
   var output="";
   for(var i=0;i<generatetArray.length;i++){
      for(var j=0;j<generatetArray[i].length;j++){
       output+=generatetArray[i][j]+" ";
      }
      output+="\n";
   }
   return output;
   }

function generateMultiplyArray(firstNumber, secondNumber){
   var generatetArray=[]; 
   for(let rowIndex=firstNumber;rowIndex<=secondNumber;rowIndex++){
      generatetArray[rowIndex-firstNumber]=[];
       for(let colunmIndex=firstNumber;colunmIndex<=rowIndex;colunmIndex++){  
         var res= rowIndex*colunmIndex;        
         generatetArray[rowIndex-firstNumber][colunmIndex-firstNumber]=colunmIndex+"*"+rowIndex+"="+res;
       }
   }
   return generatetArray;
}
module.exports = {
    isValid,
    generateMultiplyArray,
    printMultiplyTable,
    createMultiplyTable
   };