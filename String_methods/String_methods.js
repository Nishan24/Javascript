let str1 = "He king is king";
let str2 ="He is a good boy";

//charAt()

console.log(str1.charAt(3));

//concat()

console.log(str1.concat(str2));

//endsWith()
console.log(str1.endsWith("king"));

//includes()

console.log(str1.includes("is"));

//indexOf()

console.log(str1.indexOf("king"));

//lastIndexOf()
console.log(str1.lastIndexOf("king"));

//match

console.log(str1.match(/i/g));

//repeat
console.log(str1.repeat(2));

//replace
console.log(str1.replace(/king/g,"Gangstar"));

//Search

console.log(str1.search("king"));

//slice

console.log(str1.slice(0,10));

//split
console.log(str1.split("king"));

//toLowercase()
console.log(str1.toLowerCase());

//toUpppercase()

console.log(str1.toUpperCase());

// //Tweet count

// let tweet = prompt("Write your message!");

// let trim = tweet.slice(0,140);

// alert(trim + "\n orginal message lenth is: "+ tweet.length);

///

// let n = prompt("Write your name bro!");

// let m = n.slice(0,1);
// let o = m.toUpperCase();
// let p = n.slice(1);

// alert("Hello "+ o+p);


let n = prompt("Enter your name!");

alert("Hello "+ n[0].toUpperCase);