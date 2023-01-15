// code your solution here
function saturdayFun(activity = "roller-skate") {
  let fun = `This Saturday, I want to ${activity}!`;
  return fun;
}
function mondayWork(activity = "go to the office") {
  let fun = `This Monday, I will ${activity}.`;
  return fun;
}
function wrapAdjective(emphasis = "*") {
  const innerFunction = function (adjective = "special") {
    return `You are ${emphasis}${adjective}${emphasis}!`;
  };
  return innerFunction;
}
