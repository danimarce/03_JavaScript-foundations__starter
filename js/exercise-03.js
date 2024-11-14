/* 
    1. Define function 'getTypeOf', which receives a value as paramenter and returns the type of this value
        Use typeof to ckech the types for each of the main 5 primitive types (string, number, boolean, null, undefined)
    2. Log the result of any function call.
*/

const getTypeOf = (value) => {
    return typeof value;
};

const stringVariable = getTypeOf("test");

const numberVariable = getTypeOf(1);

const booleanVariable = getTypeOf(true);

const nullVariable = getTypeOf(null);

const undefinedVariable = getTypeOf(undefined);

window.console.log({
    stringVariable: stringVariable,
    numberVariable: numberVariable,
    booleanVariable: booleanVariable,
    nullVariable: nullVariable,
    undefinedVariable: undefinedVariable,
});
