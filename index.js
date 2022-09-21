// code your solution here
function saturdayFun(skate = "roller-skate") {
return `This Saturday, I want to ${skate}!`
}

function mondayWork(activity = "go to the office"){
 return `This Monday, I will ${activity}.`
}

function wrapAdjective(notSure = "*") {
 return function(adjective="special"){
  return `You are ${notSure}${adjective}${notSure}!`
 }
}

console.log(saturdayFun());