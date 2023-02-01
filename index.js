"use strict";

// const options = {
//   breckets: {
//     "(": ")",
//     "[": "]",
//     "{": "}",
//   },
// };

// /**
//  *
//  * @param {string} str
//  * @param {object} options
//  * @param {object} options.breckets
//  * @returns {object}
//  */
// const checkExpression = (str, options) => {
//   const stack = new Stack(str.length);
//   const closesBreckets = Object.values(options.breckets);
//   for (const symbol of str) {
//     // console.log(symbol);
//     if (options.breckets[symbol]) {
//       stack.push(symbol);
//       continue;
//     }
//     const lastSymbolInStack = stack.pick();
//     const correctSymbol = options.breckets[lastSymbolInStack];
//     if (symbol === correctSymbol) {
//       stack.pop();
//     } else if (closesBreckets.includes(symbol)) {
//       return false;
//     }
//   }
//   console.log(stack);
//   return stack.isEmpty;
// };

// console.log(checkExpression(" &hh 4 ( gj[ 6 ^ ]    {})   88 ", options));


const queue = new Queue(1,5,4);
console.log(queue)
console.log(queue.enQueue(77))
console.log(queue.deQueue())
console.log(queue)