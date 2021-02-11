const person = {

       firstName : "Stone Cold",
       lastName : "Ostin",
       age : 56,
       address : {
             city: "Florida",
             country : "USA",
             ZIPCODE: 8000, 
 },
 getbirthyear : function(){
            return 2021-this.age;

 }


}

let value;
value = person;

//specific value

value= person.firstName;
value = person.lastName;
value = person.address.country;
value = person.age;

const arr = [
    { name : "John", age:25, city:"CTG"},
    {name : "Nick", age:35, city:"Dhaka"}

];

for(let i=0;i<arr.length;i++){
console.log(arr);
}


//output

//console.log(value);