// let counter = 1;

// while (counter < 11) {
//   console.log("counter: ", counter);
//   counter += 1;
// }

// let clientCounter = 1;
// const maxClients = 15;

// while (clientCounter < maxClients) {
//   console.log(clientCounter);
//   clientCounter += 1;
// }

// let password = "";

// do {
//   password = prompt("Введіть пароль довший 4-х символів", "");
// } while (password.length < 6);

// console.log("Ввели пароль: ", password);

// for (let i = 0; i <= 20; i += 5) {
//     console.log(i);
//   }

// const target = 3;
// let sum = 0;

// for (let i = 0; i <= target; i += 1) {
//   sum += i;
// }

// console.log(sum);

// const max = 10;
// for (let i = 0; i < max; i += 1) {
//   console.log(`${max} % ${i} = `, max % i);
// }

// for (let i = 0; i <= 5; i += 1) {
//     console.log(i);
//     if (i === 3) {
//       console.log("Знайшли число 3, перериваємо виконання циклу");
//       break;
//     }
//   }
//   console.log("Лог після циклу");

// const number = 10;

// for (let i = 0; i < number; i += 1) {
//   if (i % 2 === 0) {
//     continue;
//   }

//   console.log("Непарне i: ", i); // 1, 3, 5, 7, 9
// }

// const pricePerItem = 3500;
// const orderedQuantity = 4;

// // Change code below this line
// const totalPrice = pricePerItem * orderedQuantity;
// console.log(pricePerItem * orderedQuantity)

// const carts = [12, 13, 55, 99, 123, 555 ];
// let total = 0;

// // for (let i=0; i<cart.length; i+=1){
// //     total += cart[i];
// // }
//     for (const cart of carts)
//     total += cart;

// console.log('Total ', total)

// const numbers = [1, 3, 10, 6, 16, 63, 54, 98, 31, 95];
// let total = 0;

// // for(let i = 0; i < numbers.length; i += 1){
// //     const number = numbers[i];
// //     console.log(number);

// //     if(number %2 === 0){
// //         console.log('Ok!!!!')

// //         total += number;
// //     }
// // }

// for(const number of numbers){

//     console.log(number);

//         if(number %2 === 0){
//         console.log('Ok!!!!')

//         total += number;
//     }
// }
// console.log('Total ', total);

// const logins = ['mango', 'cosmo', 'fruit', 'apple'];
// const loginToFind = 'fruit';
// let message = `Пользователь ${loginToFind} не найден.`;

// for(let i = 0; i < logins.length; i += 1){
//     const login = logins[i];

//     if(login === loginToFind){
//         message = `Пользователь ${loginToFind} найден.`;
//         break;
//     }
//     // message = `Пользователь ${loginToFind} не найден.`;
// }
// console.log(message);

// for(const login of logins){
//     console.log(login);
//     if(login === loginToFind){
//     message = `Пользователь ${loginToFind} найден.`;
//     break;
// }
// }
// console.log(message);

// const message = logins.includes(loginToFind)
// ? `Пользователь ${loginToFind} найден.`
// : `Пользователь ${loginToFind} не найден.`;

// console.log(message);

// const numbers = [19, 12, 98, 101, 34, 2, 56, 78];
// let smallestNumber = numbers[0];
// // console.log(smallestNumber);

// for (const number of numbers){
//     // console.log(number);

//     if (number < smallestNumber){
//         smallestNumber = number;
//     }
// }
//     console.log(smallestNumber);

// const friends = ['mango', 'cosmo', 'fruit', 'apple'];
// // let string = '';

// // for (friend of friends){
// //     string += friend + ',';
// // }

// // string = string.slice(0, string.length - 1);

// const string = friends.join(', ');

// console.log(string);

// const string = 'JavaScript';
// const letters = string.split('');
// let invertedString = '';

// console.log(letters);

// for (const letter of letters){
//     console.log(letter);

//     // if (letter === letter.toLowerCase()){
//     //     console.log('Эта буква в нижнем регистре !!! -', letter);

//     //     invertedString += letter.toUpperCase();
//     // }else{
//     //     console.log('Эта буква в верхнем регистре !!! -', letter);
//     //     invertedString += letter.toLowerCase();
//     // }

//     invertedString += letter === letter.toLowerCase()
//     ? letter.toUpperCase()
//     : letter.toLowerCase();

// }
// console.log('invertedString: ', invertedString);

// const title = 'Top 10 benefits of React framework';
// const normalizedTitle = title.toLowerCase();
// // console.log(normalizedTitle);

// const words = normalizedTitle.split(' ');
// // console.log(words);

// const slug = words.join('-')
// // console.log(slug);

// const slug1 = title.toLowerCase( ).split(' ').join('-');
// console.log(slug1);

// const array1 = [5, 10, 15, 20];
// const array2 = [10, 20, 30];
// let total = 0;

// const numbers = array1.concat(array2);

// for(const number of numbers){
//     total += number;
// }
// console.log(total);

// const cards = [
//     'Карточка-1',
//     'Карточка-2',
//     'Карточка-3',
//     'Карточка-4',
//     'Карточка-5'
// ];
// console.table(cards);

// // const cardToRemove = 'Карточка-3';
// // const index = cards.indexOf(cardToRemove);
// // console.log(index);

// // cards.splice(index, 1);
// // console.table(cards);

// // const cardToRemove = 'Карточка-6';
// // const index = 5;

// // cards.splice(index, 0, cardToRemove);

// // console.table(cards);

// const cardToRemove = 'Карточка-4';
// const index = cards.indexOf(cardToRemove);
// console.log(index);

// cards.splice(index, 1, 'New Карточка-4');

// console.table(cards);

// const genres = ['Jazz', 'Blues'];
// genres.push("Rock'n'roll");
// // const firstEl = genres[0]
// // console.log(firstEl);

// // const lastEl = genres[genres.length - 1]
// // console.log(lastEl);

// // const deleteEl = genres.shift();
// // console.log(deleteEl);
// // console.log(genres);

// // genres.unshift('Country', 'Reggae');
// genres.splice(0, 0, 'Country', 'Reggae');
// console.table(genres);

// const values = '8 11';
// const arr = values.split(' ');
// const firstValue = Number(arr[0]);
// const lastValue = Number(arr[arr.length -1]);
// const total = firstValue * lastValue;
// console.log(total);
// console.log(firstValue);
// console.log(lastValue);

// const fruits = ['apple', 'grape', 'peach', 'banana', 'lemon'];
// for (let i = 0, num = 1; i < fruits.length; i += 1, num += 1){
//     // console.log(`Порядковий номер ${i + 1}`, fruits[i]);
//     console.log(`Порядковий номер ${num}`, fruits[i]);
// }

// const names = 'Jacob,William,Solomon,Kate';
// const phones = '89001234567,89001112233,890055566377,89009992233';
// const arrNames = names.split(',');
// const arrPhones = phones.split(',');
// // console.log(arrNames);
// // console.log(arrPhones);
// for(let i = 0; i < arrNames.length, i < arrPhones.length; i += 1){
//     console.log(`Ім'я: ${arrNames[i]} номер телефону: ${arrPhones[i]}`);
// }

// const string = 'Welcome to the future';
// const words = string.split(' ');
// words.shift();
// console.log(words);
// words.pop();
// console.log(words);
// const str = words.join(' ');
// console.log(str);

// const string = 'Welcome to the future';
// const words = string.split(' ');
// console.log(words);
// console.log(words.slice(1,3).join(' '));

// const string = 'Welcome to the future';
// const words = string.split(' ');
// console.log(words);
// words.splice(0,1);
// words.splice(words.length -1,1);
// // words.splice(-1,1);
// console.log(words);
// const str = words.join(' ');
// console.log(str);

// const string = 'Welcome to the future';
// // const words = string.split('');
// // console.log(words);
// // const rev = words.reverse();
// // console.log(rev);
// // const str = rev.join('');
// // console.log(str);

// const result = string.split('').reverse().join('');
// console.log(result);

// const numbers = [101, 78, 12, 76, 5, 11, 9];
// let min = numbers[0];
// for(const number of numbers){
//     if(number < min){
//         min = number;
//     }
// }

// function count(countFrom = 0, countTo = 10, step = 1) {
//     console.log(`countFrom = ${countFrom}, countTo = ${countTo}, step = ${step}`);

//     for (let i = countFrom; i <= countTo; i += step) {
//       console.log(i);
//     }
//   }

//   count(1, 5); // countFrom = 1, countTo = 5, step = 1
//   count(2); // countFrom = 2, countTo = 10, step = 1
//   count(); // countFrom = 0, countTo = 10, step = 1

// function multiply() {
//     let total = 1;

//     for (const argument of arguments) {
//       total *= argument;
//     }

//     return total;
//   }

//   console.log(multiply(1, 2, 3)); //  6
//   console.log(multiply(1, 2, 3, 4)); //  24
//   console.log(multiply(1, 2, 3, 4, 5)); //  120

// function withdraw(amount, balance) {
//     if (amount === 0) {
//       console.log("Для проведення операції введіть суму більшу за нуль");
//     } else if (amount > balance) {
//       console.log("Недостатньо коштів на рахунку");
//     } else {
//       console.log("Операція зняття коштів проведена успішно");
//     }
//   }

// //   withdraw(0, 300); // "Для проведення операції введіть суму більшу за нуль"
// //   withdraw(500, 300); // "Недостатньо коштів на рахунку"
// //   withdraw(100, 300); // "Операція зняття коштів проведена успішно"

// function withdraw(amount, balance) {
//     // Якщо умова виконується, викликається console.log
//     // і вихід із функції. Код після тіла if не виконається.
//     if (amount === 0) {
//       console.log("Для проведення операції введіть суму більшу за нуль");
//       return;
//     }

//     // Якщо умова першого if не виконалась, його тіло пропускається
//     // та інтерпретатор доходе до другого if.
//     // Якщо умова виконується, викликається console.log і вихід із функції.
//     // Код, що знаходиться після тіла if, не виконається.
//     if (amount > balance) {
//       console.log("Недостатньо коштів на рахунку");
//       return;
//     }

//     // Якщо жоден із попередніх if не виконався,
//     // інтерпретатор доходить до цього коду і виконує його.
//     console.log("Операція зняття коштів проведена");
// }

//   withdraw(0, 300); // "Для проведення операції введіть суму більшу за нуль"
// //   withdraw(500, 300); // "Недостатньо коштів на рахунку"
// //   withdraw(100, 300); // "Операція зняття коштів проведена"

//     const globalValue = 10;

// console.log(globalValue); // 10

// function foo() {
// //   console.log(globalValue); // 10
// }

// for (let i = 0; i < 5; i++) {
// //   console.log(globalValue); // 10

//   if (i === 2) {
//     // console.log(globalValue); // 10
//   }
// }

// function bar() {
//     console.log("bar");
//   }

//   function baz() {
//     console.log("baz");
//   }

//   function foo() {
//     console.log("foo");
//     bar();
//     baz();
//   }

//   foo();

// const cart = [1, 4, 6, 99, 101, 3, 1, 56,];
// let total = 0;

// for (const value of cart){
//     total += value;
// }

// console.log('Total ', total);

// const calculateTotalPrice = function(items){
//      console.log(items);

//      let total = 0;

//      for(let item of items){
//         total += item;
//      }

//      return total;
// }

// const r1 = calculateTotalPrice([1,2,3]);
// console.log(`Общая сумма покупок: ${r1}`);

// console.log(calculateTotalPrice([5,10,15,20]));
// console.log(calculateTotalPrice([100,200,300]));

// const logItems = function (items){
//      for(let item of items){
//         console.log(item);
//      }
// }

// logItems(['Mango','Kiwi','Poly','Ajax']);
// logItems([1,2,3,4,5]);
// logItems(['клавиатура','наушники','часы']);

// const logins = ['kdghdghkdgh3','kjdshkjdl6','dgdfgdgdfgd9','dfgdfgdf0'];
// const loginToFind = 'dgdfgdgdfgd9';

// const message =logins.includes(loginToFind)
// ? `Пользователь ${loginToFind} найден`
// : `Пользователь ${loginToFind} не найден`;

// console.log(message);

// const findLogin = function(allLogins, loginToFind){

//     // console.log(allLogins);
//     // console.log(loginToFind);

//     // // let  message = `Пользователь ${loginToFind} не найден`;

//     for(let login of allLogins){
//         if(login === loginToFind){
//             return `Пользователь ${loginToFind} найден`;
//         }
//     }
//         return `Пользователь ${loginToFind} не найден`;
//     return message;

//     // const message =allLogins.includes(loginToFind)
//     // return allLogins.includes(loginToFind)
//     // ? `Пользователь ${loginToFind} найден`
//     // : `Пользователь ${loginToFind} не найден`;
//     // return message;
// }

// console.log(findLogin(logins, 'kdghdghkdgh3'));
// console.log(findLogin(logins, 'kjdshkj4dl6'));
// console.log(findLogin(logins, 'dgdfgdgdfgd9'));
// console.log(findLogin(logins, 'dfgd4fgdf0'));

// const numbers = [5,99,67,3,9,2,15,90];
// let smallestNumber = numbers[0];

// for(let number of numbers){
//     if(number < smallestNumber){
//         smallestNumber = number;
//     }
// }
// console.log('SmallestNumber: ', smallestNumber);

// const findSmallestNumber = function(numbers){
//     let smallestNumber = numbers[0];

//     for(let number of numbers){
//         if(number < smallestNumber){
//             smallestNumber = number;
//         }
//     }
//     return smallestNumber;
// }

// console.log(findSmallestNumber([2,8,12,-2,15]));
// console.log(findSmallestNumber([100,54,8,12,47]));
// console.log(findSmallestNumber([7,21,84,15,4]));

// const string = 'bcEcvBcGFn9H';
// const letters = string.split('');
// let invertedString = '';

// for (let letter of letters){
//     const isEqual = letter === letter.toLowerCase();
//     invertedString += isEqual
//     ? letter.toUpperCase()
//     : letter.toLowerCase();
// }
// console.log('InvertedString: ', invertedString);

// const changeCase = function(string){
//     const letters = string.split('');
//     let invertedString = '';

//     for (let letter of letters){
//     const isInLoweCace = letter === letter.toLowerCase();

//     invertedString += isInLoweCace
//     ? letter.toUpperCase()
//     : letter.toLowerCase();
// }

//     return invertedString;
// }

// console.log(changeCase('GaJlW9'));
// console.log(changeCase('ghLKHnm5'));
// console.log(changeCase('SkRMdP4'));

// const title = 'Top 10 benefits of React fremework';

// const normalizedTitle = title.toLowerCase();
// const words = normalizedTitle.split(' ');
// const slug = words.join('-');

// const slug1 = title.toLowerCase().split(' ').join('-');

// console.log(slug1);

// const slugify = function(string){

//     // const normalizedTitle = string.toLowerCase();
//     // const words = normalizedTitle.split(' ');
//     // const slug = words.join('-');

//     return string.toLowerCase().split(' ').join('-');

//     // return slug;
// }

// console.log(slugify('Top 10 benefits of React fremework'));
// console.log(slugify('Azure Static Web Apps are Awesome'));
// console.log(slugify('Technical writing tips for non-native English speakers'));

// const fn = function () {
//     console.log(arguments);

//     const args = Array.from(arguments);

//     console.log(args);
// };

// fn(1,2,3,4,5,6,7);

// const fn = function (...args) {
//     console.log(args);
// }
// fn(1,2,3,4,5,6,7);

// const fn = function (a,b,c,...args) {
//     console.log(`${a} ${b} ${c}`);
//     console.log(args);
// }
// fn('Hello: ', 1,2,3,4,5,6,7);

// const add = function (...args) {
//     console.log(args);

//     let total = 0;

//     for(let arg of args){
//         total += arg;
//     }

//     return total;
// }

// console.log(add(1,2,3));
// console.log(add(1,2,3,4,5,6));

// const filterNumbers = function (array, ...args) {
//     console.log('array: ', array);
//     console.log('args: ', args);
//     const uniqueElements = [];

//     for(let element of array){
//         // console.log(element);

//         if(args.includes(element)){
//             uniqueElements.push(element);
//             console.log(`${element} есть везде !!!`);
//         }
//     }
//     return uniqueElements;

// }

// console.log(filterNumbers([1,2,3,4,5,],10,15,2,3,8));
// console.log(filterNumbers([10,15,25,30,],23,30,18,15));
// console.log(filterNumbers([100,200,300,400,500,],7,12,200,64));

// let a = 18;

// if(true){
//     let a = 5;

//     console.log('in local', a);
// }
// console.log('in global', a);

// const a = 18;

// if(true){
//     let a = 10;

//     a = 7;
//     console.log(a);
// }
// console.log(a);

// let a = 10;

// if (true){
//     // let a = 100;
//     a = 1;
//     if (true) {
//         a = 15;
//         // let a = 25;
//         console.log('local 2:', a);
//     }
//     console.log('local 1:', a);
// }
// console.log('global:', a);

// function getSum () {
//     // console.log(arguments);

//     // for (let argument of arguments){
//     //     console.log(argument);
//     // }
//     const arr = Array.from(arguments);
//     console.log('arr 1:', arr);

//     const arr2 = [...arguments];
//     console.log('arr 2:', arr2);

//     let total = 0;

//     for (let i = 0; i < arguments.length; i+=1){
//         // console.log(arguments[i]);

//         total+=arguments[i];
//     }
//     return total;
// }

// console.log(getSum(1,2,3,4,5,6,7,8));
// console.log(getSum(33,45,7,90,3));

// function foo () {
//     console.log('start foo');
// }

// // foo()

// function boo () {
//     console.log('start boo');

//     foo()
//     console.log('end boo')
// }

// boo()

// const courses = ['HTML','CSS','JavaScript','React','Node'];

// function addCourse (name) {
//     if(!courses.includes(name)){
//         courses.push(name);
//         return;
//     }
//         return 'Ви вже маєте даний курс';

//     // console.log('Ви вже маєте даний курс');

// //     else{
// //         console.log('Ви вже маєте даний курс');
// //     };
// }
// // return

// addCourse('Exspres');
// console.log(courses);

// const result = addCourse('CSS');
// console.log('result:', result);

// const courses = ['HTML','CSS','JavaScript','React','Node'];

