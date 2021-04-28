function check(string) {
  if(string.length % 2) {
    throw Error('false')
  }
  const object = {
    '>': '<',
    '}': '{',
    ']': '['
  }
  let queue = [];

  [...string].forEach(lett => {
    if (object[lett]) {
      let end = queue.pop()
      if (!end || end !== object[lett]) {
        throw Error('false')
      }
    } else {
      queue.push(lett)
    }
  })
  
  return true;
};


console.log(check('{[{<>}]}'))
console.log(check('{{[<>]}}'))