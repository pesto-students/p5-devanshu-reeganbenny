/*
* Create 3 functions, for example doTask1(), doTask2() and doTask3(). 
* These three functions should be executed sequentially using both Async and Await.
* Execute these three 3 callback functions asynchronously using Async Await and Generators.
*/

// Async function 1
async function toDotask1(){
    const task1 = new Promise((resolve, reject) => {
        setTimeout(() => {resolve("Task 1");},1000);
    });
    let toDoTask1 = await task1;

    return toDoTask1;
}

// Async function 2
async function toDotask2(){
    const task2 = new Promise((resolve, reject) => {
        setTimeout(() => {resolve("Task 2");},1000);
    });
    let toDoTask2 = await task2;

    return toDoTask2;
}

// Async function 3
async function toDotask3(){
    const task3 = new Promise((resolve, reject) => {
        setTimeout(() => {resolve("Task 3");},1000);
    });
    
    let toDoTask3 = await task3;
    return toDoTask3;
}

//Creating the generator function
function* toDoTaskGenerator(){
    yield toDotask1().then((task) =>{ console.log(task); });
    yield toDotask2().then((task) =>{ console.log(task); });;
    yield toDotask3().then((task) =>{ console.log(task); });;
}


// Creating the Generator object
const toDoTask = toDoTaskGenerator();

toDoTask.next();
toDoTask.next();
toDoTask.next();