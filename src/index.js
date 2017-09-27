module.exports = function zeros(expression) {
  // your solution
  const number = parseInt(expression);
  
  function factorial(n) {
    return (n != 1) ? n * factorial(n - 1) : 1;
  }
  
  const factorialNumber = factorial(number),
        str = String(factorialNumber);
        
  let pos = -1,
      count = 0;
    
  while ((pos = str.indexOf('0', pos + 1)) != -1) {
    count += 1
  }
  
  return count
}
