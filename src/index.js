module.exports = function check(str, bracketsConfig) {
  let brackets = bracketsConfig.flatMap(i => i.join(''));
  let isString = true;
  if(parseInt(str) == NaN)
  {
    isString = false;
  }
  for(let i = 0; i < brackets.length; i++)
    {
      if(isString)
      {
        if(str.includes(brackets[i]))
      {
        str = str.replace(brackets[i],'');
        i -= 3;
      }
      }
      else
      {
        if(str.includes(parseInt(brackets[i])))
      {
        str = str.replace(brackets[i],'');
        i -= 3;
      }
      }
    }
  return str.length == 0 ? true : false;
}