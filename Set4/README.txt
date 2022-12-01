20. What is the value of foo.length?
The value of foo.length after pushing those two values, would be two, at the beginning it’s zero

21.What is the outcome of the following code?
    a. First it will alert “helloWorld” and the second alert will be an error because bar is out of scope since it was declared inside the nameless function.
    b. This will print “array is true” from the first line. Because it’s only checking the existence of the array. 
       The second statement is comparing an array with a boolean value, they are different so nothing will be printed
    c. Every 0.1 seconds, it will print the counter, starting with 0 and finishing at 4
    d. The result will be undefined cause obj won’t have the prop property


25. Given the following input values, how will the code snipped behave? (30 mins)

function log(v){
  if(v){ console.log('ok');}
  else{ console.log('no'); }
}

true: ok
false: no
‘true’: ok
‘false’:ok
{}: ok
[]: ok
NaN: no
0: no
1:ok
Undefined: no
Null: no

26. Explain the following code:
What is being logged is only the return statement of each function (foo1 and foo2). 
The inner function fn, is not being called anywhere, so it isn’t being executed. If you erase the console.logs nothing prints to the console.

27. Explain the result of the following operations (1 hours)
[]+[]: the result here is an empty string, arrays are turned into strings by coercion and an empty array is kind of like typing “”
{}+[]:the result here is an object, because empty objects will be treated as objects no matter their contents. 
If an empty array is treated like “” then the result would just be the object
[]+{}: same answer as before
{}+{}: this will just add two empty objects next to each other giving [object Object][object Object]

32. Explain the output of the following code:
When executing prop, the first two console.log won’t have a problem executing normally, however, 
when it gets to the nameless function and executes it, the self.bar will display correctly because self, 
was made the this context from one level above, so it has access to that this. 
But when it comes to this.foo, nameless functions don’t have a this, so it returns undefined.

33. Explain the difference, if any, between the following two functions. Will the returned value be the same if compared?
Well, their contents may be the same, however since they are being declared in separate functions, they have their own reference in memory making them different objects. 
If one were to do console.log(func1() == func2()), it would return a false statement, even when the objects returned look the same. 
It’s all about the reference in memory.
