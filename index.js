console.log("Working...");

//Callback Hell - They are just a name or convention for using Javascript functions.It
//insted of returning results immediately like other functions, takes time to produce the
//result. These are more of like an I/O operations.

// const getEmployeeID = () => {

//     setTimeout(() => {
//         console.log("Fetching the Employee details");
//         let id = [1,2,3,4,5];
//         console.log(id);

//         setTimeout(() => {
//             let employeeDetails = {
//                 name: "Arjun Kanungo",
//                 age: 34,
//             }
//             console.log(`The name of the employee is ${employeeDetails.name} an the age is ${employeeDetails.age}`);

//             setTimeout(() => {
//                 employeeDetails.gender = "Male",
//                 console.log(`The name of the employee is ${employeeDetails.name} an the age is ${employeeDetails.age} and the gender is ${employeeDetails.gender}`);

//                 setTimeout(() => {
//                     employeeDetails.salary = 21000;
//                     console.log(`The name of the employee is ${employeeDetails.name} an the age is ${employeeDetails.age} and the gender is ${employeeDetails.gender} and the salary is ${employeeDetails.salary}`);
//                 },2000);
//             }, 2000);
//         }, 2000);
//     },2000);
// }
// getEmployeeID();

//Promises - Promises are used to handle asynchronous operations in javascript . They are easy to manage when delaying with multiple asynchronous operations where multiple call backs
//can create callback hells leading to unmanagable code.
//This doesn't means that Promises are only used for avoiding callback hells,
//insted are ofetn used for handling asynchronous operations.

//Promises takes two executor functions, namely resolve and reject. If the data is feteched correctly then the control is pased
//to resolve another method which in turn calls.then() method , but if the data
// isn't fectched for some reasons i.e., there is an error, then the reject method is called
//which further calls the .correct() method.


//There are three stages in promises 
//1. Pending - When the Promises is still executing i.e., not yet Resolved or rejected are called in pendingstages.
//2. Resolved/fullfill - When the promises is resolved or have fetched the data correctly, it ends up being into resolved state.
//3. Rejected - When the promises falls in fetching the result, it ends up being into rejected state.

const getEmployeeId = new Promise((resolve, reject)=>{
    setTimeout(() => {
        let id = [1,2,3,4,5];
        resolve(id);
        reject("then data isn't found");
    }, 2000);
})

//promise consuming - used for consumption of promise.

const getEmployeeDetails = (data) => {
    return new Promise((resolve, reject) => {
setTimeout(() => {
    let employeeDetails = {
        name: "Arjun Kanongo",
        age: 34,
    }
    console.log(data);
    resolve(`The name of the employee is ${employeeDetails.name} and the age is ${employeeDetails.age}`);
}, 3000, data);
    })
}

getEmployeeId
         .then((id)=>{
            console.log(id);
            getEmployeeDetails("Hi").then((data) => {
                console.log(data);
            })
})
          .catch((err)=>{
            console.log("Error message :",err);
})

         .finally(()=>{
             console.log("End of Program");
         })


let promise = new Promise((resolve, rejecte)=> {
     resolve();
})

promise.then(()=>{
    setTimeout(() => {
        console.log("First call");
    }, 1000);
}).then(()=>{
    return new Promise((resolve, reject)=>{
        setTimeout(() => {
            console.log("second call");
        }, 3000);
    })
}).then(()=>{
    return new Promise((resolve, reject)=>{
        setTimeout(() => {
            console.log("third call");
        }, 2000);
    })
})