// function removeCourse (name){
//     if(courses.includes(name)){
//       console.log(name)
//         const indx = courses.indexOf(name);
//         courses.splice(indx,1);
//         // console.log(indx);
//         return`Курс ${name} успішно видалено`;
//     }
//     return 'Курс з такою назвою не знайден';
// }

// console.log(removeCourse('React'));
// console.log(courses);
// console.log(removeCourse('Vue'));

// const courses = ['HTML','CSS','JavaScript','React','Node','Express'];

// function updateCourses (oldName, newName){
//     if(courses.includes(oldName)){
//         const idx = courses.indexOf(oldName);
//         // console.log(idx);
//         // courses.splice(idx,1,newName);
//         courses[idx] = newName;

//         return `${oldName} змінили на ${newName}`;
//     }
//     return 'Курс з такою назвою не знайден';
// }

// console.log(updateCourses('Express','NestJS'));
// // console.log(courses);
// console.log(updateCourses('Angular','NestJS'));

// const book = {
//     title: "The Last Kingdom",
//     author: "Bernard Cornwell",
//     genres: ["historical prose", "adventure"],
//     isPublic: true,
//     rating: 8.38,
// };

// const bookAuthor = book.author;
// console.log(bookAuthor);

// const user = {
//     name: "Jacques Gluke",
//     tag: "jgluke",
//     location: {
//       country: "Jamaica",
//       city: "Ocho Rios",
//     },
//     stats: {
//       followers: 5603,
//       views: 4827,
//       likes: 1308,
//     },
//   };
// const userName = user.name;
// console.log(userName);

// const book = {
//   title: "The Last Kingdom",
//   author: "Bernard Cornwell",
//   genres: ["historical prose", "adventure"],
//   isPublic: true,
//   rating: 8.38,
// };

// const bookTitle = book.title;
// console.log(bookTitle); // 'The Last Kingdom'

// const bookGenres = book.genres;
// console.log(bookGenres); // ['historical prose', 'adventurs']

// const bookPrice = book.price;
// console.log(bookPrice); // undefined

// const user = {
//     name: "Jacques Gluke",
//     tag: "jgluke",
//     location: {
//       country: "Jamaica",
//       city: "Ocho Rios",
//     },
//     hobbies: ["swiming", "music", "sci-fi","music"],
//   };

// //   const location = user.location;
// //   console.log(location); // Об'єкт location

// //   const country = user.location.country;
// //   console.log(country); // 'Jamaica'

// //   const hobbies = user.hobbies;
// //   console.log(hobbies);

// // const firstHobby = user.hobbies[0];
// // console.log(firstHobby); // 'swiming'

// // const numberOfHobbies = user.hobbies.length;
// // console.log(numberOfHobbies);

// const book = {
//     title: "The Last Kingdom",
//     author: "Bernard Cornwell",
//     genres: ["historical prose", "adventure"],
//     isPublic: true,
//     rating: 8.38,
//   };

// //   const bookTitle = book["title"];
// //   console.log(bookTitle); // 'The Last Kingdom'

// //   const bookGenres = book["genres"];
// //   console.log(bookGenres); // ['historical prose', 'adventurs']

// //   const propKey = "author";
// //   const bookAuthor = book[propKey];
// //   console.log(bookAuthor); // 'Bernard Cornwell'

// const book = {
//     title: "The Last Kingdom",
//     author: "Bernard Cornwell",
//     genres: ["historical prose", "adventure"],
//     isPublic: true,
//     rating: 8.38,
//   };

//   book.rating = 9;
//   book.isPublic = false;
//   book.genres.push("драма");

//   console.log(book.rating); // 9
//   console.log(book.isPublic); // false
//   console.log(book.genres); // ['historical prose', 'adventures', 'драма']

// const book = {
//   title: "The Last Kingdom",
//   author: "Bernard Cornwell",
//   genres: ["historical prose", "adventure"],
//   isPublic: true,
//   rating: 8.38,
// };

// book.pageCount = 836;
// book.originalLanguage = "en";
// book.translations = ["ua", "ru"];

// console.log(book.pageCount); // 836
// console.log(book.originalLanguage); // 'en'
// console.log(book.translations); // ['ua', 'ru']

// const names = "Генрі Сибола";
// const age = 25;

// const user = {
//   name: names,
//   age: age,
// };

// console.log(user.name); // "Генрі Сибола"
// console.log(user.age); // 25

// const name = "Генрі Сибола";
// const age = 25;

// const user = {
//   name,
//   age,
// };

// console.log(user.name); // "Генрі Сибола"
// console.log(user.age); // 25

// const propName = "name";
// const user = {
//   age: 25,
// };

// user[propName] = "Генрі Сибола";
// console.log(user.name); // 'Генрі Сибола'

// const propName = "name";
// const user = {
//   age: 25,
//   // Ім'я цієї властивості буде взяте зі значення змінної propName
//   [propName]: "Генрі Сибола",
// };

// console.log(user.name); // 'Генрі Сибола'

// // ✅ Логічно і синтаксично згруповані сутності
// const bookShelf = {
//     books: ["The Last Kingdom", "Dream Guardian"],
//     // Це метод об'єкта
//     getBooks() {
//       console.log("Цей метод буде повертати всі книги - властивість books");
//     },
//     // Це метод об'єкта
//     addBook(bookName) {
//       console.log("Цей метод буде додавати нову книгу у властивість books");
//     },
//   };

//   // Виклики методів
//   bookShelf.getBooks();
//   bookShelf.addBook("Нова книга");

// const bookShelf = {
//     books: ["The Last Kingdom"],
//     getBooks() {
//       console.log(this);
//     },
//   };

//   // Перед крапкою знаходиться об'єкт bookShelf,
//   // тому, викликаючи метод, this буде зберігати посилання на нього.
//   bookShelf.getBooks(); // {books: ['The Last Kingdom'], getBooks: f}

// const bookShelf = {
//     books: ["The Last Kingdom"],
//     getBooks() {
//       return this.books;
//     },
//     addBook(bookName) {
//       this.books.push(bookName);
//     },
//     removeBook(bookName) {
//       const bookIndex = this.books.indexOf(bookName);
//       this.books.splice(bookIndex, 1);
//     },
//   };

//   console.log(bookShelf.getBooks()); // ["The Last Kingdom"]
//   bookShelf.addBook("The Mist");
//   bookShelf.addBook("Dream Guardian");
//   console.log(bookShelf.getBooks()); // ['The Last Kingdom', 'The Mist', 'Dream Guardian']
//   bookShelf.removeBook("The Mist");
//   console.log(bookShelf.getBooks()); // ['The Last Kingdom', 'Dream Guardian']

// const book = {
//     title: "The Last Kingdom",
//     author: "Bernard Cornwell",
//     genres: ["historical prose", "adventure"],
//     rating: 8.38,
//   };

//   for (const key in book) {
//     // Ключ
//     // console.log(key);
//     // Значення властивості з таким ключем
//     // console.log(book[key]);
//   }

// const animal = {
//     legs: 4,
//   };
//   const dog = Object.create(animal);
//   dog.name = "Манго";

// //   console.log(dog); // {name: 'Манго'}
// //   console.log(dog.name); // 'Манго'
// //   console.log(dog.legs); // 4

// console.log(dog.hasOwnProperty("name")); // true
// console.log(dog.hasOwnProperty("legs")); // false

// const book = {
//     title: "The Last Kingdom",
//     author: "Bernard Cornwell",
//     genres: ["historical prose", "adventure"],
//     rating: 8.38,
//   };

//   for (const key in book) {
//     // Якщо це власна властивість - виконуємо тіло if
//     if (book.hasOwnProperty(key)) {
//       console.log(key);
//       console.log(book[key]);
//     }

//     // Якщо це невласна властивість - нічого не робимо
//   }

// const book = {
//     title: "The Last Kingdom",
//     author: "Bernard Cornwell",
//     genres: ["historical prose", "adventure"],
//     rating: 8.38,
//   };
//   const keys = Object.keys(book);
//   console.log(keys); // ['title', 'author', 'genres', 'rating']

// const book = {
//     title: "The Last Kingdom",
//     author: "Bernard Cornwell",
//     genres: ["historical prose", "adventure"],
//     rating: 8.38,
//   };
//   const keys = Object.keys(book);

//   for (const key of keys) {
//     // Ключ
//     console.log(key);
//     // Значення властивості
//     console.log(book[key]);
//   }

// const book = {
//     title: "The Last Kingdom",
//     author: "Bernard Cornwell",
//     rating: 8.38,
//   };
//   const keys = Object.keys(book);
//   console.log(keys); // ['title', 'author', 'rating']

//   const values = Object.values(book);
//   console.log(values); // ['The Last Kingdom', 'Bernard Cornwell', 8.38]

// const goods = {
//     apples: 6,
//     grapes: 3,
//     bread: 4,
//     cheese: 7,
//   };

//   const values = Object.values(goods); // [6, 3, 4, 7]

//   let total = 0;

//   for (const value of values) {
//     total += value;
//   }

//   console.log(total); // 20

// const book = {
//     title: "The Last Kingdom",
//     author: "Bernard Cornwell",
//     rating: 8.38,
//   };
//   const keys = Object.keys(book);
//   console.log(keys); // ['title', 'author', 'rating']

//   const values = Object.values(book);
//   console.log(values); // ['The Last Kingdom', 'Bernard Cornwell', 8.38]

//   const entries = Object.entries(book);
//   console.log(entries);
//   // [["title", "The Last Kingdom"], ["author", "Bernard Cornwell"], ["rating", 8.38]]

// const books = [
//     {
//       title: "The Last Kingdom",
//       author: "Bernard Cornwell",
//       rating: 8.38,
//     },
//     {
//       title: "На березі спокійних вод",
//       author: "Роберт Шеклі",
//       rating: 8.51,
//     },
//     {
//       title: "Сон смішної людини",
//       author: "Федір Достоєвський",
//       rating: 7.75,
//     },

//   ];

//   let totalRating = 0;

// for (const book of books) {
//   totalRating += book.rating;
// }

// const averageRating = (totalRating / books.length).toFixed(1);
// console.log(averageRating); // 8.2

// //   for (const book of books) {
// //     // Об'єкт книги
// //     console.log(book);
// //     // Назва
// //     console.log(book.title);
// //     // Автор
// //     console.log(book.author);
// //     // Рейтинг
// //     console.log(book.rating);
// //   }

// const bookNames = [];

// for (const book of books) {
//   bookNames.push(book.title);
// }

// console.log(bookNames); // ["The Last Kingdom", "На березі спокійних вод", "Сон смішної людини"]

// function calculateTotal () {
//     // console.log(arguments);
//     // Change code below this line

//     const arr2 = [...arguments];
//     console.log('arr 2:', arr2);

//     let total = 0;

//     for (let i = 1; i < arguments.length; i+=1){
//         // console.log(arguments[i]);
//         total+=arguments[i];
//     }
//     return total;
// }
//     console.log(calculateTotal(1,2,3,4,5,6,7,8));

//    function getSum () {
//     // console.log(arguments);

//     // for (let argument of arguments){
//     //     console.log(argument);
//     // }
//     const arr = Array.from(arguments);
//     console.log('arr 1:', arr);

//     const arr2 = [...arguments];
//     console.log('arr 2:', arr2);

//     let total = 0;

//     for (let i = 0; i < arguments.length; i+=1){
//         // console.log(arguments[i]);

//         total+=arguments[i];ƒ
//     }
//     return total;
// }

// console.log(getSum(1,2,3,4,5,6,7,8));
// console.log(getSum(33,45,7,90,3));

// const filterNumbers = function (array, ...args) {
//     console.log('array: ', array);
//     console.log('args: ', args);
//     const uniqueElements = [];

//     for(let element of array){
//         // console.log(element);

//         if(args.includes(element)){
//             uniqueElements.push(element);
//             console.log(`${element} есть везде !!!`);
//         }
//     }
//     return uniqueElements;

// }

// console.log(filterNumbers([1,2,3,4,5,],10,15,2,3,8));
// console.log(filterNumbers([10,15,25,30,],23,30,18,15));
// console.log(filterNumbers([100,200,300,400,500,],7,12,200,64));

// function includes(array, value) {
//     // Change code below this line
//       for (let element of array){
//         console.log(element)
//         if (element === value){
//         //   return value;

//       }
//         }
//         //   return value;
//   }

// console.log(includes([1, 2, 3, 4, 5], 3, 5));
// // console.log(filterNumbers([1, 2, 3, 4, 5], 17));
// // console.log(filterNumbers([100,200,300,400,500,],7,12,200,64));

// const logins = ['kdghdghkdgh3','kjdshkjdl6','dgdfgdgdfgd9','dfgdfgdf0'];
// const loginToFind = 'dgdfgdgdfgd9';

// const message =logins.includes(loginToFind)
// ? `Пользователь ${loginToFind} найден`
// : `Пользователь ${loginToFind} не найден`;

// console.log(message);

// const findLogin = function(allLogins, loginToFind){

//     // console.log(allLogins);
//     // console.log(loginToFind);

//     // // let  message = `Пользователь ${loginToFind} не найден`;

//     for(let login of allLogins){
//         if(login === loginToFind){
//             return `Пользователь ${loginToFind} найден`;
//         }
//     }
//         return `Пользователь ${loginToFind} не найден`;
//     return message;

//     // const message =allLogins.includes(loginToFind)
//     // return allLogins.includes(loginToFind)
//     // ? `Пользователь ${loginToFind} найден`
//     // : `Пользователь ${loginToFind} не найден`;
//     // return message;
// }

// console.log(findLogin(logins, 'kdghdghkdgh3'));
// console.log(findLogin(logins, 'kjdshkj4dl6'));
// console.log(findLogin(logins, 'dgdfgdgdfgd9'));
// console.log(findLogin(logins, 'dfgd4fgdf0'));

// const filterNumbers = function (array, ...args) {
//     // console.log('array: ', array);
//     // console.log('args: ', args);
//     // const uniqueElements = [];

//     for(let element of array){
//         console.log(element);

//         if(args.indexOf(element)){
//             // uniqueElements.push(element);
//             console.log(`${element} есть везде !!!`);
//         }
//     }
//     return uniqueElements;

// }

// console.log(filterNumbers([1,2,3,4,5,],10,15,2,3,8));
// // console.log(filterNumbers([10,15,25,30,],23,30,18,15));
// // console.log(filterNumbers([100,200,300,400,500,],7,12,200,64));

// function includes(array, value) {

//     // console.log(array);
//     // console.log(value);

//     const valuesToFind = value;
//     for (let element of array){
//     console.log('Цикл:', element);

//             // if(element === valuesToFind){
//             // uniqueElements.push(element);
//             // console.log(`${includ} есть везде !!!`);
//         }

//   }
//     // Change code above this line
//   }
//   console.log(includes([1, 2, 3, 4, 5], 3));

// const playlist = {
//     name: 'My favorit list',
//     reting: 5,
//     tracks: ['tracks-1', 'tracks-2','tracks-3'],
//     trackCount: 3,

//     getName: function (){
//     console.log('Привет кабан :)');
//     },
//     getName () {
//     console.log('Привет кабан :)');
//     },

//     changeName (newName) {
//         console.log('this внутри getName', this);

//         this.name = newName;
//     },

//     addTrack (track) {
//         console.log('this внутри getName', this);
//         this.tracks.push(track);
//         // this.trackCount = this.tracks.length;
//     },

//     updateReting (value) {
//         this.reting = value;
//     },

//     getTrackCount () {
//         return this.tracks.length;
//     },

// };
// // console.log(playlist.getTrackCount());

// playlist.updateReting(3);
// // console.log(playlist);

// playlist.addTrack ('track-new');
// // console.log(playlist);
// console.log(playlist.getTrackCount());

// playlist.changeName('Новое имя');
// // console.log(playlist);

// const feedback = {
//     good: 5,
//     neutral: 10,
//     bad: 3,
// };

// let totalFeedback = 0;

// const keys = Object.keys(feedback);

// console.log(keys);

// for(let key of keys){
//     console.log(key);
//     console.log(feedback[key]);

//     totalFeedback += feedback[key];
// }

// console.log('totalFeedbac:', totalFeedback);

// const values = Object.values(feedback);
// console.log(values);

// for( let value of values){
//     console.log(value);

//     totalFeedback += value;
// }
// console.log('totalFeedbac:', totalFeedback);

// const friends = [
//     {name: 'Mango', online: false},
//     {name: 'Kiwi', online: true},
//     {name: 'Poly', online: true},
//     {name: 'Ajax', online: false},
// ];

// console.table(friends);

// for (let friend of friends){
//     console.log(friend.online);

//     friend.newprop = 555;
// }
// console.table(friends);

// const findFriendByName = function (allFriends, friendName){

//     for (let friend of allFriends){

//         console.log(friend);
//         console.log(friend.name);

//         if(friend.name === friendName){
//             return 'Ура!!! НАШЛИ!!!';
//         }
//     }
//     return 'Такого имени нет!!!';
// }

// console.log(findFriendByName(friends, 'Poly'));
// console.log(findFriendByName(friends, 'Chelsy'));

// const getAllNames = function(allFriends){

//     const names = [];

//     for (let friend of allFriends){
//         console.log(friend.name);

//         names.push(friend.name);
//     }
//     return names;
// }

// console.log(getAllNames(friends));

// const getOnlineFriends = function (allFriends){
//     const onlineFriends = [];

//     for(let friend of allFriends){
//         console.log(friend);
//         console.log(friend.online);

//         if(friend.online){
//             onlineFriends.push(friend);
//         }
//     }
//     return onlineFriends;
// }

// console.log(getOnlineFriends(friends));

// const getOfflineFriends = function (allFriends){
//     const offlineFriends = [];

//     for (let friend of allFriends){
//         console.log(friend);
//         console.log(friend.online);

//         if(!friend.online){
//             offlineFriends.push(friend);
//         }
//     }
//     return offlineFriends;
// }

// console.log(getOfflineFriends(friends));

// const getFriendsByOnlainesStatus = function (allFriends){
//     const statusFriends = {
//         online: [],
//         offline: [],
//     };

//      for(let friend of allFriends){
//         console.log(friend);
//         console.log(friend.online);

//         if(friend.online){
//             statusFriends.online.push(friend);
//             continue;
//         }

//         statusFriends.offline.push(friend);
//     }
//     return statusFriends;
// };

// console.log(getFriendsByOnlainesStatus(friends));

// const user = {
//     name: 'Mango',
//     agg: 20,
//     hobby: 'HTML',
//     premium: true,
// };

