module.exports = function zeros(expression) {
  // your solution
  const expArr = expression.split('*');
  
  let resArr = expArr.map((i) => {
    return {
      number: parseInt(i),
      iter: itemCounter(i, '!') 
    }
  });
  
  let resNumber = resArr.reduce((mult,i) => {
    return mult *= nFactorial(i.iter, i.number);
  },1);
  
  function itemCounter(str, item) {
      let pos = -1,
      count = 0;
    
      while ((pos = str.indexOf(item, pos + 1)) != -1) {
        count += 1
      }
  
    return count
  }
  
  function factorial(n) {
    return (n != 1) ? n * factorial(n - 1) : 1;
  }
  
  function nFactorial(n, number) {
    let res = number;
    
    while( n > 0) {
      res = factorial(res)
      n--
    }
    
    return res;
  }
  
  return itemCounter(String(resNumber), 0)
}
