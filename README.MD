MY TYPESCRIPT TUTORIAL NOTES AND LEARNING
// https://www.typescriptlang.org/docs/handbook/basic-types.html#any
WHAT WE LEARNT SO FAR
how to declare a variable in ts
how to use the type annotation for variables
how to declare an array of numbers
how to declare an object with properties and values

1. Explicit type declaration: You explicitly specify the type using syntax such as let name: type = value;
1. Types in TypeScript: Any, Number, String, Boolean, Arrays and Tuples, Enums, Null and Undefined, Object
1. Types are optional in TypeScript, but we can use them to catch errors and improve code readability.
1. We have already learned about basic types like number, string, boolean etc.
1. In addition to these primitive types, TypeScript also supports complex data structures such as Arrays, Tuples, Enums, Alice, Union, Intersection, Literal, Nullable and Mapped.
1. Arrays: An array is a collection of items that share the same type. In JavaScript, arrays are dynamic - they can hold any kind
1. The any type is a way of telling the compiler that we will take care of anything ourselves. It’s not recommended for most cases because
1. Arrays: In JavaScript arrays can contain any type of data (e.g., numbers or strings), while in TypeScript you need to specify the data type ahead.
1. Arrays: An array is a collection of items stored at contiguous memory locations. In JavaScript, arrays are dynamic and can hold any date type at any index
1. Arrays: An array is a collection of items that share the same type. In JavaScript, arrays are dynamic, meaning they don’t
1. difference between type and interface.
   When to Use Which:
   Use interfaces when you are defining the shape of an object, and you may want to extend or merge declarations later. If you're working with class instances or need to implement interfaces in a class, interfaces are often a better choice.

Use types when you need to create a union, intersection, or mapped type. Types are also more suitable for scenarios where you want to create aliases for primitive types or other types. 5. Type inference: TypeScript automatically infers the type of a variable from its value. 6. Union types: A union type is a way of saying that this could be one of several types. For example, you might have an array 7. function: when writing a function in ts you need to specify the data type of the parameters and the return value. 8. class