// // user.mood = 'happy';
// // user['mood'] = 'happy';

// // user.hobby = 'CSS'

// // user['premium'] = false;

// const userInfo = Object.keys(user);

// for (const key of userInfo){
//     console.log(`${key} ${user[key]}`)
// }

// console.table(userInfo);

// const salaries = {
//     John: 100,
//     Ann: 160,
//     Pete: 130,
// };
// // console.log(salaries);

// const test = Object.create(salaries);

// test.Kate = 140;

// console.log();

// function getResult (obj){
//     const values = Object.values(obj);
//     console.log(values);

//     let sum = 0;

//     // for (let value of values){
//     //     sum += value;
//     // }

//     for (const key in obj){
//         // console.log('Всі властивості', key);
//         sum += obj[key];
//         if (obj.hasOwnProperty(key)){
//         console.log('Власні', key)
//         }
//         if (!obj.hasOwnProperty(key)){
//             console.log('NOT', key);
//             }
//     }
//     return sum;
// }

// console.log(getResult(test));

// getResult(salaries) //Виклик функції

// if (obj.hasOwnProperty(key)){
//     console.log('Власні', key)
//     console.log('Не власні', key);
// }

// const stones = [ {
//     name: 'Смарагд',
//     price: 1300,
//     quantity: 4
//     },

//     {
//     name: 'Діамант',
//     price: 2700,
//     quantity: 3
//     },

//     {
//     name: 'Сапфір',
//     price: 400,
//     quantity: 7
//     },

//     {
//     name: 'Аквамарин',
//     price: 200,
//     quantity: 2
//     },
// ];

// function calcTotalPrice (stones, stoneName) {
//     // console.log(stones, stoneName);

//     for (const stone of stones){
//         if(stone.name === stoneName){
//             // console.log(stone);
//             return stone.price * stone.quantity;
//         }
//         // console.log(stone);
//     }

// }

// console.log(calcTotalPrice(stones, 'Сапфір'));

// const Transaction = {
//     DEPOSIT: 'deposit',
//     WITHDRAW: 'withdraw',
// };

// const account = {
//     balance: 0,

//     transaction:[{
//         amount: 1000,
//         type: 'deposit',
//         id: 1663783742100
//     }],

//     createTransaction(amount, type) {
//         const transaction = {
//             amount,
//             type,
//             id : Date.now(),
//         }
//         return transaction;
//     },

//     deposit(amount) {
//         const transaction = this.createTransaction(amount, Transaction.DEPOSIT);
//         this.transactions.push(transaction);
//         this.balance += amount;
//         // console.log(this);
//     },

//     withdraw(amount) {
//         if(this.balance < amount){
//             console.log('Недостатньо коштів');
//             return;
//         }

//         const transaction = this.createTransaction(amount, Transaction.WITHDRAW);
//         this.transactions.push(transaction);
//         this.balance -= amount;
//     },

//     getBalance() {
//         alert(this.balance);
//     },

//     getTransactionDetails(id) {
//         for(const transaction of this.transactions){
//             console.log();
//             if (transaction.id === id){
//                 // console.log(transaction);
//             }
//         }
//     },

//     resultTotal(type) {
//         console.log(type);
//         let total = 0;

//         for(const transaction of this.transactions){
//             // console.log(transaction);
//             if (transaction.type === type){

//                 total += transaction.amount;

//             }
//         }
//         return total;
//     },
// };

// // account.createTransaction(1000, Transaction.DEPOSIT);

// account.deposit(1000);
// account.deposit(1000);
// account.deposit(1000);
// account.deposit(1000);
// account.deposit(1000);
// account.deposit(1000);
// account.withdraw(1000);
// account.withdraw(2000);
// account.withdraw(1000);

// setTimeout(() => {          // <========  // Затроимка між викликами об'єктів!!!

// }, 200);

// // account.getBalance();

// // account.withdraw(1000);

// // account.getTrancsationTotal(type);
// console.log(account);
// console.log(account.resultTotal(Transaction.DEPOSIT));

// const numbers = [1, 2, 3].concat([4, 5, 6], [7, 8, 9]);
// const numbers = [...[1, 2, 3], ...[7, 8, 9], ...[4, 5, 6]];
// const numbers = [4, 5, 6, ...[7, 8, 9], 1, 2, 3];
// const numbers = [1000, ...[1, 2, 3], 2000, ...[7, 8, 9], 3000, ...[4, 5, 6]];
// console.log(numbers);

// const temps = [24, 56, 67, 90, 12, 23, 78];

// // console.log(Math.min(24, 56, 67, 90, 12, 23, 78));
// console.log(Math.min(...temps));

// // console.log(Math.max(24, 56, 67, 90, 12, 23, 78));
// console.log(Math.max(...temps));

// const lstWeekTemps = [1, 2, 3];
// const currentTemps = [4, 5, 6];
// const nextWeekTemps = [7,8, 9];

// const allTemps = [...lstWeekTemps,...currentTemps,...nextWeekTemps];

// console.log(allTemps);

// const a = { x: 1, y: 2 };
// const b = { x: 0, z: 3 };

// const c = {};

// Object.assign(c, a, b);

// const c = Object.assign({}, a, b);

// const c = {
//   ...a,
//   ...b,
// };

// // console.log(c);

// const defaultSettings = {
//   theme: 'light',
//   showNotifications: true,
//   hideSidebar: false,
// };

// const userSettings = {
//   showNotifications: false,
//   hideSidebar: true,
// };

// const finalSettings = {
//   ...defaultSettings,
//   ...userSettings,
// };

// console.log(finalSettings);

// const playlist = {
//   name: 'Мій супер плейлист',
//   rating: 5,
//   tracks: ['трек - 1', 'трек - 2', 'трек - 3'],
//   trackCount: 3,
// };

// const { rating, tracks, trackCount, name } = playlist;

//  console.log(name);
// console.log(rating);
// console.log(tracks);
// console.log(trackCount);

// const profile = {
//   names: 'Jacques Gluke',
//   tag: 'jgluke',
//   locations: 'Ocho Rios, Jamaica',
//   avatar: 'https//s3.amazonaws.com/uifaces/faces/twitter/r_oy/128.jpg',
//   stats: {
//     followers: 5603,
//     views: 4827,
//     likes: 1308,
//   },
// };

// const {
//   names,
//   tag,
//   locations,
//   avatar,
//   stats: { followers, views, likes },
// } = profile;

// // const { followers, views, likes } = stats;

// console.log(names, tag, locations, avatar, followers, views, likes);

// const rgb = [255, 100, 80];

// const [a, b, c] = rgb;

// console.log(a, b, c );

// const firstBook = {
//   title: "The Last Kingdom",
//   coverImage:
//     "https://images-na.ssl-images-amazon.com/images/I/51b5YG6Y1rL.jpg",
// };

// const {
//   title: firstTitle,
//   coverImage: firstCoverImage = "https://via.placeholder.com/640/480",
// } = firstBook;

// console.log(firstTitle); // The Last Kingdom
// console.log(firstCoverImage); // https://images-na.ssl-images-amazon.com/images/I/51b5YG6Y1rL.jpg

// const secondBook = {
//   title: "Сон смішної людини",
// };

// const {
//   title: secondTitle,
//   coverImage: secondCoverImage = "https://via.placeholder.com/640/480",
// } = secondBook;

// console.log(secondTitle); // Сон смішної людини
// console.log(secondCoverImage); // https://via.placeholder.com/640/480

// const books = [
//   {
//     title: "The Last Kingdom",
//     author: "Bernard Cornwell",
//     rating: 8.38,
//   },
//   {
//     title: "На березі спокійних вод",
//     author: "Роберт Шеклі",
//     rating: 8.51,
//   },
// ];

// // for (const book of books) {
// //   console.log(book.title);
// //   console.log(book.author);
// //   console.log(book.rating);
// // }

// for (const book of books) {
//   const { title, author, rating } = book;

//   console.log(title);
//   console.log(author);
//   console.log(rating);
// }

// const user = {
//   name: "Jacques Gluke",
//   tag: "jgluke",
//   stats: {
//     followers: 5603,
//     views: 4827,
//     likes: 1308,
//   },
// };

// const {
//   name,
//   tag,
//   stats: { followers, views: userViews, likes: userLikes = 0 },
// } = user;

// console.log(name); // Jacques Gluke
// console.log(tag); // jgluke
// console.log(followers); // 5603
// console.log(userViews); // 4827
// console.log(userLikes); // 1308

// const rgb = [200, 255, 100];
// const [red, green, blue] = rgb;

// console.log(`R:${red},G:${green},B:${blue}`); // "R:200,G:255,B:100"

// const rgb = [200, 255, 100];
// let red, green, blue;

// [red, green, blue] = rgb;

// console.log(`R:${red},G:${green},B:${blue}`); // "R:200,G:255,B:100"

// const rgb = [200, 100, 255];

// const [red, green, blue, alfa = 0.2] = rgb;

// console.log(`R:${red},G:${green},B:${blue},Alfa:${alfa}`); // "R:200,G:100,B:255,Alfa:0.3"

// const rgb = [200, 255, 100];

// const [red, ...colors] = rgb;

// console.log(red); // "200"
// console.log(colors); // [255, 100]

// const rgb = [200, 100, 255];

// const [,green , blue] = rgb;

// console.log(`Blue: ${green}, ${blue}`); // "Blue: 255"

// const authors = {
//   kiwi: 4,
//   poly: 7,
//   ajax: 9,
//   mango: 6,
// };

// // const keys = Object.keys(authors);

// // for (key of keys) {
// //   console.log(key);
// //   console.log(authors[key]);
// // }

// const entries = Object.entries(authors);

// console.log(authors);

// for (const [name, rating] of entries) {

//   // const [name, rating] = entry;

//   // const name = entry[0];
//   // const rating = entry[1];

//   console.log(name, rating);
// }

// const profile = {
//   names: 'Jacques Gluke',
//   tag: 'jgluke',
//   locations: 'Ocho Rios, Jamaica',
//   avatar: 'https//s3.amazonaws.com/uifaces/faces/twitter/r_oy/128.jpg',
//   stats: {
//     followers: 5603,
//     views: 4827,
//     likes: 1308,
//   },
// };

// const { names, tag, locations, avatar, ...restProps } = profile;

// console.log(names, tag, locations, avatar);
// console.log(restProps);

// const showProfileInfo = function (userProfile) {
//   const {
//     names,
//     tag,
//     locations,
//     avatar,
//     stats: { followers, views, likes },
//   } = userProfile;

//   console.log(names, tag, locations, avatar, followers, views, likes);
// };

// const showProfileInfo = function ({
//   names,
//   tag,
//   locations,
//   avatar,
//   stats: { followers, views, likes },
// }) {
//   console.log(names, tag, locations, avatar, followers, views, likes);
// };

// const profile = {
//   names: 'Jacques Gluke',
//   tag: 'jgluke',
//   locations: 'Ocho Rios, Jamaica',
//   avatar: 'https//s3.amazonaws.com/uifaces/faces/twitter/r_oy/128.jpg',
//   stats: {
//     followers: 5603,
//     views: 4827,
//     likes: 1308,
//   },
// };

// showProfileInfo(profile);

// const fn = function (params) {};

// fn({
//   age: 10,
//   friends: 5,
//   isOnline: true,
//   hobbies: [],
//   games: {},
//   rating: 6,
// });

// const cart = {
//   items: [],
//   getItems() {
//     return this.items;
//   },
//   add(product) {
//     for (const item of this.items) {
//       // console.log(item);

//       if(item.name === product.name){
//         // console.log('Такой продукт уже есть:', product.name);
//         item.quantity += 1;
//         return;
//       }
//     }

//     const newProduct = {
//       ...product,
//       quantity: 1,
//     };

//     this.items.push(newProduct);
//   },
//   remove(productName) {
//     const { items } = this;

//     // for (let i = 0; i < this.items.length; i += 1)
//     for (let i = 0; i < items.length; i += 1) {
//       // const item = this.items[i];

//       // const { name } = this.items[i];

//       const { name } = items[i];
//       // console.log(name);

//       // if (productName === item.name)
//       if (productName === name) {
//         console.log(`Нашли такой продукт:`, productName);
//         console.log('индекс:', i);

//         items.splice(i, 1);
//       }
//     }
//   },
//   clear() {
//     this.items = [];
//   },
//   countTotalPrice() {
//     // console.log(this.items);
//     const { items } = this;

//     let total = 0;

//     // for (const item of this.items)
//     for (const { price, quantity } of items) {
//       // total += item.price;

//       total += price * quantity;
//     }
//     return total;
//   },
//   increaseQuantity(productName) {},
//   decreaseQuantity(productName) {},
// };

// console.log(cart.getItems());

// cart.add({ name: 'apple', price: 50 });
// cart.add({ name: 'grape', price: 80 });
// cart.add({ name: 'grape', price: 80 });
// cart.add({ name: 'lemon', price: 60 });
// cart.add({ name: 'lemon', price: 60 });
// cart.add({ name: 'lemon', price: 60 });
// cart.add({ name: 'strawberry', price: 110 });
// cart.add({ name: 'strawberry', price: 110 });
// cart.add({ name: 'strawberry', price: 110 });
// cart.add({ name: 'strawberry', price: 110 });

// console.table(cart.getItems());

// console.log('Total: ', cart.countTotalPrice());

// cart.remove('apple');
// console.table(cart.getItems());

// cart.clear();
// console.log(cart.getItems());

// function calcBMI({ weight, height }) {
//   const numericWeight = Number(weight.replace(',', '.'));
//   const numericHeight = Number(height.replace(',', '.'));

//   return Number((numericWeight / numericHeight ** 2).toFixed(1)); //Math.pow(numericHeight, 2);
// }

// console.log(calcBMI({ weight: '88,3', height: '1.75' })); // Об'єкт параметрів (патерн)
// console.log(calcBMI({ weight: '68,3', height: '1.65' }));
// console.log(calcBMI({ weight: '118,3', height: '1.95' }));

// function printContactsInfo({ names, phones }) {
//   const nameList = names.split(',');
//   const phoneList = phones.split(',');
//   for (let i = 0; i < nameList.length; i += 1) {
//     console.log(`${nameList[i]}: ${phoneList[i]}`);
//   }
// }

// printContactsInfo({
//   names: 'Jacob,William,Solomon,Artemis',
//   phones: '89001234567,89001112233,890055566377,890055566300'
// });

// const smiles = ['grape', 'lemon', 'apple'];
// // console.log(smiles);
// for (let i = 0, num = 1; i < smiles.length; i += 1, num += 1) {
//   console.log(`Ordinal numbers: ${num} - ${smiles}`);
// }

// /**
//  *
//  * @param {*} param0          // /** */
//  * @returns
//  */

// function getBotReport({ companyName, bots: { repairBots, defenceBots  } }) {
//   console.log(companyName);
//   console.log('repairBots:', repairBots)
//   console.log('defenceBots:', defenceBots)
//   return `${companyName} has ${repairBots + defenceBots} bots in stock`;
// }
// console.log(
//   getBotReport({
//     companyName: 'Cyberdyne Systems',
//     bots: {
//       repairBots: 150,
//       defenceBots: 50,
//     },
//   })
// );

// /**
//  * Get object with value and return info about stock
//  * @param {Object} object
//  * @returns {String} Info about stock in company
//  */
// function getStockReport({ companyName, stock }) {
//   const values = Object.values(stock);
//   let total = 0;
//   for (let value of values) {
//     total += value;
//   }
//   return `${companyName} has ${total} items in stock`;
// }

// console.log(
//   getStockReport({
//     companyName: 'Cyberdyne Systems',
//     stock: {
//       repairBots: 150,
//       defenceBots: 50,
//     },
//   })
// );

// console.log(
//   getStockReport({
//     companyName: 'Belacci',
//     stock: {
//       shoes: 20,
//       skirts: 10,
//       hats: 5,
//     },
//   })
// );

// function createContact(partialContact) {
//   return {
//     id: generateId(),
//     list: 'default',
//     ...partialContact
//   };
// }

// console.log(
//   createContact({
//     name: 'Mango',
//     email: 'mango@mail.com',
//     list: 'friends',
//   })
// );

// console.log(
//   createContact({
//     name: 'Poly',
//     email: 'poly@hotmail.com',
//   })
// );

// function generateId() {
//   return '_' + Math.random().toString(36).substr(2, 9);
// }

// function transformUserName({ firstName, lastName, ...info }) {
//   // console.log(firstName);
//   // console.log(lastName);
//   // console.log(info);

//   return {
//     // fullName: firstName + ' ' + lastName,
//     fullName: `${firstName} ${lastName}`,
//     ...info,
//   };
// }

// console.log(
//   transformUserName({
//     id: 1,
//     firstName: 'Jacob',
//     lastName: 'Mercer',
//     email: 'j.marcer@mail.com',
//     friendCount: 40,
//   })
// );

// console.log(
//   transformUserName({
//     id: 2,
//     firstName: 'Adrian',
//     lastName: 'Cross',
//     email: 'a.cross@hotmail.com',
//     friendCount: 20,
//   })
// );

// const arr = [1, 2, 3, 4];
// // const min = Math.min(...arr);

// // const arr2 = [...arr];

// const [firsValue, secondValue, ...args] = arr;
// console.log('firsValue:', firsValue);
// console.log('secondValue:', secondValue);
// console.log('args:', args);

// function createContact(arr) {
//   // for (let i = 0; i < arr.length; i += 1) {
//   //   arr[i] = {
//   //     id: generateId(),
//   //     list: 'default',
//   //     ...arr[i],
//   //   };
//   // }

//   for (let obj of arr) {
//     obj.id = generateId();
//     // if ('list' in obj){
//     //   // obj.list = 'default'; ??????????
//     // }

//     if (!obj.hasOwnProperty('list')) {
//       obj.list = 'default';
//     }

//     // obj. ...obj
//   }
//   console.log(arr);
// }

// console.log(
//   createContact([
//     {
//       name: 'Mango',
//       email: 'mango@mail.com',
//       list: 'friends',
//     },
//     {
//       name: 'Poly',
//       email: 'poly@hotmail.com',
//     },
//   ])
// );

// function generateId() {
//   return '_' + Math.random().toString(36).substr(2, 9);
// }

