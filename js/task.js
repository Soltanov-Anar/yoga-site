// var a = isNaN('2014');
// console.log(a);

// // var x = [];
// // var y = x;
// // y[0] = 7;

// // alert(x[0]);


// a = 0.1;
// b = 0.2; 
// c = 0.3; 

// console.log(a + (b + c) === (a + b) + c); 

// console.log("Hello!' +"_"+ "World!');
/* 
let arr = ["Джас", "Блюз"];
console.log(arr);

arr.push("Рок-н-ролл");
console.log(arr);

arr[Math.floor((arr.lenght - 1)/2)] = "Классика";
console.log(arr);

console.log(arr.shift());

arr.unshift("Рэп", "Регги");
console.log(arr);

let styles = ["Джаз", "Блюз"];
console.log(styles);
styles.push("Рок-н-ролл");
console.log(styles);
styles[Math.floor((styles.length - 1) / 2)] = "Классика";
console.log(styles);
styles.unshift("Рэп", "Регги");
console.log(styles);
 */
/* function sumInput() {
    let read = +prompt("Введите значение", 'Дом, улица, газоны');
    if(read == "" ||
       read == null) {
    let read = prompt("Введите значение", 'Дом, улица, газоны'); 
       } else {
        console.log("done");
       };
    let sum = read.sum();
}

sumInput();
 */

 
 let str = prompt("Введите значение", '-webkit-transition');
 function camelize(str) { 
   return str
      .split('-')
      .map( (word, index) => index == 0 ? word : word[0].toUpperCase() + word.slice(1))
      .join('')
 }

camelize(str);
alert(camelize(str));