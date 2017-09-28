module.exports = function zeros(expression) {
  // your solution
    const expArr = expression.split('*');
  // console.log(expArr)
  
  let resArr = expArr.map((i) => {
    return {
      number: parseInt(i),
      iter: itemCounter(i, '!') 
    }
  });
  // console.log(resArr)
  let resNumber = resArr.reduce((mult,i) => {
    let quality;
    
    if(i.iter === 1) {
      quality = factorial(i.number);
    } else {
      if(i.number % 2 === 0) {
        quality = factorialDubleEv(i.number);
        
      } else {
        quality = factorialDuble(i.number);
       
      }
    }
    
    return mult *= quality;
  },1);
 console.log(resNumber)
  function itemCounter(str, item) {
      let pos = -1,
      count = 0;
    
      while(str[str.length - pos] === '0') {
    count += 1;
    pos += 1;
  }
    
  
    return count
  }
  
  function factorial(n) {
    return (n != 1) ? n * factorial(n - 1) : 1;
     
  }
  
  function factorialDuble(n) {
    // console.log(n)
    return (n != 1) ? n * factorialDuble(n - 2) : 1;
     
  }
  
  function factorialDubleEv(n) {
    return (n != 2) ? n * factorialDubleEv(n - 2) : 2;
  }
  
  return itemCounter(String(resNumber), 0)
}