// const books = [
//   {
//     title: "The Last Kingdom",
//     author: "Bernard Cornwell",
//     rating: 8.38,
//   },
//   {
//     title: "На березі спокійних вод",
//     author: "Роберт Шеклі",
//     rating: 8.51,
//   },
//   {
//     title: "Сон смішної людини",
//     author: "Федір Достоєвський",
//     rating: 7.75,
//   },
// ];

// let totalRating = 0;

// for (const book of books) {
//   totalRating += book.rating;
// }

// const averageRating = (totalRating / books.length).toFixed(1);
// console.log(averageRating); // 8.2

// const bookNames = [];

// for (const book of books) {
//   bookNames.push(book.title);
// }

// console.log(bookNames); // ["The Last Kingdom", "На березі спокійних вод", "Сон смішної людини"]

// for (const book of books) {
//   // Об'єкт книги
//   // console.log(book);
//   // Назва
//   console.log(book.title);
//   // Автор
//   console.log(book.author);
//   // Рейтинг
//   console.log(book.rating);
// }

// const lastWeekTemps = { propA: 14, propB: 25, propC: 11 };
// const currentWeekTemps = { propD: 23, propE: 17, propF: 18 };
// const allTemps = { ...lastWeekTemps, ...currentWeekTemps };
// console.log(allTemps);

// function multiply(firstNumber, secondNumber, ...otherArgs) {
//   // console.log(firstNumber); // Значення першого аргументу
//   // console.log(secondNumber); // Значення другого аргументу
//   console.log(otherArgs); // Масив інших аргументів
// }

// multiply(1, 2);
// multiply(1, 2, 3);
// multiply(1, 2, 3, 4);

// const book = {
//   title: 'The Last Kingdom',
//   author: 'Bernard Cornwell',
//   genres: ['historical prose', 'adventure'],
//   isPublic: true,
//   rating: 8.38,
// };

// const {
//   title: firstTitle,
//   author,
//   isPublic,
//   rating,
//   coverImage: firstCoverImage = 'https://via.placeholder.com/640/480',
// } = book;

// console.log(firstTitle);
// console.log(firstCoverImage);

// const secondBook = {
//   title: "Сон смішної людини",
// };

// const {
//   title: secondTitle,
//   coverImage: secondCoverImage = "https://via.placeholder.com/640/480",
// } = secondBook;

// console.log(secondTitle); // Сон смішної людини
// console.log(secondCoverImage);

// const accessType = isPublic ? 'публічному' : 'закритому';
// const message = `Книга ${title} автора ${author} з рейтингом ${rating} знаходиться в ${accessType} доступі.`;

// const accessType = book.isPublic ? "публічному" : "закритому";
// const message = `Книга ${book.title} автора ${book.author} з рейтингом ${book.rating} знаходиться в ${accessType} доступі.`;

// console.log(message);
// const books = [
//   {
//     title: "The Last Kingdom",
//     author: "Bernard Cornwell",
//     rating: 8.38,
//   },
//   {
//     title: "На березі спокійних вод",
//     author: "Роберт Шеклі",
//     rating: 8.51,
//   },
// ];

// for (const { title, author, rating } of books) {

//   console.log(title);
//   console.log(author);
//   console.log(rating);
// }

// const user = {
//   name: 'Jacques Gluke',
//   tag: 'jgluke',
//   stats: {
//     followers: 5603,
//     views: 4827,
//     likes: 1308,
//   },
// };

// const {
//   name,
//   tag,
//   stats: { followers, views: userViews, likes: userLikes = 0 },
// } = user;

// console.log(name); // Jacques Gluke
// console.log(tag); // jgluke
// console.log(followers); // 5603
// console.log(userViews); // 4827
// console.log(userLikes); // 1308
// function doStuffWithBook(title, numberOfPages, downloads, rating, public) {
//   // Робимо щось з параметрами
//   console.log(title);
//   console.log(numberOfPages);
//   // І так далі

// // ❌ Що таке 736? Що таке 10283? Що таке true?
// doStuffWithBook("The Last Kingdom", 736, 10283, 8.38, true);

// function doStuffWithBook({ title, numberOfPages, downloads, rating, isPublic }) {
//   // const { title, numberOfPages, downloads, rating, isPublic } = book;
//   // Робимо щось з властивостями об'єкта

//   console.log(title);
//   console.log(numberOfPages);
//   // І так далі
// }
// doStuffWithBook({
//   title: 'The Last Kingdom',
//   numberOfPages: 736,
//   downloads: 10283,
//   rating: 8.38,
//   isPublic: true,
// });

// const apartment = {
//   imgUrl: "https://via.placeholder.com/640x480",
//   descr: "Spacious apartment in the city center",
//   rating: 4,
//   price: 2153,
//   tags: ["premium", "promoted", "top"],
//   owner: {
//     name: "Henry",
//     phone: "982-126-1588",
//     email: "henry.carter@aptmail.com",
//   },
// };
// apartment.price = 5000;
// apartment.rating = 4.7;
// apartment.tags.push("trusted");
// const ownerName = apartment.owner.name = "Henry Sibola";

// console.log(apartment.price);
// console.log(apartment.rating);
// console.log(apartment.tags);
// console.log(ownerName);

// const apartment = {
//   imgUrl: "https://via.placeholder.com/640x480",
//   descr: "Spacious apartment in the city center",
//   rating: 4.7,
//   price: 5000,
//   tags: ["premium", "promoted", "top", "trusted"],
//   owner: {
//     name: "Henry Sibola",
//     phone: "982-126-1588",
//     email: "henry.carter@aptmail.com",
//   },
// };
// apartment.area = 60;
// apartment.rooms = 3;
// // apartment.location.country = "Jamaica";
// // apartment.location.city = "Kingston";

// console.log(apartment.area);
// console.log(apartment.rooms);
// // console.log(apartment.tags);
// // console.log(ownerName);

// const emailInputName = "email";
// const passwordInputName = "password";

// const credentials = {
//   // Change code below this line
// [emailInputName]: "henry.carter@aptmail.com",

// [passwordInputName]: "jqueryismyjam"
//   // Change code above this line
// };

// console.log(credentials.email);
// console.log(credentials.password);

// function countProps(object) {
//   // console.log(object)
//   let propCount = 0;
//   // Change code below this line
//   for (let key in object) {
//     console.log(key);
//     if (object.hasOwnProperty(key)) {
//       console.log('Ok:', key);
//     }
//   }
//   return propCount;
// }

// // console.log(countProps({ name: "Mango", age: 2 }))
// console.log(countProps({ mail: 'poly@mail.com', isOnline: true, score: 500 }));

// function calculateTotal () {
//     // console.log(arguments);
//     // Change code below this line

//     const arr2 = [...arguments];
//     console.log('arr 2:', arr2);

//     let total = 0;

//     for (let i = 1; i < arguments.length; i+=1){
//         // console.log(arguments[i]);
//         total+=arguments[i];
//     }
//     return total;
// }
//     console.log(calculateTotal(1,2,3,4,5,6,7,8));

// const add = function (...args) {
//     console.log(args);

//     let total = 0;

//     for(let arg of args){
//         total += arg;
//     }

//     return total;
// }

// console.log(add(1,2,3));
// console.log(add(1,2,3,4,5,6));

// const colors = [
//   { hex: "#f44336", rgb: "244,67,54" },
//   { hex: "#2196f3", rgb: "33,150,243" },
//   { hex: "#4caf50", rgb: "76,175,80" },
//   { hex: "#ffeb3b", rgb: "255,235,59" },
// ];

// const hexColors = [ ];
// const rgbColors = [ ];

// // Change code below this line
// for(const color of colors){
//   hexColors.push(color.hex)
//   rgbColors.push(color.rgb)
// }
// console.log(hexColors)

// const courses = ['HTML','CSS','JavaScript','React','Node'];

// function removeCourse (name){
//     if(courses.includes(name)){
//       console.log(name)
//         const indx = courses.indexOf(name);
//         courses.splice(indx,1);
//         // console.log(indx);
//         return`Курс ${name} успішно видалено`;
//     }
//     return 'Курс з такою назвою не знайден';
// }

// // console.log(removeCourse('React'));
// // console.log(courses);
// // console.log(removeCourse('Vue'));

// const products = [
//   { name: 'Radar', price: 1300, quantity: 4 },
//   { name: 'Scanner', price: 2700, quantity: 3 },
//   { name: 'Droid', price: 400, quantity: 7 },
//   { name: 'Grip', price: 1200, quantity: 9 },
// ];

// function getProductPrice(productName){
//   for(product of products){
//     product.name === productName;
//     return product.price
//   }
//   return null;
// }

// console.log(getProductPrice([{ name: 'Radar', price: 1300, quantity: 4 }]));
// // console.log(getProductPrice([{ name: 'Scanner', price: 2700, quantity: 3 }]));
// // console.log(getProductPrice([{ name: 'Grip', price: 1200, quantity: 9 }]));
// // console.log(getProductPrice([{ name: 'Droid', price: 400, quantity: 7 }]));
// console.log(getProductPrice([{ name: 'Engine', price: 666, quantity: 7 }]));

// const filterNumbers = function (array, ...args) {
//     console.log('array: ', array);
//     console.log('args: ', args);
//     const uniqueElements = [];

//     for(let element of array){
//         // console.log(element);

//         if(args.includes(element)){
//             uniqueElements.push(element);
//             console.log(`${element} есть везде !!!`);
//         }
//     }
//     return uniqueElements;

// }

// console.log(filterNumbers([1,2,3,4,5,],10,15,2,3,8));
// console.log(filterNumbers([10,15,25,30,],23,30,18,15));
// console.log(filterNumbers([100,200,300,400,500,],7,12,200,64));

// function countProps(object) {
//   // console.log(object)
//   let propCount = 0;
//   // Change code below this line
//   for (let key in object) {
//     console.log(key);
//     if (object.hasOwnProperty(key)) {
//         propCount += 1;
//       console.log('Ok:', key);
//     }
//   }
//   return propCount;
// }

// // console.log(countProps({ name: "Mango", age: 2 }))
// console.log(countProps({ mail: 'poly@mail.com', isOnline: true, score: 500 }));

// const findFriendByName = function (allFriends, friendName){

//     for (let friend of allFriends){

//         console.log(friend);
//         console.log(friend.name);

//         if(friend.name === friendName){
//             return 'Ура!!! НАШЛИ!!!';
//         }
//     }
//     return 'Такого имени нет!!!';
// }

// console.log(findFriendByName(friends, 'Poly'));
// console.log(findFriendByName(friends, 'Chelsy'));

// const doMath = function (a, b, callback) {
//   const result = callback(a, b);

//   console.log(result);
// };

// // const add = function (x, y) {
// //   return x + y;
// // };

// // const sub = function (x,y){
// //   return x - y;
// // }

// // const mult = function (x,y){
// //   return x * y
// // }

// // doMath(2, 3, add);
// // doMath(10, 2, sub);
// // doMath(7, 8, mult);

// doMath(2, 3, function (x, y) {
//   return x + y;
// });
// doMath(10, 2, function (x, y) {
//   return x - y;
// });
// doMath(7, 8, function (x, y) {
//   return x * y;
// });

// const buttonRef = document.querySelector('.js-button');

// // const handleBtnClick = function () {
// //   console.log('Click for the button', Date.now());
// // };

// // buttonRef.addEventListener('click', handleBtnClick);

// buttonRef.addEventListener('click', function () {
//   console.log('Click for the button', +Date.now());
// });

// const onGetPositionSuccess = function (position) {
//   console.log(position);
// };

// const onGetPositionError = function (error) {
//   console.log(error);
// };

// window.navigator.geolocation.getCurrentPosition(
//   onGetPositionSuccess,
//   onGetPositionError);

// const callback = function () {
//   console.log('Після 2 секунд всередині колбека в таймауті');
// };

// console.log('В коді перед таймаутом');

// setTimeout(callback, 2000);

// console.log('В коді після таймауту');

// const filter = function (array, test) {
//   const filtereArray = [];

//   for (const el of array) {
//     console.log(el);
//     const passed = test(el);

//     if (passed) {
//       filtereArray.push(el);
//     }
//   }

//   return filtereArray;
// };

// const callback1 = function (value) {
//   return value >= 3;
// };

// const r1 = filter([1, 2, 3, 5], callback1);
// console.log(r1);

// const r2 = filter([1, 2, 3, 4, 5, 6, 7, 8], function (value) {
//   return value <= 4;
// });
// console.log(r2);

// console.log(filter([1, 2, 3, 4, 5]));

// console.log(filter([1, 2, 3, 4, 5, 6, 7, 8]));

// const products = [
//   { name: "Radar", price: 1300, quantity: 4 },
//   { name: "Scanner", price: 2700, quantity: 3 },
//   { name: "Droid", price: 400, quantity: 7 },
//   { name: "Grip", price: 1200, quantity: 9 },
// ];

// function getAllPropValues(propName) {
//   // Change code below this line
//   const productArrey = [];

//   const keys = Object.keys(products)
// for(const key of keys){
//   if(key === propName){
//    return propName([key])
//   }
//   return productArrey
// }
//  // Change code above this line
// }

// const fnA = function (parameter) {
//   const innerVariable = `Значения внутренней переменной функции fnA`;

//   const innerFunction = function () {
//     console.log(parameter);
//     console.log(innerVariable);
//     console.log('Это вызов innerFunction');
//   }

//   return innerFunction
// };

// const fnB = fnA(555)

// fnB();

// console.log(fnB)

// const makeDish = function (shafName, dish) {
//   console.log(`${shafName} готовит ${dish}`);
// };

// makeDish('Mango', 'пирожок');
// makeDish('Mango', 'омлет');
// makeDish('Mango', 'чай');

// makeDish('Poly', 'котлеты');
// makeDish('Poly', 'супик');
// makeDish('Poly', 'кофе');

// const makeSheff = function (name) {
//   const makeDlish = function (dish) {
//     console.log(`${name} готовит ${dish}`);
//   };
//   return makeDlish;
// };

// const mango = makeSheff('Mango');

// mango('котлеты');
// mango('пирожок');

// const salaryManagerFactory = function (employeeName, baseSalary) {
//   let salary = baseSalary;

//   const changeBy = function (amount) {
//     salary += amount;
//   };

//   return {
//     raise(amount) {
//       changeBy(amount);
//     },
//     lower(amount) {
//       changeBay(amount);
//     },
//     current() {
//       return `Текущая зарплата ${employeeName} - ${salary}`;
//     },
//   };
// };

// const floatingPoint = 3.456789;
// const someInt = Math.round(floatingPoint);
// const withDecimals = Number(floatingPoint.toFixed(2));

// const rounder = function (number, places) {
//   return Number(number.toFixed(places));
// };

// console.log(rounder(3.4567, 2));
// console.log(rounder(3.8901, 3));
// console.log(rounder(3.1234, 4));
// console.log(rounder(3.09876, 5));

// const rounder = function (places) {
//   return function (number) {
//     return Number(number.toFixed(places));
//   };
// };

// const rounder2 = rounder(2);
// const rounder3 = rounder(3);

// console.log(rounder2(3.45674));
// console.log(rounder3(3.89413));
// console.log(rounder2(3.16342));
// console.log(rounder3(3.09876));

// const salaryManagerFactory = function (employeeName, baseSalary) {
//   let salary = baseSalary;

//   // const changeRy = function (amount) {
//   //   salary += amount;
//   // };

//   return {
//     raise(amount) {
//       salary += amount;
//       // changeBy(amount);
//     },
//     lower(amount) {
//       salary -= amount;
//       // changeBy(amount);
//     },
//     current() {
//       return `Текущая зарплата ${employeeName} - ${salary}`;
//     },
//   };
// };

// const salaryManager = salaryManagerFactory('Mango', 5000);

// console.log(salaryManager.current());

// console.dir(salaryManager.current);

// const add = function (a, b, c) {
//   // console.log(a, b, c);
//   return a + b + c;
// };

// // const addArrow = (a, b, c) => {
// //   // console.log(a, b, c);
// //   return a + b + c;
// // };

// // const addArrow = (a, b, c) => a + b + c;

// const addArrow = (...args) => {
//   console.log(args)
// }

// console.log(add(5, 10, 15));
// console.log(addArrow(5, 10, 15));

// const add = (a, b) => {
//   return a + b;
// };

// console.log(add(2, 3));

// const showThis = () => {
//   console.log('this in showThis: ', this);
// };

// showThis();

// const user = { name: 'Mango' };
// user.showContext = showThis;

// user.showContext();

// const user = {
//   fullName: 'Mango',
//   showName() {
//     console.log('this ', this);
//     console.log('this.fullName: ', this.fullName);

//     const inner = () => {
//       console.log('this in inner: ', this);
//     };
//     inner();
//   },
// };

// user.showName();

// const user = {
//   fullName: 'Mango',
//   showName() {
//     console.log('this: ', this);
//     console.log('this.fullName: ', this.fullName);
//   },
// };

// user.showName();

// const objA = {
//   x: 5,
//   showX() {
//     console.log('this в objA.showX: ', this);
//     console.log(this.x);

//     const objB = {
//       y: 10,
//       showThis() {
//         console.log('this в objB.showThis: ', this);
//       },
//     };

//     objB.showThis();
//   },
// };

// objA.showX();

// const numbers = [1, 5, 2, 4, 3];

// // // const greaterThenTwo = numbers.filter(function (num) {
// // //   return num > 2;
// // // });

// const greaterThenTwo = numbers.filter(num => num > 2);

// // console.log(greaterThenTwo);

// const multByTwo = greaterThenTwo.map(num => num * 3);

// // console.log(multByTwo);

// const multTwo = greaterThenTwo.map((a, b) => a - b);

// // console.log(multTwo);

// // const res = numbers
// //   .filter(function (num) {
// //     return num > 2;
// //   })
// //   .map(function (num) {
// //     return num * 3;
// //   })
// //   .sort(function (a, b) {
// //     return a - b;
// //   });

// const res = numbers
//   .filter(num => num > 2)
//   .map(num => num * 3)
//   .sort((a, b) => a - b);

// console.log(res);

// const players = [
//   { id: 'id-1', tag: 'Mango', isOnline: true, rank: 800 },
//   { id: 'id-2', tag: 'Poly', isOnline: false, rank: 600 },
//   { id: 'id-3', tag: 'Ajax', isOnline: true, rank: 100 },
//   { id: 'id-4', tag: 'Kiwi', isOnline: true, rank: 400 },
// ];

