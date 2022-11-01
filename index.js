// code your solution here
function saturdayFun(activity = "roller-skate") {
    return `This Saturday, I want to ${activity}!`
}

function mondayWork(activity = "go to the office") {
    return `This Monday, I will ${activity}.`
}

function wrapAdjective(flair = '*') {
    return function (word = 'special') {
        return `You are ${flair}${word}${flair}!`
    }
}

//function outer(greeting, msg = "It's a fine day to learn") {
    //return function (name, lang = "Python") {
      //return `${greeting}, ${name}! ${msg} ${lang}`;
    //};
  //}