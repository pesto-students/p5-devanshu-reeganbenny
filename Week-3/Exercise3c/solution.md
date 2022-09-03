# Question 3.3 : What is the output of the below problem and why?

```
function createIncrement() {
    let count=0;
    function increment() {
        count++;
    }
    let message = `Count is ${count}`;
    function log() {
        console.log(message);
    }
    return[increment,log];
}
const[increment,log] = createIncrement();
increment();
increment();
increment();
log();// What is logged?

```

## Solution

```
Output: Count is 0
```

Here in the function createIncrement() we have are returning two function references in an array.

1. increment
2. log

In **increment** we have a **count** variable which is initialized with **0**. Whenever this function reference is called the statement in the function will run, ie **count++**;

In **log** we have a string **message** which is initialized with **count = 0**.

**count** used in increment() function will not affect the count variable in the function log().

So after running the code the value of count in **increment()** function will be equal to **3**. But the value of count in **log()** function will e **0**. So when we call log() we will ge the output as

```
Count is 0
```