// const onlineAndSorted = players
//   .filter(player => player.isOnline)
//   .sort((prevPlayer, nextPlayer) => prevPlayer.rank - nextPlayer.rank);

// const onlineAndSorted = players
//   .filter(player => player.isOnline)
//   .sort((prevPlayer, nextPlayer) => prevPlayer.rank - nextPlayer.rank);

// console.table(onlineAndSorted);

// const players = [
//   { id: 'id-1', tag: 'Mango', timePlayed: 310, points: 54, online: false },
//   { id: 'id-2', tag: 'Poly', timePlayed: 470, points: 92, online: true },
//   { id: 'id-3', tag: 'Ajax', timePlayed: 230, points: 48, online: true },
//   { id: 'id-4', tag: 'Kiwi', timePlayed: 150, points: 71, online: false },
//   { id: 'id-5', tag: 'Shelsy', timePlayed: 80, points: 48, online: true },
// ];

// const upatedPlayers = players.map(player => ({
//   ...player,
//   points: player.points + player.points * 0.1,
// }));

// console.table(upatedPlayers);

// const playerIdToUpdate = 'player-3';

// // const apdatedPlayers = players.map(function(player) {
// //   if (player.id === playerIdToUpdate) {
// //     return {
// //       ...plaeyr,
// //       timePlayed: player.timePlayed + 50,
// //     }
// //   }
// //   return player;
// // })

// // const apdatedPlayers = players.map(player => {
// //   return player.id === playerIdToUpdate
// //     ? { ...player, timePlayed: player.timePlayed + 50 }
// //     : player;
// // });

// const apdatedPlayers = players.map(player =>
//   player.id === playerIdToUpdate
//   ? { ...player, timePlayed: player.timePlayed + 50 }
//   : player
// );

// console.table(apdatedPlayers);

// const products = [
//   { name: 'Radar', price: 1300, quantity: 4 },
//   { name: 'Scanner', price: 2700, quantity: 3 },
//   { name: 'Droid', price: 400, quantity: 7 },
//   { name: 'Grip', price: 1200, quantity: 9 },
// ];

// function getAllPropValues(propName) {
//   const productQuantity = [];
//   const productPrice = [];

//   for (const product of products) {
//     productPrice.push(product.price);
//   }
//   return productPrice;
// }
// // for (const product of products){
// //   productQuantity.push(product.quantity)
// // }
// // return productQuantity;

// console.log(getAllPropValues([{ name: 'Radar', price: 1300, quantity: 4 }]));
// // console.log(getAllPropValues([{ name: 'Scanner', price: 2700, quantity: 3 }]));
// // console.log(getAllPropValues([{ name: 'Droid', price: 400, quantity: 7 }]));
// // console.log(getAllPropValues([{ name: 'Grip', price: 1200, quantity: 9 }]));

// function add(a, b) {
//   return a + b;
// }

// function logger(a, b) {
//   alert(`Функція логгер - A ${a}`);
//   alert(`Функція логгер - B ${b}`);
// }

// console.log(add(1, 2));
// // console.log(add);

// const arr = [3, 10];

// function foo(arr, callback) {
//   const first = arr[0];
//   const second = arr[1];
//   const result = callback(first, second);
//   console.log(result);
// }

// foo(arr, add);
// foo(arr, logger)

// let i = 0;

// function createProduct(partialProduct, callback) {
//   i += 1;
//   const obj = {
//     id: i,
//     ...partialProduct,
//   };
//   callback(obj);
// }

// function logProduct(product) {
//   console.log(product);
// }

// function logTotalPrice({price, quntity}) {
//   console.log(price * quntity)
//   return price * quntity
// }

// createProduct(
//   {
//     name: 'Apple',
//     price: 30,
//     quntity: 3,
//   },
//   logProduct
// );

// createProduct(
//   {
//     name: 'Apple',
//     price: 30,
//     quntity: 3,
//   },
//   logTotalPrice
// );

// createProduct(
//   {
//     name: 'lemon',
//     price: 20,
//     quntity: 5,
//   },
//   logProduct
// );

// createProduct(
//   {
//     name: 'lemon',
//     price: 20,
//     quntity: 5,
//   },
//   logTotalPrice
// );

// const TRANSACTION_LIMIT = 1000;

// const account = {
//   username: 'Jacob',
//   balance: 3400,
//   withdraw(amount, onSuccess, onError) {
//     if (amount > this.balance) {
//       onError('Недостньо коштів на рахунку');
//     } else if (amount > TRANSACTION_LIMIT) {
//       onError('Сума перевищює ліміт');
//     } else {
//       this.balance -= amount;
//       onSuccess(`Списоно ${amount}, залишок ${this.balance}`);
//     }
//   },
//   deposit(amount, onSuccess, onError) {
//     if(amount <= 0){
//       onError('Значення має бути більше нуля');
//     } else if (amount > TRANSACTION_LIMIT) {
//       onError('Сума перевищює ліміт');
//     } else {
//       this.balance += amount;
//       onSuccess(`Кошти успішно зараховано ${this.balance}`)
//     }
//   },
// };

// function handleSuccess(messege) {
//   console.log(`Successl! ${messege}`);
// }

// function handleError(messege) {
//   console.log(`Error! ${messege}`);
// }

// // account.withdraw(2000, handleSuccess, handleError);
// // account.withdraw(6000, handleSuccess, handleError);
// // account.withdraw(300, handleSuccess, handleError);

// account.deposit(1700, handleSuccess, handleError);
// account.deposit(0, handleSuccess, handleError);
// account.deposit(-600, handleSuccess, handleError);
// account.deposit(600, handleSuccess, handleError);

// const each = (array, callback) => {
//   const newArr = [];

//   for(const element of array){
//     newArr.push(callback(element))
//   }
//   return newArr
// }

// console.log(each([64, 49, 36, 25, 16], value => value * 2));

// console.log(each([64, 49, 36, 25, 16], value => value - 10));

// console.log(each([64, 49, 36, 25, 16], value => Math.sqrt(value)));

// console.log(each([1.5, 2.1, 16.4, 9.7, 11.3], value => Math.ceil(value)));

// console.log(each([1.5, 2.1, 16.4, 9.7, 11.3], value =>  Math.floor(value)));

// function createProduct(partialProduct, callback) {
//   const product = { id: Date.now(), ...partialProduct };
//   callback(product);
// }

// const createProduct = (partialProduct, callback) => {
//   const product = { id: Date.now(), ...partialProduct };
//   callback(product);
// }

// const logProduct = product => console.log(product);

// const logTotalPrice = ({price, quantity}) => price * quantity;

// createProduct({
//   name: 'apple',
//   price: 30,
//   quantity: 3,
// }, logProduct);

// const logItems = items => items.forEach((item, idx) => console.log(`${idx + 1} - ${item}`));
// // {
// //   // console.log(items);

// //   // items.forEach((item, idx, arr) => {
// //   //   console.log(`${idx + 1} - ${item}`);
// //   // });

// //   // for (let i = 0; i < items.length; i += 1){
// //   //   console.log(`${i +1} - ${items[i]}`)};
// // };

// logItems(['Mango', 'Poly', 'Ajax']);
// logItems(['Strawberries', 'Grape', 'Peach', 'Banana', 'Lemon']);

// const printContactsInfo = ({ names, phones }) => {
//   const nameLiist = names.split(',');
//   const phoneList = phones.split(',');
//   // for (let i = 0; i < nameLiist.length; i += 1) {
//   //   console.log(`${nameLiist[i]}: ${phonesList[i]}`);
//   // }

//   nameLiist.forEach((el, idx) => {
//     console.log(`${el} - ${phoneList[idx]}`);
//   });
// };

// printContactsInfo({
//   names: 'Jacob,William,Solomon,Artem',
//   phones: '89001234567,89001112233,890055566377,890055566300',
// });

// const calculateAverage = (...args) => {
//   let total = 0;
//   // for (let i = 0; i < args.length; i += 1) {
//   //   total += args[i];
//   // }

//   args.forEach(el => total += el)
//   return total / args.length;
// }

// console.log(calculateAverage(1, 2, 3, 4));
// console.log(calculateAverage(14, 8, 2));
// console.log(calculateAverage(27, 43, 2, 8, 36));

// const LOW_SCORE = 50;
// const HIGH_SCORE = 80;
// const students = [
//   { name: "Манго", score: 83 },
//   { name: "Полі", score: 59 },
//   { name: "Аякс", score: 37 },
//   { name: "Ківі", score: 94 },
//   { name: "Х'юстон", score: 64 },
// ];

// const best = students.filter(student => student.score >= HIGH_SCORE);
// console.log(best); // Масив об'єктів з іменами Манго і Ківі

// const worst = students.filter(student => student.score < LOW_SCORE);
// console.log(worst); // Масив з одним об'єктом Аякс

// // В колбек-функції зручно деструктуризувати властивості об'єкта
// const average = students.filter(
//   ({ score }) => score >= LOW_SCORE && score < HIGH_SCORE
// );
// console.log(average); // Масив об'єктів з іменами Полі і Х'юстон

// const students = [
//   { name: "Манго", score: 83 },
//   { name: "Полі", score: 59 },
//   { name: "Аякс", score: 37 },
//   { name: "Ківі", score: 94 },
//   { name: "Х'юстон", score: 64 },
// ];

// // Назва акумулятора може бути довільною, це просто параметр функції
// const totalScore = students.reduce((total, student) => {
//   console.log(total + student.score)
//   return total + student.score;
// }, 0);

// const averageScore = totalScore / students.length;
// console.log(averageScore)

// const tweets = [
//   { id: "000", likes: 5, tags: ["js", "nodejs"] },
//   { id: "001", likes: 2, tags: ["html", "css"] },
//   { id: "002", likes: 17, tags: ["html", "js", "nodejs"] },
//   { id: "003", likes: 8, tags: ["css", "react"] },
//   { id: "004", likes: 0, tags: ["js", "nodejs", "react"] },
// ];

// // Пройдемо по всіх елементах колекції і додамо значення властивості likes
// // до акумулятора, початкове значення якого вкажемо 0.
// const likes = tweets.reduce((totalLikes, tweet) => totalLikes + tweet.likes, 0);

// console.log(likes); // 32

// // Мабуть, підрахунок лайків - не одиночна операція, тому напишемо функцію
// // для підрахунку лайків з колекції
// const countLikes = tweets => {
//   return tweets.reduce((totalLikes, tweet) => totalLikes + tweet.likes, 0);
// };

// console.log(countLikes(tweets)); // 32

// const tweets = [
//   { id: "000", likes: 5, tags: ["js", "nodejs"] },
//   { id: "001", likes: 2, tags: ["html", "css"] },
//   { id: "002", likes: 17, tags: ["html", "js", "nodejs"] },
//   { id: "003", likes: 8, tags: ["css", "react"] },
//   { id: "004", likes: 0, tags: ["js", "nodejs", "react"] },
// ];

// // Пройдемо по всіх елементах колекції і додамо значення властивості tags
// // до акумулятора, початкове значення якого вкажемо порожнім масивом [].
// // На кожній ітерації пушимо в акумулятор усі елементи tweet.tags і повертаємо його.
// const tags = tweets.reduce((allTags, tweet) => {
//   allTags.push(...tweet.tags);

//   return allTags;
// }, []);

// console.log(tags);

// const getTags = tweets =>
//   tweets.reduce((allTags, tweet) => {
//     allTags.push(...tweet.tags);

//     return allTags;
//   }, []);

// console.log(getTags(tweets));

// const tweets = [
//   { id: "000", likes: 5, tags: ["js", "nodejs"] },
//   { id: "001", likes: 2, tags: ["html", "css"] },
//   { id: "002", likes: 17, tags: ["html", "js", "nodejs"] },
//   { id: "003", likes: 8, tags: ["css", "react"] },
//   { id: "004", likes: 0, tags: ["js", "nodejs", "react"] },
// ];

// const getTags = tweets =>
//   tweets.reduce((allTags, tweet) => {
//     allTags.push(...tweet.tags);

//     return allTags;
//   }, []);

// const tags = getTags(tweets);

// // Винесемо callback-функцію окремо, а в reducе передамо посилання на неї.
// // Це стандартна практика, якщо callback-функція досить велика.

// // Якщо в об'єкті-акумуляторі acc відсутня своя властивість з ключем tag,
// // то створюємо її і записуємо їй значення 0.
// // В іншому випадку збільшуємо значення на 1.
// const getTagStats = (acc, tag) => {
//   if (!acc.hasOwnProperty(tag)) {
//     acc[tag] = 0;
//   }

//   acc[tag] += 1;

//   return acc;
// };

// // Початкове значення акумулятора - це порожній об'єкт {}
// const countTags = tags => tags.reduce(getTagStats, {});

// const tagCount = countTags(tags);
// console.log(tagCount);

// const scores = [27, 2, 41, 4, 7, 3, 75];
// scores.sort();
// console.log(scores); // [2, 27, 3, 4, 41, 7, 75]

// const scores = [61, 19, 74, 35, 92, 56];
// const ascendingScores = [...scores].sort();

// console.log(scores); // [61, 19, 74, 35, 92, 56]
// console.log(ascendingScores); // [19, 35, 56, 61, 74, 92]

// const students = ["Віка", "Андрій", "Олег", "Юля", "Борис", "Катя"];

// const inAlphabetOrder = [...students].sort((a, b) => a.localeCompare(b));
// console.log(inAlphabetOrder); // ['Андрій', 'Борис', 'Віка', 'Катя', 'Олег', 'Юля']

// const inReversedOrder = [...students].sort((a, b) => b.localeCompare(a));
// console.log(inReversedOrder); // ['Юля', 'Олег', 'Катя', 'Віка', 'Борис', 'Андрій']

// const students = [
//   { name: "Манго", score: 83 },
//   { name: "Полі", score: 59 },
//   { name: "Аякс", score: 37 },
//   { name: "Ківі", score: 94 },
// ];

// const inAscendingScoreOrder = students.sort(
//   (firstStudent, secondStudent) => firstStudent.score - secondStudent.score
// );
// console.log(firstStudent.score)

// const inDescendingScoreOrder = students.sort(
//   (firstStudent, secondStudent) => secondStudent.score - firstStudent.score
// );
// console.log(inDescendingScoreOrder)

// const inAlphabeticalOrder = students.sort((firstStudent, secondStudent) =>
//   firstStudent.name.localeCompare(secondStudent.name)
// );

// console.log(inAlphabeticalOrder)

// const products = [
//   { name: "Radar", price: 1300, quantity: 4 },
//   { name: "Scanner", price: 2700, quantity: 3 },
//   { name: "Droid", price: 400, quantity: 7 },
//   { name: "Grip", price: 1200, quantity: 9 },
// ];

// function calculateTotalPrice(productName) {
//   // Change code below this line
//   for (const product of products){
//     if(product.name === productName){
//       return product.price * product.quantity
//     }
//   }
//   return 0
// }

// console.log(calculateTotalPrice({ name: "Radar", price: 1300, quantity: 4 }))

// // Напиши функцію calculateTotalPrice(productName), яка приймає один параметр
// productName - назва товару. Функція повинна повернути загальну вартість
// (ціна * кількість) товару з таким ім'ям з масиву products.

// Оголошена функція calculateTotalPrice(productName)
// Виклик calculateTotalPrice("Blaster") повертає 0
// Виклик calculateTotalPrice("Radar") повертає 5200
// Виклик calculateTotalPrice("Droid") повертає 2800
// Виклик calculateTotalPrice("Grip") повертає 10800
// Виклик calculateTotalPrice("Scanner") повертає 8100

// const numbers = [5, 10, 15, 20, 25];

// numbers.forEach(function (number, index, array) {
//   console.log('number', number);
// });

// const numbers = [5, 10, 15, 20, 25];

// const doubledNums = numbers.map(function (number) {
//   // console.log(number);

//   return number * 2;
// });

// // console.log(doubledNums);

// const players = [
//   { id: 'player-1', name: 'Mango', timePlayed: 310, points: 54, online: false },
//   { id: 'player-2', name: 'Poly', timePlayed: 470, points: 92, online: true },
//   { id: 'player-3', name: 'Kiwi', timePlayed: 230, points: 48, online: true },
//   { id: 'player-4', name: 'Alax', timePlayed: 150, points: 71, online: false },
//   { id: 'player-5', name: 'Chelsy', timePlayed: 80, points: 41, online: true },
// ];

// // const plaeyrName = players.map(player => player.name);

// // console.log(plaeyrName);

// // const playerId = players.map(player => player.id);
// // console.log(playerId);

// // const res = players.map(({ name, online }) => ({ name, online }));
// // console.log('res', res);

// const uptedPlayers = players.map(player => ({
//   ...player,
//   points: player.points * 1.1,
// }));

// // console.table(uptedPlayers);
// // console.log(uptedPlayers);

// const playerIdToUpdate = 'player-4';

// const updatePlayers = players.map(player =>
//   playerIdToUpdate === player.id
//   ? {
//       ...player,
//       timePlayed: player.timePlayed + 100,
//     }
//   : player,
//   // if (playerIdToUpdate === player.id) {
//   //   console.log('Вот мы нашли того кого нужно обновить');

//   //   return {
//   //     ...player,
//   //     timePlayed: player.timePlayed + 100,
//   //   };
//   // }
//   // return player;

//   // return playerIdToUpdate === player.id
//   //   ? {
//   //       ...player,
//   //       timePlayed: player.timePlayed + 100,
//   //     }
//   //   : player;
// );
// console.table(updatePlayers);

// const numbers = [5, 10, 15, 20, 25];

// const filteredNumbers = numbers.filter(number => number > 15);

// // console.log(filteredNumbers);

// const players = [
//   { id: 'player-1', name: 'Mango', timePlayed: 310, points: 54, online: false },
//   { id: 'player-2', name: 'Poly', timePlayed: 470, points: 92, online: true },
//   { id: 'player-3', name: 'Kiwi', timePlayed: 280, points: 48, online: true },
//   { id: 'player-4', name: 'Alax', timePlayed: 150, points: 71, online: false },
//   { id: 'player-5', name: 'Chelsy', timePlayed: 80, points: 41, online: true },
// ];

// const onlinePlayers = players.filter(({ online }) => online);
// console.table(onlinePlayers);

// const offlinePlayers = players.filter(({ online }) => !online);
// console.table(offlinePlayers);

// const hardcorePlayers = players.filter(({ timePlayed }) => timePlayed > 250);
// console.table(hardcorePlayers);

