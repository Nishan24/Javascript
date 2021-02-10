//Template Literals

// console.log(`This is a string one
// This is string two`);

const n = "Nishan";
const age = 24;
const job = "Web developer";
const city = "Dhaka";
let html;
///Without template (es5)

// html = "<ui>" +
//     "<li> Name :" + name + "</li>" +
//     "<li> Age :" + age + "</li>" +
//     "<li> Job :" + job + "</li>" +
//     "<li> City :" + city + "</li>" +
//     "</ui>";

//     document.body.innerHTML = html;

    //with template

    html = ` <ui>
    
                <li> Name : ${n}  </li>
                <li> Name : ${age}  </li>
                <li> Name : ${job}  </li>
                <li> Name : ${city}  </li>

    </ui>    
    `
    document.body.innerHTML = html;

