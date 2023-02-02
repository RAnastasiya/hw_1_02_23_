"use strict";

/*
Напишіть функцію, яка приймає два рядки
і повертає true, якщо з літер першого рядка можна скласти другий і навпаки
false - якщо не можна

//compare('test', 'text') -> false
//compare('Mom', 'omm') -> true
//compare('asd', 'Sad') ->true
//compare('asd', 'ssaadd') ->false
//compare('ssaadd', 'asd') ->false
*/


/**
 * 
 * @param {String} arr1 
 * @param {String} arr2 
 * @returns {Boolean}
 */
const checkCompare = (arr1, arr2) => {
    const dictionary1 = new Map()
    arr1.forEach(el => dictionary1.set(el.toLowerCase(), el.toLowerCase()))
    return !arr2.map(el => {
        if (!dictionary1.has(el.toLowerCase())) return false
    }).includes(false);
}
/**
 * 
 * @param {String} arr1 
 * @param {String} arr2 
 * @returns {Boolean}
 */
const compare = ([...str1], [...str2]) => {
    if(str1.length !== str2.length) return false
    return checkCompare(str1, str2) && checkCompare(str2, str1)
}

console.log(compare('test', 'text')); // false
console.log(compare("Mom", "omm")); // true
console.log(compare("asd", "Sad")); // true
console.log(compare('asd', 'ssaadd'));  // false


/**
 * 
 * @param {String} param0 
 * @param {String} param1 
 * @returns {Boolean}
 */
const compare2 = ([...str1], [...str2]) => {
  if (str1.length !== str2.length) return false;
  const dictionary1 = new Map();
  str1.forEach((el) => dictionary1.set(el, el.toLowerCase()));
  return !str2
    .map((el) => {
      if (!dictionary1.has(el.toLowerCase())) return false;
    })
    .includes(false);
};

console.log(compare2("test", "text")); // false
console.log(compare2("Mom", "omm")); // true
console.log(compare2("asd", "Sad")); // true
console.log(compare2("asd", "ssaadd")); // false
