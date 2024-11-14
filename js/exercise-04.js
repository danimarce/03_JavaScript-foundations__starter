/*
    What would each of these lines of code do:

    1. true && console.log("moo");
    2. false && console.log("moo moo?")
    3. true || console.log("hello friend");
    4. false || console.log("bye friend");

    Once you see the results, write in a comment why it works that way
*/

// console.log works because && returns the first fasly (value that is considered false when encoutered in a boolean context) operator value begining by the left
true && console.log("moo");

// console.log doesn't works because the first fasly operator value is false, then returns false
false && console.log("moo moo?");

// console.log doesn't works because 
true || console.log("hello friend");

// console.log works because
false || console.log("bye friend");
