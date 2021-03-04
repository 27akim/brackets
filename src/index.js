module.exports = function check(str, bracketsConfig) {
  let brackets = bracketsConfig.flatMap(i => i.join(''));
  while(str.length > 1)
  {
    for(let i = 0; i < brackets.length; i++)
    {
      if(str.includes(brackets[i]))
      {
        str = str.replace(brackets[i],'');
      }
    }
  }
  return parseInt(str);
}