// const numbers = [5, 10, 15, 20, 25];

// const players = [
//   { id: 'player-1', name: 'Mango', timePlayed: 310, points: 54, online: false },
//   { id: 'player-2', name: 'Poly', timePlayed: 470, points: 92, online: true },
//   { id: 'player-3', name: 'Kiwi', timePlayed: 280, points: 48, online: true },
//   { id: 'player-4', name: 'Alax', timePlayed: 150, points: 71, online: false },
//   { id: 'player-5', name: 'Chelsy', timePlayed: 80, points: 41, online: true },
// ];

// const playerIdToFind = 'player-4';

// const playerWithId = players.find(({id}) => id === playerIdToFind);
// // console.log(playerWithId);

// const playerNameToFind = 'Alax';

// const playerWithName = players.find(({name}) => name === playerNameToFind);
// // console.log(playerWithName);

// const findPlayerById = (allPlayer, playerId) => allPlayer.find(({id}) => id === playerId);

// console.log(findPlayerById(players, 'player-3'));
// console.log(findPlayerById(players, 'player-4'));

// const players = [
//   { id: 'player-1', name: 'Mango', timePlayed: 310, points: 54, online: false },
//   { id: 'player-2', name: 'Poly', timePlayed: 470, points: 92, online: true },
//   { id: 'player-3', name: 'Kiwi', timePlayed: 280, points: 48, online: true },
//   { id: 'player-4', name: 'Alax', timePlayed: 150, points: 71, online: false },
//   { id: 'player-5', name: 'Chelsy', timePlayed: 80, points: 41, online: true },
// ];

// const isAllOnline = players.every(player => player.timePlayed > 100);
// // console.log('isAllOnline:', isAllOnline);

// const isAnyOnline = players.some(player => player.online);
// console.log('isAnyOnline:', isAnyOnline);

// const numbers = [5, 10, 15, 20, 25];

// const total = numbers.reduce((acc, number) => acc + number, 0);
// // console.log(total);

// const salary = {
//   mango: 100,
//   poly: 50,
//   ajax: 150,
// };

// const totalSalary = Object.values(salary).reduce((total, value) => {
//   return total + value;
// }, 0);
// console.log(totalSalary);

// const players = [
//   { id: 'player-1', name: 'Mango', timePlayed: 310, points: 54, online: false },
//   { id: 'player-2', name: 'Poly', timePlayed: 470, points: 92, online: true },
//   { id: 'player-3', name: 'Kiwi', timePlayed: 280, points: 48, online: true },
//   { id: 'player-4', name: 'Alax', timePlayed: 150, points: 71, online: false },
//   { id: 'player-5', name: 'Chelsy', timePlayed: 80, points: 41, online: true },
// ];

// const totalTimePlayed = players.reduce(
//   (totalTimi, player) => totalTimi + player.timePlayed, 0);
// console.log(totalTimePlayed);

// const cart = [
//   {label: 'Apples', price: 100, quantity: 2},
//   {label: 'Bananas', price: 120, quantity: 3},
//   {label: 'Lemons', price: 70, quantity: 4},
// ]

// const totalAmount = cart.reduce(
//   (total, {price, quantity}) => total + price * quantity, 0)

// console.log(totalAmount)

// const tweets = [
//   { id: '000', likes: 5, tags: ['js', 'nodejs'] },
//   { id: '001', likes: 2, tags: ['html', 'css'] },
//   { id: '002', likes: 17, tags: ['html', 'js', 'nodejs'] },
//   { id: '003', likes: 8, tags: ['css', 'react'] },
//   { id: '004', likes: 0, tags: ['js', 'nodejs', 'react'] },
// ];

// const allTags = tweets.reduce((acc, tweet) => [...acc, ...tweet.tags], []);
// // tags.push(...tweet.tags);

// console.log(allTags);

// // const tagsStats = allTags.reduce((acc, tag) => {
// //   console.log(acc);

// //   if (acc[tag]) {
// //     acc[tag] += 1;

// //     return acc;
// //   }

// //   acc[tag] = 1;

// //   return acc;
// // }, {});
// // console.log(tagsStats)

// const tagsStats = allTags.reduce((acc, tag) => ({
//   ...acc,
//   [tag]: acc[tag] ? acc[tag] + 1 : 1,
//   // console.log(acc);

//   // if (acc[tag]) {
//   //   // acc[tag] += 1;

//   //   return {
//   //     ...acc,
//   //     [tag]: acc.tag + 1,
//   //   };
//   // }

//   // return {
//   //   ...acc,
//   //   [tag]: 1,
//   // };

// }), {});
// console.log(tagsStats);

// const firstBook = {
//   title: "Останнє королівство",
//   coverImage:
//     "https://images-na.ssl-images-amazon.com/images/I/51b5YG6Y1rL.jpg",
// };

// const {
//   title: firstTitle,
//   coverImage: firstCoverImage = "https://via.placeholder.com/640/480",
// } = firstBook;

// console.log(firstTitle); // Останнє королівство
// console.log(firstCoverImage); // https://images-na.ssl-images-amazon.com/images/I/51b5YG6Y1rL.jpg

// const secondBook = {
//   title: "Сон смішної людини",
// };

// const {
//   title: secondTitle,
//   coverImage: secondCoverImage = "https://via.placeholder.com/640/480",
// } = secondBook;

// console.log(secondTitle); // Сон смішної людини
// console.log(secondCoverImage); // https://via.placeholder.com/640/480

// const numbers = [1, 9, 6, 2, 3];
// // numbers.sort();
// console.log('numbers:', numbers);

// const letters = ['b', 'B', 'a', 'A'];
// letters.sort();
// console.log('letters:', letters);

// const descSortedNumbers = [...numbers].sort((a, b) => b - a);
// const ascSortedNumbers = [...numbers].sort((a, b) => a - b);
// console.log('ascSortedNumbers:', ascSortedNumbers);
// console.log('descSortedNumbers:', descSortedNumbers);

// const players = [
//   { id: 'player-1', name: 'Mango', timePlayed: 310, points: 54, online: false },
//   { id: 'player-2', name: 'Poly', timePlayed: 470, points: 92, online: true },
//   { id: 'player-3', name: 'Kiwi', timePlayed: 280, points: 48, online: true },
//   { id: 'player-4', name: 'Alax', timePlayed: 150, points: 71, online: false },
//   { id: 'player-5', name: 'Chelsy', timePlayed: 80, points: 41, online: true },
// ];

// const sortByBestPlayers = [...players].sort(
//   (prevPlayer, nextPlayer) => prevPlayer.timePlayed - nextPlayer.timePlayed
// );

// console.table(sortByBestPlayers);

// const sortByWorstPlayers = [...players].sort(
//   (prevPlayer, nextPlayer) => nextPlayer.timePlayed - prevPlayer.timePlayed
// );

// console.table(sortByWorstPlayers);

// const byName = [...players].sort((a, b) => {
//   const result = a.name[0] > b.name[0];

//   if (result) {
//     return 1;
//   }

//   if (!result) {
//     return -1;
//   }
// });

// console.table(byName);

// const array = [1, 2, [4, [5]], [6, [7, 8, [9]]]];

// console.log(array.flat(3));

// const tweets = [
//   { id: '000', likes: 5, tags: ['js', 'nodejs'] },
//   { id: '001', likes: 2, tags: ['html', 'css'] },
//   { id: '002', likes: 17, tags: ['html', 'js', 'nodejs'] },
//   { id: '003', likes: 8, tags: ['css', 'react'] },
//   { id: '004', likes: 0, tags: ['js', 'nodejs', 'react'] },
// ];

// // const tags = tweets.reduce((acc, tweet) => [...acc, ...tweet.tags], []);

// // const tags = tweets.map(t => t.tags).flat();
// // const tags = tweets.flatMap(t => t.tags);
// // console.log(tags)

// // const stats = tags.reduce((acc, tag) => {
// //   return {
// //     ...acc,
// //     [tag]: acc[tag] ? acc[tag] + 1 : 1,
// //   };
// // }, {});

// const stats = tweets
// .flatMap(t => t.tags)
// .reduce(
//   (acc, tag) => ({
//     ...acc,
//     [tag]: acc[tag] ? acc[tag] + 1 : 1,
//   }),
//   {},
// );
// console.log(stats)

// const numbers = [1, 5, 2, 4, 3];

// // const greaterThenTwo = numbers.filter(num => num > 2);
// // console.log(greaterThenTwo);

// // const multByThree = greaterThenTwo.map(num => num * 3);
// // console.log(multByThree);

// // const sorted = multByThree.sort((a, b) => a - b);
// // console.log(sorted);

// const sorted = numbers
//   .filter(num => num > 2)
//   .map(num => num * 3)
//   .sort((a, b) => a - b);
// console.log(sorted);

// const players = [
//   { id: 'id-1', tag: 'Mango', isOnline: true, rank: 800 },
//   { id: 'id-2', tag: 'Poly', isOnline: false, rank: 600 },
//   { id: 'id-3', tag: 'Ajax', isOnline: true, rank: 100 },
//   { id: 'id-4', tag: 'Kiwi', isOnline: true, rank: 400 },
// ];

// const onlineAndSorted = players
// .filter(player => player.isOnline)
// .sort((playerA, playerB) => playerA.rank - playerB.rank);

// console.table(onlineAndSorted);

// const alement = {
//   class: '',
//   hovered: false,
//   changeClass(cls) {
//     this.class = cls;

//     return this;
//   },
//   toggleHovered() {
//     this.hovered = !this.hovered;

//     return this;
//   },
// };

// alement.toggleHovered().changeClass('open');
// console.log(alement);

// function makeTask(data) {
//   const completed = false;
//   const category = "General";
//   const priority = "Normal";

// return {category, priority, completed, ...data, };
// }

// console.log(makeTask({})); //{ category: "General", priority: "Normal", completed: false }

// console.log(makeTask({ category: "Homemade", priority: "Low", text: "Take out the trash" }));
// // { category: "Homemade", priority: "Low", text: "Take out the trash", completed: false }

// console.log(makeTask({ category: "Finance", text: "Take interest" }));
// // { category: "Finance", priority: "Normal", text: "Take interest", completed: false }

// console.log(makeTask({ priority: "Low", text: "Choose shampoo" }));
// // { category: "General", priority: "Low", text: "Choose shampoo", completed: false }

// console.log(makeTask({ text: "Buy bread" }));
// // { category: "General", priority: "Normal", text: "Buy bread", completed: false }

// function add(number,...args) {

//   let total = 0;

//   for (let arg of args) {
//     if(arg > number){
//       total +=arg
//     }

//   }
//   return total
// }

// console.log(add(50, 15, 27)); //0
// console.log(add(10, 12, 4, 11, 48, 10, 8)); //71
// console.log(add(15, 32, 6, 13, 19, 8)); //51
// console.log(add(20, 74, 11, 62, 46, 12, 36)); //218

// function findMatches(mas, ...arguments) {
//   console.log(mas)
//   console.log(arguments)

//   const matches = []; // Don't change this line

//   for(const element of mas){
//     if(arguments.includes(element)){
//       matches.push(element)
//     }
//   }
//   return matches;
// }

// console.log(findMatches([1, 2, 3, 4, 5], 1, 8, 2, 7)); //[1, 2]
// console.log(findMatches([4, 89, 17, 36, 2], 8, 17, 89, 27, 2)); //[17, 89, 2]
// console.log(findMatches([10, 24, 41, 6, 9, 19], 24, 11, 9, 23, 41)); //[24, 9, 41]
// console.log(findMatches([63, 11, 8, 29], 4, 7, 16)); //[]

// const bookShelf = {
//   books: ["Останнє королівство"],
//   getBooks() {
//     return this.books;
//   },
//   addBook(bookName) {
//     this.books.push(bookName);
//   },
//   removeBook(bookName) {
//     const bookIndex = this.books.indexOf(bookName);
//     this.books.splice(bookIndex, 1);
//   },
// };

// console.log(bookShelf.getBooks()); // ["Останнє королівство"]
// bookShelf.addBook("Імла");
// bookShelf.addBook("Страж снів");
// console.log(bookShelf.getBooks()); // ["Останнє королівство", "Імла", "Страж снів"]
// bookShelf.removeBook("Імла");
// console.log(bookShelf.getBooks()); // ["Останнє королівство", "Страж снів"]

// const bookShelf = {
//   books: ['The last kingdom', 'Haze', 'The guardian of dreams'],

//   updateBook(oldName, newName) {
//     console.log(oldName)
//     const bookIndex = this.books.indexOf(oldName);
//     console.log(bookIndex)

//     this.books.splice( bookIndex, 1 , newName)
//     console.log(this.books)
//   },

// };

// console.log(bookShelf.updateBook())

// console.log(bookShelf.updateBook('Haze', 'Dungeon chronicles'));
// books - це масив ["The last kingdom", "Dungeon chronicles", "The guardian of dreams"]

// console.log(bookShelf.updateBook('The last kingdom', 'Dune'));
//  значення властивості books - це масив ["Dune", "Haze", "The guardian of dreams"]

// function updateCourses (oldName, newName){
//     if(courses.includes(oldName)){
//         const idx = courses.indexOf(oldName);
//         // console.log(idx);
//         // courses.splice(idx,1,newName);
//         courses[idx] = newName;

//         return `${oldName} змінили на ${newName}`;
//     }
//     return 'Курс з такою назвою не знайден';
// }

// console.log(updateCourses('Express','NestJS'));
// // console.log(courses);
// console.log(updateCourses('Angular','NestJS'));

// const values = ['a','b','c'];
// values.forEach(value => console.log(value))

// const cars = [
//   {
//     make: 'Honda',
//     model: 'CR-V',
//     type: 'suv',
//     amount: 14,
//     price: 24045,
//     onSale: true,
//   },
//   {
//     make: 'Honda',
//     model: 'accord',
//     type: 'sedan',
//     amount: 2,
//     price: 22455,
//     onSale: true,
//   },
//   {
//     make: 'Honda',
//     model: 'CR-V',
//     type: 'suv',
//     amount: 14,
//     price: 24045,
//     onSale: true,
//   },
//   {
//     make: 'Mazda',
//     model: 'Mazda 6',
//     type: 'sedan',
//     amount: 8,
//     price: 24195,
//     onSale: false,
//   },
//   {
//     make: 'Mazda',
//     model: 'CX-9',
//     type: 'suv',
//     amount: 7,
//     price: 31520,
//     onSale: true,
//   },
//   {
//     make: 'Toyota',
//     model: '4Runner',
//     type: 'suv',
//     amount: 19,
//     price: 34210,
//     onSale: false,
//   },
//   {
//     make: 'Toyota',
//     model: 'Sequoia',
//     type: 'suv',
//     amount: 16,
//     price: 45560,
//     onSale: false,
//   },
//   {
//     make: 'Toyota',
//     model: 'Tacoma',
//     type: 'truck',
//     amount: 4,
//     price: 24320,
//     onSale: true,
//   },
//   {
//     make: 'Ford',
//     model: 'F-150',
//     type: 'truck',
//     amount: 11,
//     price: 27110,
//     onSale: true,
//   },
//   {
//     make: 'Ford',
//     model: 'Fusion',
//     type: 'sedan',
//     amount: 13,
//     price: 22120,
//     onSale: true,
//   },
//   {
//     make: 'Ford',
//     model: 'Explorer',
//     type: 'suv',
//     amount: 6,
//     price: 31660,
//     onSale: false,
//   },
// ];

// {
//   make: 'Honda',
//   model: 'CR-V',
//   type: 'suv',
//   amount: 14,
//   price: 24045,
//   onSale: true,
// }

// const getModels = arr => arr.map(({model}) => model);

// console.log(getModels(cars));
// console.log(cars);

// const makeCarsWithDiscount = (cars, discount) => {
//   const result = cars.map(car => {
//     const changePrice = (car.price / 100) * discount;
//     car.price -= changePrice
//     // console.log( car.price -= changePrice);
//     return car
//   });
//   return result
// };

// console.log(makeCarsWithDiscount(cars, 6));

// const makeCarsWithDiscount = (cars, discount) => cars.map(car =>
//   {
//     car.price -= car.price / 100 * discount;
//     return car
//   });

// console.log(makeCarsWithDiscount(cars, 6));

// const makeCarsWithDiscount = (cars, discount) => cars.map(car =>
//   {
//     car.price -= car.price / 100 * discount;
//     car.price = Math.ceil(car.price);
//     return car
//   });

// console.log(makeCarsWithDiscount(cars, 6));

// {
//   make: 'Honda',
//   model: 'CR-V',
//   type: 'suv',
//   amount: 14,
//   price: 24045,
//   onSale: true,
// }

// const filterByPrice = (cars, threshold) => cars.filter(({ price }) => price < threshold);

// console.table(filterByPrice(cars, 30000));
// console.table(filterByPrice(cars, 25000));

// const getCarsWithDiscount = cars => {
//   const result = cars.filter(car => {
//     if (car.onSale) {
//       return car;
//     }
//   });
//   return result;
// };

// // console.log(cars);
// console.log(getCarsWithDiscount(cars));

// const getCarsWithDiscount = cars => cars.filter(({onSale}) =>  onSale)

// // console.log(cars);
// console.log(getCarsWithDiscount(cars));

// {
//   make: 'Honda',
//   model: 'CR-V',
//   type: 'suv',
//   amount: 14,
//   price: 24045,
//   onSale: true,
// }

// const getCarsWithType = (cars, type) => {
//   const result = cars.filter(car => {
//     if (car.type === type) {
//       return car;
//     }
//   });
//   return result;
// };

// const getCarsWithType = (cars, type) => cars.filter(
//   ({type: carType}) => carType === type);

// console.log(getCarsWithType(cars, 'suv'));
// console.log(getCarsWithType(cars, 'sedan'));

// {
//   make: 'Honda',
//   model: 'CR-V',
//   type: 'suv',
//   amount: 14,
//   price: 24045,
//   onSale: true,
// }

// const getCarMyModel = (cars, model) => {
//   const result = cars.find(car => {
//     if (car.model === model) {
//       return model;
//     }
//   });
//   return result
// };

// console.log(getCarMyModel(cars, 'F-150'));
// console.log(getCarMyModel(cars, 'CX-9'));

// const getCarMyModel = (cars, model) => cars.find(
//   ({ model: carModel }) => carModel === model);

// console.log(getCarMyModel(cars, 'F-150'));
// console.log(getCarMyModel(cars, 'CX-9'));

