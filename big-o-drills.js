'use strict';

//Even or Odd - O(1) Constant Time 

function isEven(value){
  if (value % 2 == 0){
    return true;
  }
  else
    return false;
}

//Are you here? - O(n^2) Polynomial Time

function areYouHere(arr1, arr2) {
  for (let i=0; i<arr1.length; i++) {
    const el1 = arr1[i];
    for (let j=0; j<arr2.length; j++) {
        const el2 = arr2[j];
        if (el1 === el2) return true;
  }
}
return false;
}