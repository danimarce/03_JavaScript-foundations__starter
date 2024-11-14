# JavaScript Basics

Answer following questions in this file.

## What is JavaScript?

```
JavaScript is the programing language more used on the web

Some characteristics:

- Interpreted language: Runs without needing pre-compilation
- Multi-paradigm: Supports multiples paradigm like object-oriented, functional programming, etc...
- Single-threaded: Executes in a single-threaded environment (one operation at a time)
- Dynamically typed: Variables can change type
```

## About values

### What is a primitive value?

```
It's a data type that is not an object and does not have methods they are immutables
```

### Which are primitive values? Explain them with at least one example for primitive.

```
- string: is a secuency of characters used to represent text
Ex: let name = "dani"

- number: is a numeric data type
Ex: let number = 13

- bigInt: is a numeric data type used when values are larger than range suported by number data type
Ex: let bigNumber = BigInt("1234567890123456789012345678901234567890")

- boolean: is a data type there only can have 2 values (true or false)
Ex: let approbed = true

- null: represents the absence of any object value
Ex: let none = null

- undefined: is a data type assigned to variables there are have only been declared 
Ex: let test 
(test value = undefined)

- symbol: represents a unique and immutable identifier
Ex: let uniqueId = Symbol("description");
```

## About variables

### What is a variable in JS?

```
It's a memory reference that is created to store values
```

### How many ways can we define a variable in JS? Is there any not recommended way?

```
var (not recommended)
const
let
```

### Which are the most used var naming conventions in JS?

```
camelCase:
ex: let textParagraph = 'hi'

PascalCase:
ex: TextParagraph = 'hi'

snake_case:
ex: text_paragraph = 'hi'
```

## About operators

### Which are the main comparison operators in JS? Explain them with at least one example for primitive.

```
Equality ==
Ex: 5 == "5"
Returns true

Strict equality ===
Ex: 5 === "5"
Returns false

Diferent != 
Ex: 5 != "5"
Returns false

Strict different !==
Ex: 5 !== "5"
Returns true

Higher than >
Ex 5 > 4
Returns true

Higher or equal than >=
Ex 5 >= 6
Returns false

Lower than <
Ex 4 < 5
Returns true

Lower or equal than
Ex 5 <= 6
Returns true
```

### Which are the main logical operators in JS? Explain them with at least one example for primitive.

```
and &&: returns true if all conditions are true, if one are false returns false
Ex: 5 == 2 + 3 && true
Returns true

or ||: returns true if one or more conditions are true or if all are true, if all are false returns false
Ex: 5 == 3 + 3 || false
Returns false

not !: returns opsite of a contition truth value, if the condition is true will return false
```
