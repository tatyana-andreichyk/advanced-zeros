module.exports = function getZerosCount(number, base) {
  let arrSimpleNums = factorizeToSimpleNums(base).split(",");    
  let maxValInArray = 0; // array can't have negative values
  
  for(let i = 0; i < arrSimpleNums.length; i++){
      let arrElemVal = parseInt(arrSimpleNums[i]);
      if (arrElemVal > maxValInArray){
          maxValInArray = arrElemVal;
      }
  }
  
  let zerosCountRes = 0;
  while (number > 0) {
    number = Math.floor(number / maxValInArray);
    zerosCountRes = zerosCountRes + number;
  }
  return zerosCountRes;
}



function isSimple(num) {
  let simpleNum = true;
  if (num >= 2) { 
    for (let i = 2; i < num; i++) {
      if (num % i  == 0) {
        simpleNum = false;
      } 
    }
    return simpleNum;
  }   
}


 
function factorizeToSimpleNums(val) {
  let strSimpleNums = "";
  let k = 2;
  while(val != 1) {
    if (val % k == 0 && isSimple(k)) {
      strSimpleNums +=  k + ",";
      val /= k;
    } else  {
        k++;
    }    
  }
  return strSimpleNums;
}