module.exports = function check(str, bracketsConfig) {
  let brackets = bracketsConfig.flatMap(i => i.join(''));
  for(let i = 0; i < brackets.length; i++)
    {
      if(str.includes(brackets[i]))
      {
        str = str.replace(brackets[i],'');
        i -= 2;
      }
    }
  return str.length == 0 ? true : false;
}