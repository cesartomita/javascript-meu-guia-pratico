console.log(Object.is(5,5))         // true
console.log(Object.is(5,'5'))       // false
console.log(Object.is('aaa','aaa')) // true
console.log(Object.is(+1,-1))       // false
console.log(Object.is(NaN,NaN))     // true
console.log(Object.is(true,true))   // true
console.log(Object.is(false,false)) // true