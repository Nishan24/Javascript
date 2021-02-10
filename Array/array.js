const arr = ["Nsn",125,25,"ak","tabid",625,500];
const arr2 = [45,"alas",55,"sara",100];
const arr3 =["green","blue","red","purple","pink"];
const arr4 =[500,900,100,2,95,50];
 let value;


 value = Array.isArray(arr);
value = arr.length;
value = arr[0];
//value = arr.indexOf("Nsn");

//Mutaing array
// arr.push(100); //at last
// arr.unshift(50); //at first

   
arr.pop();
arr.pop();
arr.pop();

arr.splice(1,1);
arr.reverse();

value = arr.concat(arr2);
value = arr3.sort();

//Choto theke boro
value = arr4.sort(function(x,y){

     return x-y;
});

function search(arr4){

    return arr4>100;
}

//Boro theke choto
// value = arr4.sort(function(x,y){

//     return y-x;
// })
value = arr4.find(search);
console.log(arr);
console.log(value);

