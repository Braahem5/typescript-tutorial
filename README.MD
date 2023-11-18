MY TYPESCRIPT TUTORIAL NOTES AND LEARNING
// https://www.typescriptlang.org/docs/handbook/basic-types.html#any
WHAT WE LEARNT SO FAR
how to declare a variable in ts
how to use the type annotation for variables
how to declare an array of numbers
how to declare an object with properties and values

1. Explicit type declaration: You explicitly specify the type using syntax such as let name: type = value;
2. Types in TypeScript: Any, Number, String, Boolean, Arrays and Tuples, Enums, Null and Undefined, Object
3. Types are optional in TypeScript, but we can use them to catch errors and improve code readability.
4. We have already learned about basic types like number, string, boolean etc.
5. In addition to these primitive types, TypeScript also supports complex data structures such as Arrays, Tuples, Enums, Alice, Union, Intersection, Literal, Nullable and Mapped.
6. The any type is a way of telling the compiler that we will take care of anything ourselves. It’s not recommended for most cases because
7. Arrays: An array is a collection of items that share the same type. In JavaScript, arrays are dynamic - they can hold any kind
7a. Arrays: In JavaScript arrays can contain any type of data (e.g., numbers or strings), while in TypeScript you need to specify the data type ahead.
6b. Arrays: An array is a collection of items stored at contiguous memory locations. In JavaScript, arrays are dynamic and can hold any date type at any index
6c. Arrays: An array is a collection of items that share the same type. In JavaScript, arrays are dynamic, meaning they don’t
8. Difference between Type and Interface.
   When to Use Which:
   Use Interfaces when you are defining the shape of an object, and you may want to extend or merge declarations later. If you're working with class instances or need to implement interfaces in a class, interfaces are often a better choice.

Use Types when you need to create a union, intersection, or mapped type. Types are also more suitable for scenarios where you want to create aliases for primitive types or other types. 
9. Type inference: TypeScript automatically infers the type of a variable from its value. 
10. Union types: A union type is a way of saying that this could be one of several types. For example, you might have an array 
11. Function: when writing a function in Ts you need to specify the data type of the parameters and the return value. 
12. Classes: In Javascript, classes are template for creating objects that have properties and method. 
The major difference between classes in Js and in Ts is  the  defination of the properties, method and return value data type.
- Another difference is the access modification which allow you to  control the visibility of class members (properties and methods) [encapsulation]
- Constructor function: A constructor is a special kind of JavaScript function that is used to initialize new objects created by a class.
- Constructor function is used to initialize the state of an object created by a class.
- The constructor property has a special meaning in JavaScript: it is the initializer for the prototype object.
- The constructor property has a special meaning in JavaScript: it is the initializer for the newly constructed object.
- A constructor function is just another JavaScript function which is called when an instance of a class is created.
- The constructor property is not available on all JavaScript objects, only those that are constructed with new keyword.
Object oriented programming concept that also apply to Typescript
-inheritance: is a mechanism that allows a class (subclass or derived class) to inherit properties and methods from another class (superclass or base class)
-polymorphism: allows objects of different classes to be treated as objects of a common base class. 
-encapsulation: Encapsulation involves bundling the data (properties) and methods that operate on the data into a single unit, known as a class.
13. Type Guarding:  a type guard is a mechanism that allows you to narrow down the type of a variable within a certain block of code. This is particularly useful when working with union types, where a variable can have multiple possible types.
There are several ways to implement type guards in Typescript: 
- Using typeof operator
- Using instanceof operator
- Implementing interface or type guard functions
- Using type predicates (callback)
- Using type assertions (casting)
- Using type guards (using if statement)
15. Generics: A generic allows us to write reusable code across different data types. It's similar to templates in C++
