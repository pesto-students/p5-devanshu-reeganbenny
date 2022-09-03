function memoize(fn){
	const cache = new Map();
  return function (...args) {
      const key = args.toString();
      if(cache.has(key)){
          return cache.get(key);
      }
      cache.set(key,fn(...args));
      return cache.get(key);
  };
}

function factorial(num) { 
  if(num === 0){
    return 1;
  }
	return num * factorial(num - 1);
  }
  
const memoizeFactorial = memoize(factorial);
  
function time(fn){
  console.time();
  fn();
  console.timeEnd();
}
  
time(() => memoizeFactorial(50,100));

time(() => memoizeFactorial(20));
time(() => memoizeFactorial(50));
time(() => memoizeFactorial(50));
time(() => memoizeFactorial(50));
time(() => memoizeFactorial(50));