// const sortByAscendingAmount = cars => cars.sort((a,b) => a.amount - b.amount);

// console.log(sortByAscendingAmount(cars));

// const sortByModel = (cars, order) => {
//   let result;
//   if(order === 'asc'){
//     result = cars.sort((a,b) => a.model.localeCompare(b.model))
//   } else {
//     result = cars.sort((a,b) => b.model.localeCompare(a.model))
//   }
//   return result
// };

// console.log(sortByModel(cars, 'asc'));
// console.log(cars)
// console.log(sortByModel(cars, 'desc'));

// const getTotalAmount = cars => {
//   const result = cars.reduce((acc, car) => {
//     return acc + car.amount
//   }, 0)
//   return result
// };

// console.log(getTotalAmount(cars));

// const getAvailableCarNames = cars => {
//   const result = cars.filter(car => car.onSale).map(({ model }) => model);
//   console.log(result)
// };

// console.log(getAvailableCarNames(cars));

// {
//   make: 'Honda',
//   model: 'CR-V',
//   type: 'suv',
//   amount: 14,
//   price: 24045,
//   onSale: true,
// }

// const getSortedCarsOnSale = cars => {
//   // onst result = cars.filter(( car ) => car.sale).sort((a, b) => a.price - b.price);
//   const result = cars.filter(( {onSale} ) => onSale).sort((a, b) => a.price - b.price);
//   return result.reduce((acc, car, idx) => {
//     return acc + `${idx + 1 }. ${car.make} ${car.model} ціна ${car.price}\n`;
//   }, result.length ? `Кількість автомобілів ${result.length}: \n` : 'Немає');
// };

// console.log(getSortedCarsOnSale(cars));

// const str = 'qwetyquokjHgqfdsaxcvbnmjhgtqreDvn';
// const st1 = 'qwetyuokqjHgfdsaxcvqbnmjhgtreDvnoqwtqtyuuiBVyhv';

// // function foo(str) {
// //   str = str.split('');
// //   const acc = {};
// //   for (const value of str) {
// //     if (acc.hasOwnProperty(value)) {
// //       acc[value] += 1;
// //     } else {
// //       acc[value] = 1;
// //     }
// //   }
// //   return acc;
// // }

// // function foo(str) {
// //   str = str.split('');
// //   return str.reduce((acc, value) => {
// //     if (acc.hasOwnProperty(value)) {
// //       acc[value] += 1;
// //     } else {
// //       acc[value] = 1;
// //     }
// //     return acc;
// //   }, {});
// // }

// console.log(foo(str));
// console.log(foo(st1));

// const atTheOldToad = {
//   potions: ["Speed potion", "Dragon breath", "Stone skin"],
//   removePotion(potionName) {
//     // Change code below this line

// const nameIndex = this.potions.indexOf(potionName);
//     console.log(nameIndex);
//   this.potions.splice(nameIndex,1,)
//     console.log(this.potions)
//   },
// };

// console.log(atTheOldToad.potions);
// console.log(atTheOldToad.removePotion("Dragon breath"));
// console.log(atTheOldToad.removePotion("Speed potion"));

// const bookShelf = {
//   books: ["Останнє королівство"],
//   getBooks() {
//     return this.books;
//   },
//   addBook(bookName) {
//     this.books.push(bookName);
//   },
//   removeBook(bookName) {
//     const bookIndex = this.books.indexOf(bookName);
//     this.books.splice(bookIndex, 1);
//   },
// };

// const getCarsWithDiscount = cars => {
//   const result = cars.filter(car => {
//     if (car.onSale) {
//       return car;
//     }
//   });
//   return result;
// };

// const atTheOldToad = {
//   potions: [
//     { name: 'Speed potion', price: 460 },
//     { name: 'Dragon breath', price: 780 },
//     { name: 'Stone skin', price: 520 },
//   ],
//   // Change code below this line
//   getPotions() {
//     return this.potions;
//   },
//   addPotion(newPotion) {
//     for (const potion of this.potions) {
//       if (potion.name === newPotion.name) {
//         return `Error! Potion ${newPotion.name} is already in your inventory!`;
//       }
//     }
//     this.potions.push(newPotion);
//   },
//   removePotion(potionName) {
//     // const potionIndex = this.potions.indexOf(potionName);
//     // console.log(potionIndex)

//     // if (potionIndex === -1) {
//     //   return `Potion ${potionName} is not in inventory!`;
//     // }

//     // this.potions.splice(potionIndex, 1);
//     for (i = 0; i < this.potions.length; i += 1) {
//       if (this.potions[i].name === potionName) {
//         this.potions.splice(i, 1);
//         return;
//       }
//     }
//     return `Potion ${potionName} is not in inventory!`;
//   },
//   //removePotion(potionName) -
//   // видаляє об'єкт зілля з ім'ям potionName з масиву у властивості potions.

//   // updatePotionName(oldName, newName) {
//   //   const potionIndex = this.potions.indexOf(oldName);

//   //   if (potionIndex === -1) {
//   //     return `Potion ${oldName} is not in inventory!`;
//   //   }

//   //   this.potions.splice(potionIndex, 1, newName);
//   // },
//   // Change code above this line
// };

// console.log(atTheOldToad.getPotions());
// // console.log(atTheOldToad.addPotion({ name: "Invisibility", price: 620 }));
// // console.log(atTheOldToad.addPotion({ name: "Power potion", price: 270 }));
// // console.log(atTheOldToad.addPotion({ name: "Dragon breath", price: 700 }));
// // console.log(atTheOldToad.addPotion({ name: "Stone skin", price: 240 }));
// console.log(atTheOldToad.removePotion('Dragon breath'));
// console.log(atTheOldToad.removePotion('Speed potion'));
// // console.log(atTheOldToad.updatePotionName("Dragon breath", "Polymorth"));
// // console.log(atTheOldToad.updatePotionName("Stone skin", "Invulnerability potion"));

// const pizzaPalace = {
//   pizzas: ['Ultracheese', 'Smoked', 'Four meats'],
//   order(pizzaName, onSuccess, onError) {
//     for (const pizza of this.pizzas) {
//       if (pizza === pizzaName) {
//         return onSuccess(pizzaName);
//       }
//     }
//     return onError(`There is no pizza with a name ${pizzaName} in the assortment.`);
//   },
// };
// // Change code above this line

// // Callback for onSuccess
// function makePizza(pizzaName) {
//   return `Your order is accepted. Cooking pizza ${pizzaName}.`;
// }

// // Callback for onError
// function onOrderError(error) {
//   return `Error! ${error}`;
// }

// // Method calls with callbacks
// console.log(pizzaPalace.order('Smoked', makePizza, onOrderError));
// console.log(pizzaPalace.order('Four meats', makePizza, onOrderError));
// console.log(pizzaPalace.order('Big Mike', makePizza, onOrderError));
// console.log(pizzaPalace.order('Vienna', makePizza, onOrderError));

// function changeEven(numbers, value) {
//   // Change code below this line
//   const newArray = [];
//   for (let i = 0; i < numbers.length; i += 1) {
//     if (numbers[i] % 2 === 0) {
//       newArray.push(numbers[i] + value);
//       continue;
//     }
//     newArray.push(numbers[i]);
//   }
//   return newArray;
//   // Change code above this line
// }

// console.log(changeEven([1, 2, 3, 4, 5], 10)); //повертає новий масив [1, 12, 3, 14, 5]
// console.log(changeEven([2, 8, 3, 7, 4, 6], 10)); //повертає [12, 18, 3, 7, 14, 16]
// console.log(changeEven([17, 24, 68, 31, 42], 100)); // [17, 124, 168, 31, 142]
// console.log(changeEven([44, 13, 81, 92, 36, 54], 100)); // [144, 13, 81, 192, 136, 154]

// const hotel = {
//   username: "Resort hotel",
//   showThis() {
//     const foo = () => {
//       // Стрілки запам'ятовують контекст під час оголошення
//       // з батьківської області видимості
//       console.log("this in foo: ", this);
//     };

//     foo();
//     console.log("this in showThis: ", this);
//   },
// };

// hotel.showThis();
// // this in foo: {username: 'Resort hotel', showThis: ƒ}
// // this in showThis: {username: 'Resort hotel',showThis: ƒ}

// const users = [
//   {
//     name: 'Moore Hensley',
//     email: 'moorehensley@indexia.com',
//     eyeColor: 'blue',
//     friends: ['Sharron Pace'],
//     isActive: false,
//     balance: 2811,
//     skills: ['ipsum', 'lorem'],
//     gender: 'male',
//     age: 37,
//   },
//   {
//     name: 'Sharlene Bush',
//     email: 'sharlenebush@tubesys.com',
//     eyeColor: 'blue',
//     friends: ['Briana Decker', 'Sharron Pace'],
//     isActive: true,
//     balance: 3821,
//     skills: ['tempor', 'mollit', 'commodo', 'veniam', 'laborum'],
//     gender: 'female',
//     age: 34,
//   },
//   {
//     name: 'Ross Vazquez',
//     email: 'rossvazquez@xinware.com',
//     eyeColor: 'green',
//     friends: ['Marilyn Mcintosh', 'Padilla Garrison', 'Naomi Buckner'],
//     isActive: false,
//     balance: 3793,
//     skills: ['nulla', 'anim', 'proident', 'ipsum', 'elit'],
//     gender: 'male',
//     age: 24,
//   },
//   {
//     name: 'Elma Head',
//     email: 'elmahead@omatom.com',
//     eyeColor: 'green',
//     friends: ['Goldie Gentry', 'Aisha Tran'],
//     isActive: true,
//     balance: 2278,
//     skills: ['adipisicing', 'irure', 'velit'],
//     gender: 'female',
//     age: 21,
//   },
//   {
//     name: 'Carey Barr',
//     email: 'careybarr@nurali.com',
//     eyeColor: 'blue',
//     friends: ['Jordan Sampson', 'Eddie Strong'],
//     isActive: true,
//     balance: 3951,
//     skills: ['ex', 'culpa', 'nostrud'],
//     gender: 'male',
//     age: 27,
//   },
//   {
//     name: 'Blackburn Dotson',
//     email: 'blackburndotson@furnigeer.com',
//     eyeColor: 'brown',
//     friends: ['Jacklyn Lucas', 'Linda Chapman'],
//     isActive: false,
//     balance: 1498,
//     skills: ['non', 'amet', 'ipsum'],
//     gender: 'male',
//     age: 38,
//   },
//   {
//     name: 'Sheree Anthony',
//     email: 'shereeanthony@kog.com',
//     eyeColor: 'brown',
//     friends: ['Goldie Gentry', 'Briana Decker'],
//     isActive: true,
//     balance: 2764,
//     skills: ['lorem', 'veniam', 'culpa'],
//     gender: 'female',
//     age: 39,
//   },
// ];

// const getActiveUsers = (users) => users.filter(user => {
//   if(user.isActive === isActive){
//     return user
//   }
// })

// console.log(getActiveUsers(users))

// const getUsersWithFriend = (users, friendName) => users.filter(user => {
//   if(user.friends === friendName){
//     return users
//   }
// })

// console.log("Briana Decker");
// // console.log();
// // console.log();

// const tweets = [
//   //   { id: '000', likes: 5, tags: ['js', 'nodejs'] },
//   //   { id: '001', likes: 2, tags: ['html', 'css'] },
//   //   { id: '002', likes: 17, tags: ['html', 'js', 'nodejs'] },
//   //   { id: '003', likes: 8, tags: ['css', 'react'] },
//   //   { id: '004', likes: 0, tags: ['js', 'nodejs', 'react'] },
//   // ];

//   // // const tags = tweets.reduce((acc, tweet) => [...acc, ...tweet.tags], []);

//   // // const tags = tweets.map(t => t.tags).flat();
//   // // const tags = tweets.flatMap(t => t.tags);
//   // // console.log(tags)

//   // // const stats = tags.reduce((acc, tag) => {
//   // //   return {
//   // //     ...acc,
//   // //     [tag]: acc[tag] ? acc[tag] + 1 : 1,
//   // //   };
//   // // }, {});

//   // const stats = tweets
//   // .flatMap(t => t.tags)
//   // .reduce(
//   //   (acc, tag) => ({
//   //     ...acc,
//   //     [tag]: acc[tag] ? acc[tag] + 1 : 1,
//   //   }),
//   //   {},
//   // );
//   // console.log(stats)

// const students = [
//   { name: "Манго", score: 83 },
//   { name: "Полі", score: 59 },
//   { name: "Аякс", score: 37 },
//   { name: "Ківі", score: 94 },
//   { name: "Х'юстон", score: 64 },
// ];

// // Назва акумулятора може бути довільною, це просто параметр функції
// const totalScore = students.reduce((total, student) => {
//   return total + student.score;
// }, 0);

// const averageScore = totalScore / students.length;

// const students = [
//   { name: "Mango", score: 83, courses: ["mathematics", "physics"] },
//   { name: "Poly", score: 59, courses: ["science", "mathematics"] },
//   { name: "Ajax", score: 37, courses: ["physics", "biology"] },
//   { name: "Kiwi", score: 94, courses: ["literature", "science"] },
// ];

// const uniqueSortedCourses = students
//   .flatMap(student => student.courses)
//   .filter((course, index, array) => array.indexOf(course) === index)
//   .sort((a, b) => a.localeCompare(b));

// console.log(uniqueSortedCourses); // ["biology", "science", "literature", "mathematics", "physics"]

// [
//   {
//     name: "Moore Hensley",
//     email: "moorehensley@indexia.com",
//     eyeColor: "blue",
//     friends: ["Sharron Pace"],
//     isActive: false,
//     balance: 2811,
//     gender: "male"
//   },
//   {
//     name: "Sharlene Bush",
//     email: "sharlenebush@tubesys.com",
//     eyeColor: "blue",
//     friends: ["Briana Decker", "Sharron Pace"],
//     isActive: true,
//     balance: 3821,
//     gender: "female"
//   },
//   {
//     name: "Ross Vazquez",
//     email: "rossvazquez@xinware.com",
//     eyeColor: "green",
//     friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
//     isActive: false,
//     balance: 3793,
//     gender: "male"
//   },
//   {
//     name: "Elma Head",
//     email: "elmahead@omatom.com",
//     eyeColor: "green",
//     friends: ["Goldie Gentry", "Aisha Tran"],
//     isActive: true,
//     balance: 2278,
//     gender: "female"
//   },
//   {
//     name: "Carey Barr",
//     email: "careybarr@nurali.com",
//     eyeColor: "blue",
//     friends: ["Jordan Sampson", "Eddie Strong", "Adrian Cross"],
//     isActive: true,
//     balance: 3951,
//     gender: "male"
//   },
//   {
//     name: "Blackburn Dotson",
//     email: "blackburndotson@furnigeer.com",
//     eyeColor: "brown",
//     friends: ["Jacklyn Lucas", "Linda Chapman", "Adrian Cross", "Solomon Fokes"],
//     isActive: false,
//     balance: 1498,
//     gender: "male"
//   },
//   {
//     name: "Sheree Anthony",
//     email: "shereeanthony@kog.com",
//     eyeColor: "brown",
//     friends: ["Goldie Gentry", "Briana Decker"],
//     isActive: true,
//     balance: 2764,
//     gender: "female"
//   }
// ]

// const getNamesSortedByFriendCount = users =>
// [...users].sort((a, b) => a.friends.length - b.friends.length)

// console.log(getNamesSortedByFriendCount(users));
// //["Moore Hensley", "Sharlene Bush", "Elma Head", "Sheree Anthony", "Ross Vazquez", "Carey Barr", "Blackburn Dotson"]

// console.log('[] === []: ', [] === []);
// console.log('{} === {}: ', {} === {});
// console.log(
//   'function() {} === function() {}: ',
//   function () {} === function () {}
//   );

//   const fnA = function() {
//     console.log('Hello');
//   };

//   const fnB = fnA;
//   console.log('fnB === fnA: ', fnB === fnA);

// const counter = {
//   value: 0,
//   increment() {
//     console.log('increment -> this', this);
//     this.value += 1;
//   },
//   decrement() {
//     console.log('decrement -> this', this);
//     this.value -= 1;
//   },
// };

// const decrementBtn = document.querySelector('.js-decrement');
// const incrementBtn = document.querySelector('.js-increment');
// const valueEl = document.querySelector('.js-value');

// // console.log(incrementBtn);
// // console.log(decrementBtn);
// // console.log(valueEl);

// // decrementBtn.textContent = 'bvcbcb'

// decrementBtn.addEventListener('click', function () {
//   console.log('Клікнули на декркмент');

//   counter.decrement();
//   console.log(counter)

//   valueEl.textContent = counter.value
// });

// incrementBtn.addEventListener('click', function () {
//   console.log('Клікнули на інкремент');

//   counter.increment();
//   console.log(counter)

//   valueEl.textContent = counter.value
// });

// const objC = {
//   z: 5,
// };
// console.log('objC:', objC);

// const objB = Object.create(objC);
// objB.y = 2;

// console.log('objB:', objB);

// const objA = Object.create(objB);
// objA.x = 1;

// console.log('objA:', objA);

// const Car = function ({ brand, model, price } = {}) {
//   // const {brand, model, price} = config;

//   this.brand = brand;
//   this.model = model;
//   this.price = price;
// };

// Car.prototype.sayHi = function () {
//   console.log('Car.prototype.sayHi -> this', this);
//   console.log('Hello :) ');
// };

// Car.prototype.ChangePrice = function (newPrice) {
//   this.price = newPrice;
// };

// console.log(Car.prototypy);

// const myCar = new Car({
//   brand: 'Audi',
//   model: 'Q3',
//   price: 35000,
// });

// myCar.sayHi();
// myCar.ChangePrice(45000);
// console.log(myCar);

// const myCar2 = new Car({
//   brand: 'BMW',
//   model: 'X6',
//   price: 50000,
// });

// console.log(myCar2);

// const myCar3 = new Car({
//   brand: 'Audi',
//   model: 'A6',
//   price: 70000,
// });

// console.log(myCar3);

// const User = function ({ email, password }) {
//   this.email = email;
//   this.password = password;
// };

// User.prototype.changeEmail = function (newEmail) {
//   this.email = newEmail;
// };

// const mango = new User({ email: 'mango@mail.com', password: 11111111 });

// mango.changeEmail('my-new-mango@mail.com');
// console.log(mango);

