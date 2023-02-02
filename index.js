"use strict";

// const map1 = new Map();
// console.log( map1);
// console.log(typeof map1);
// const dictionary = new Map();
// dictionary.set('dog', 'пес');
// dictionary.set('cat', 'кіт');
// dictionary.set('forest', 'ліс');
// dictionary.set('rat', 'щур');
// dictionary.set('field', 'поле');
// dictionary.set('funny', 'веселий');
// dictionary.set('sad', 'сумний');
// dictionary.set('happy', 'щасливий');
// dictionary.set('in', 'у');
// dictionary.set('at', 'в');
// dictionary.set('morning', 'ранок');
// dictionary.set('go', 'ідти');
// dictionary.set('jump', 'стрибати');
// dictionary.set('walk', 'гуляти');
// dictionary.set('and', 'і');
// console.log(dictionary);
// const sentence  = "In  morning"
// const translate = str => {
//     let result = ''
//     str.trim().toLowerCase().split(' ').forEach(el => {
//         if(dictionary.has(el))
//         if(el === '') result += ' '
//         result += dictionary.get(el)
//     });
//     return result
// }
// console.log(translate(sentence));

// const number1 = [ 1,3,6,3,5,7,23]
// const number2 = [ 1,3,623,2435,5,7,23]
// console.log([... new Set([...number1, ...number2])])

const user = {
  personalInfo: {
    id: 12,
    firstName: "Tom",
    lastName: "Qwerrty",
    bday: {
      day: 28,
      month: 6,
      year: 1987,
    },
    gender: "male",
  },
  contactInfo: {
    phone: "123-56-89",
    email: "qwe@gmail.com",
    address: {
      town: "NY",
      street: "Avenu 25",
      house: 2546,
    },
  },
  profession: "programmer",
};

// Destructuring object
// const {
//   personalInfo: { gender: userGender },
//   contactInfo: {
//     email,
//     phone: userTel,
//     address: { house: houseNumber },
//   },
// } = user;
// console.log(userGender);
// console.log(email);
// console.log(userTel);
// console.log(houseNumber);

// ... rest
// const {
//   contactInfo: { email },
//   ...rest
// } = user;

// console.log(rest);

// Destructuring array
// const colors = ["red", "teal", "blue", "aqua"];
// const [red, , , aqua] = colors;
// const [one, ...restColors] = colors;
// console.log(restColors);