// function foo() {
//   console.log(this);
// }

// const obj = {
//   logCtx: foo
// }

// obj.logCtx();
// const chopShop = {
//   stones: [
//     {
//       name: 'Emerald',
//       price: 1300,
//       quantity: 4,
//     },
//     {
//       name: 'Diamond',
//       price: 2700,
//       quantity: 3,
//     },
//     {
//       name: 'Sapphire',
//       price: 1400,
//       quantity: 7,
//     },
//     {
//       name: 'Ruby',
//       price: 800,
//       quantity: 2,
//     },
//   ],
//   // calcTotalPrice(stoneName) {
//   //   return this.stones.reduce((acc, {name,price,quantity}) => {
//   //     if (name === stoneName) {
//   //       return price * quantity;
//   //     }
//   //     return acc;
//   //   }, 0);
//   // },
//   // calcTotalPrice(stoneName) {
//   // const {price, quantity} = this.stones.find(item => item.name === stoneName)
//   //   return price * quantity
//   // }
//   // calcTotalPrice(stoneName) {
//   //   return this.stones.reduce((acc, {name,price,quantity}) =>
//   //   name === stoneName ? acc = price * quantity : acc, 0);
//   // },
// };

// console.log(chopShop.calcTotalPrice('Emerald'));
// console.log(chopShop.calcTotalPrice('Diamond'));
// console.log(chopShop.calcTotalPrice('Sapphire'));
// console.log(chopShop.calcTotalPrice('Ruby'));

// const phoneBook = {
//   contacts: [],
//   add(contact) {
//     const newContact = {
//       list: 'default',
//       ...contact,
//       // id: phoneBook.generateId(),
//       // createdAt: phoneBook.getDate(),
//       id: () => this.generateId(),
//       createdAt: () => this.getDate(),
//     };
//     this.contacts.push(newContact);
//     return this.contacts;
//   },
//   generateId: () => {
//     return '_' + Math.random().toString(36).substr(2, 9);
//   },
//   getDate: () => {
//     return Date.now();
//   },
// };

// console.log(
//   phoneBook.add({
//     name: 'Mango',
//     email: 'mango@mail.com',
//     list: 'friends',
//   })
// );

// console.log(
//   phoneBook.add({
//     name: 'Poly',
//     email: 'poly@mail.com',
//   })
// );

// const newPhoneBook = {
//   contacts: [],
// };
// console.log(
//   phoneBook.add.call(newPhoneBook, {
//     name: 'Mark',
//     email: 'mark@mail.com',
//     list: 'friends',
//   })
// );

// const calculator = {
//   read(a, b) {
//     this.a = a;
//     this.b = b;
//   },
//   add() {
//     return this.a + this.b;
//   },
//   mult(){
//     return this.a * this.b;
//   }
// };

// console.log(calculator);
// calculator.read(5, 6);
// console.log(calculator);
// console.log(calculator.add());
// console.log(calculator.mult());

// class Car {
//   static description = 'Класс описывающий автомобиль';

//   static loinfo(carObj) {
//     console.log('Car.logInfo -> carObj', carObj);
//   }

//   constructor({ brand, model, price } = {}) {
//     this.brand = brand;
//     this._model = model;
//     this.price = price;
//   }

//   changePrice(newPrice) {
//     this.price = newPrice;
//   }

//   get model() {
//     return this._model;
//   }

//   set model(newModel) {
//     this._model = newModel;
//   }

//   // setModel(newModel) {
//   //   this.model = newModel;
//   // }

//   // getModel() {
//   //   return this.model;
//   // }
// }

// const carInstance = new Car({
//   brand: 'Audi',
//   model: 'Q3',
//   price: 35000,
// });

// console.log(carInstance);
// console.log(carInstance.model);
// carInstance.model = 'Q4';
// console.log(carInstance);

// console.log(carInstance.getModel());
// carInstance.setModel('Q4');
// console.log(carInstance.getModel());

// class Hero {
//   constructor({ name = 'hero', xp = 0 } = {}) {
//     this.name = name;
//     this.xp = xp;
//   }

//   gainXp(amount) {
//     console.log(`${this.name} получает ${amount} опыта`);
//     this.xp += amount;
//   }
// }

// const mango = new Hero({ name: 'mango', xp: 1000 });

// class Warrior extends Hero {
//   constructor({ weapon, ...restProps } = {}) {
//     super(restProps);

//     this.weapon = weapon;
//   }

//   attack() {
//     console.log(`${this.name} атакует используя ${this.weapon}`);
//   }
// }

// class Berserk extends Warrior {
//   constructor({ warcry, ...restProps } = {}) {
//     super(restProps);

//     this.warcry = warcry;
//   }

//   babyRage() {
//     console.log(this.warcry);
//   }
// }

// const ajax = new Berserk({
//   name: 'ajax',
//   xp: 800,
//   weapon: 'exe',
//   warcry: 'waaaaaaah',
// });

// console.log(ajax);
// ajax.babyRage();
// ajax.attack();
// ajax.gainXp(1500);

// class Mage extends Hero {
//   constructor({ spells, ...restProps } = {}) {
//     super(restProps);

//     this.spells = spells;
//   }

//   cast() {
//     console.log(`${this.name} что-то там калдует`);
//   }
// }

// const mango = new Warrior({ name: 'mango', xp: 1000, weapon: 'алеберда' });
// console.log(mango);
// mango.attack();
// mango.gainXp(1000);

// const poly = new Mage({ name: 'poly', xp: 500, spells: ['фаербол'] });
// console.log(poly);
// poly.cast();
// poly.gainXp(3000);

// class Blogger {
//   constructor({ name, age, numberOfPosts, topics }) {
//     this.name = name;
//     this.age = age;
//     this.numberOfPosts = numberOfPosts;
//     this.topics = topics;
//   }

//   getInfo() {
//     return `User ${this.name} is ${this.age} yers old and has ${this.numberOfPosts} posts`;
//   }

//   updatePostCount(value){
//     this.numberOfPosts += value
//   }
// }

// const mango = new Blogger({
//   name: 'mango@mail.com',
//   age: 24,
//   numberOfPosts: 20,
//   topics: ['tech', 'cooking'],
// });

// console.log(mango);
// console.log(mango.getInfo());
// mango.updatePostCount(5);
// console.log(mango.getInfo());

// class Storage {
//   constructor(arr) {
//     this.items = arr;
//   }

//   getItems() {
//     return this.items;
//   }

//   addItem(item) {
//     this.items.push(item);
//   }

//   // removeItem(item) {
//   //   if (this.items.includes(item)) {
//   //     const idx = this.items.indexOf(item);
//   //     this.items.splice(idx, 1);
//   //   }
//   // }
//   removeItem(item) {
//     const idx = this.items.indexOf(item);
//     if (!!~idx) {
//       this.items.splice(idx, 1);
//     }
//   }
// }

// const storage = new Storage(['apple', 'lemon', 'grape', 'peach']);
// // console.log(storage);

// // const items = storoge.getItems();
// // console.log(items)

// // storage.addItem('banana');
// // console.table(storage.items);

// // storage.addItem('apple');
// // console.table(storage.items);

// storage.removeItem('apple');
// console.table(storage.items);

// class Notes {
//   static Priority = {
//     LOW: 'low',
//     NORMAL: 'normal',
//     HIGH: 'high',
//   };
//   constructor(arr) {
//     this.items = arr;
//   }

//   addNote(note) {
//     this.items.push(note);
//   }

//   removeNote(text) {
//     const idx = this.items.findIndex(({ text: itemText }) => text === itemText);
//     console.log(idx);
//     if (!!~idx) {
//       this.items.splice(idx, 1);
//     } else {
//       console.log('NO');
//     }
//   }

//   updateNote(text, newPriority) {
//     const inArr = this.items.find(item => item.text === text);
//     if (inArr) {
//       inArr.priority = newPriority;
//     } else {
//       console.log('NO');
//     }
//   }
// }

// const myNotes = new Notes([]);

// myNotes.addNote({ text: 'My first notes', priority: Notes.Priority.LOW });
// myNotes.addNote({ text: 'My third notes', priority: Notes.Priority.HIGH });
// console.log(myNotes.items);

// myNotes.updateNote('My third notes', Notes.Priority.HIGH);
// console.log(myNotes.items);

// myNotes.removeNote('My first notes');
// console.log(myNotes.items)

// myNotes.addNote({text: 'My third notes', priority: Notes.Priority.NORMAL})
// console.log(myNotes.items)

// class StringBuilder {
//   constructor(value){
//     this.value = value;
//   }
//   getValue(){
//    return this.value;
//   }
//   padStart(str){
//     this.value = str + this.value
//   }
//   padEnd(str){
//     this.value = this.value + str
//   }
//   padBoth(str){
//     this.value = str + this.value + str
//   }

// }

// // Change code above this line
// const builder = new StringBuilder(".");
// console.log(builder.getValue()); // "."
// builder.padStart("^");
// console.log(builder.getValue()); // "^."
// builder.padEnd("^");
// console.log(builder.getValue()); // "^.^"
// builder.padBoth("=");
// console.log(builder.getValue()); // "=^.^="

// class Car {
//   // Change code below this line
//   static MAX_PRICE = 50000;
//   #price;

//   constructor({ price }) {
//     this.#price = price;
//   }

//   get price() {
//     return this.#price;
//   }

//   set price(newPrice) {
//     if(newPrice > 50000){
//       return
//     }
//     this.#price = newPrice;
//   }
// }

// const audi = new Car({ price: 35000 });
// console.log(audi.price); // 35000

// audi.price = 49000;
// console.log(audi.price); // 49000

// audi.price = 51000;
// console.log(audi.price); // 49000

// newPrice > MAX_PRICE
// newPrice <= MAX_PRICE = 49000

// set email(newEmail) {
//   if(newEmail === "") {
//     console.error("Помилка! Пошта не може бути порожнім рядком!");
//     return;
//   }

//   this.#email = newEmail;
// }

// class User {
//   static #takenEmails = [];

//   static isEmailTaken(email) {
//     return User.#takenEmails.includes(email);
//   }

//   #email;

//   constructor({ email }) {
//     this.#email = email;
//     User.#takenEmails.push(email);
//   }
// }

// const mango = new User({ email: "mango@mail.com" });

// console.log(User.isEmailTaken("poly@mail.com"));
// console.log(User.isEmailTaken("mango@mail.com"));
// console.log(User.isEmailTaken("jmango@mail.com"));

// class Car {
//   static #MAX_PRICE = 50000;
//   // Change code below this line
//   static checkPrice(price) {
//     console.log(price)
//     if(price > 50000){
//       return "Error! Price exceeds the maximum"
//     } else if (price < 50000) {
//       return "Success! Price is within acceptable limits"
//     }
//   }

//   // Change code above this line
//   constructor({ price }) {
//     this.price = price;
//   }
// }

// const audi = new Car({ price: 36000 });
// const bmw = new Car({ price: 64000 });

// console.log(Car.checkPrice(audi.price)); // "Success! Price is within acceptable limits"
// console.log(Car.checkPrice(bmw.price)); // "Error! Price exceeds the maximum"

//   //   return this.stones.reduce((acc, {name,price,quantity}) =>
//   //   name === stoneName ? acc = price * quantity : acc, 0);

// class User {
//   email;

//   constructor(email) {
//     this.email = email;
//   }

//   get email() {
//     return this.email;
//   }

//   set email(newEmail) {
//     this.email = newEmail;
//   }
// }
// class Admin extends User {
//   // Change code below this line

//   static AccessLevel = {
//     BASIC: 'basic',
//     SUPERUSER: 'superuser',
//   };

//   constructor({ email, accessLevel }) {
//     super(email);
//     this.accessLevel = accessLevel;
//     this.blacklistedEmails = [];
//   }
//   blacklist(email) {
//     this.blacklistedEmails.push(email);
//   }

//   isBlacklisted(email) {
//     console.log(email)
//     if(this.email === this.blacklistedEmails){
//       return true
//     }
    
//   }
//   // Change code above this line
// }

// const mango = new Admin({
//   email: 'mango@mail.com',
//   accessLevel: Admin.AccessLevel.SUPERUSER,
// });

// console.log(mango.email); // "mango@mail.com"
// // console.log(mango.accessLevel); // "superuser"

// mango.blacklist('poly@mail.com');
// console.log(mango.blacklistedEmails); // ["poly@mail.com"]
// console.log(mango.isBlacklisted('mango@mail.com')); // false
// console.log(mango.isBlacklisted('poly@mail.com')); // true

// let inputValue = null;
// console.log(typeof inputValue); // "object"

// Виносимо варіанти в масив
// const redFruits = ["apple", "strawberry", "cherry", "cranberries"];
// const fruit = "cherry";
// // Перевіряємо присутність елемента
// const hasFruit = redFruits.includes(fruit);

// if (hasFruit) {
//   console.log(`${fruit} is a red fruit!`);
// }

// function processCall(recipient) {
//   // Імітуємо доступність абонента випадковим числом
//   const isRecipientAvailable = Math.random() > 0.5;

//   if (!isRecipientAvailable) {
//     console.log(`Абонент ${recipient} недоступний, залиште повідомлення.`);
//     // Логіка активації автовідповідача
//   } else {
//     console.log(`З'єднуємо з ${recipient}, очікуйте...`);
//     // Логіка прийняття дзвінка
//   }
// }

// processCall("Манго");             


// function processCall(recipient, onAvailable, onNotAvailable) {
//   // Імітуємо доступність абонента випадковим числом
//   const isRecipientAvailable = Math.random() > 0.5;

//   if (!isRecipientAvailable) {
//     onNotAvailable(recipient);
//     return;
//   }

//   onAvailable(recipient);
// }

// function takeCall(name) {
//   console.log(`З'єднуємо з ${name}, очікуйте...`);
//   // Логіка прийняття дзвінка
// }

// function activateAnsweringMachine(name) {
//   console.log(`Абонент ${name} недоступний, залиште повідомлення.`);
//   // Логіка активації автовідповідача
// }

// function leaveHoloMessage(name) {
//   console.log(`Абонент ${name} недоступний, записуємо голограму.`);
//   // Логіка запису голограми
// }

// processCall("Манго", takeCall, activateAnsweringMachine);
// processCall("Полі", takeCall, leaveHoloMessage);

// function printValue(value) {
//   console.log(value);
// }

// function prettyPrint(value) {
//   console.log("Logging value: ", value);
// }

// function repeat(n, action) {
//   for (let i = 0; i < n; i += 1) {
//     action(i);
//   }
// }

// // Передаємо printValue як callback-функцію
// repeat(3, printValue);
// // 0
// // 1
// // 2

// // Передаємо prettyPrint як callback-функцію
// repeat(3, prettyPrint);
// // Logging value: 0
// // Logging value: 1
// // Logging value: 2


// const tweets = [
//   { id: "000", likes: 5, tags: ["js", "nodejs"] },
//   { id: "001", likes: 2, tags: ["html", "css"] },
//   { id: "002", likes: 17, tags: ["html", "js", "nodejs"] },
//   { id: "003", likes: 8, tags: ["css", "react"] },
//   { id: "004", likes: 0, tags: ["js", "nodejs", "react"] },
// ];

// // Пройдемо по всіх елементах колекції і додамо значення властивості tags
// // до акумулятора, початкове значення якого вкажемо порожнім масивом [].
// // На кожній ітерації пушимо в акумулятор усі елементи tweet.tags і повертаємо його.
// const tags = tweets.reduce((allTags, tweet) => {
//   allTags.push(...tweet.tags);
//   console.log(...tweet.tags)

//   return allTags;
// }, []);

// console.log(tags);

// // Мабуть, збирання тегів - не одиночна операція, тому напишемо функцію
// // для збирання тегів з колекції
// const getTags = tweets =>
//   tweets.reduce((allTags, tweet) => {
//     allTags.push(...tweet.tags);

//     return allTags;
//   }, []);

// console.log(getTags(tweets));


// const tweets = [
//   { id: "000", likes: 5, tags: ["js", "nodejs"] },
//   { id: "001", likes: 2, tags: ["html", "css"] },
//   { id: "002", likes: 17, tags: ["html", "js", "nodejs"] },
//   { id: "003", likes: 8, tags: ["css", "react"] },
//   { id: "004", likes: 0, tags: ["js", "nodejs", "react"] },
// ];

// const getTags = tweets =>
//   tweets.reduce((allTags, tweet) => {
//     allTags.push(...tweet.tags);

//     return allTags;
//   }, []);

// const tags = getTags(tweets);

// // Винесемо callback-функцію окремо, а в reducе передамо посилання на неї.
// // Це стандартна практика, якщо callback-функція досить велика.

// // Якщо в об'єкті-акумуляторі acc відсутня своя властивість з ключем tag,
// // то створюємо її і записуємо їй значення 0.
// // В іншому випадку збільшуємо значення на 1.
// const getTagStats = (acc, tag) => {
  
//   if (!acc.hasOwnProperty(tag)) {
//     acc[tag] = 0;

//   }

//   acc[tag] += 1;

//   return acc;
// };

// // Початкове значення акумулятора - це порожній об'єкт {}
// const countTags = tags => tags.reduce(getTagStats, {});

// const tagCount = countTags(tags);
// console.log(tagCount);



// const students = [
//   { name: "Манго", score: 83 },
//   { name: "Полі", score: 59 },
//   { name: "Аякс", score: 37 },
//   { name: "Ківі", score: 94 },
// ];

// const inAscendingScoreOrder = students.sort(
//   (firstStudent, secondStudent) => firstStudent.score - secondStudent.score
// );
// // console.log(inAscendingScoreOrder)


// const inDescendingScoreOrder = students.sort(
//   (firstStudent, secondStudent) => secondStudent.score - firstStudent.score
// );
// // console.log(inDescendingScoreOrder)

// const inAlphabeticalOrder = students.sort((firstStudent, secondStudent) =>
//   firstStudent.name.localeCompare(secondStudent.name)
// );
// // console.log(inAlphabeticalOrder)

class User {
  static #takenEmails = [];

  static isEmailTaken(email) {
    return User.#takenEmails.includes(email);
  }

  #email;

  constructor({ email }) {
    this.#email = email;
    User.#takenEmails.push(email);
  }
}

const mango = new User({ email: "mango@mail.com" });

console.log(User.isEmailTaken("poly@mail.com"));
console.log(User.isEmailTaken("mango@mail.com"));