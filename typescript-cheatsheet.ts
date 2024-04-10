/* 
=========
Basic Types
=========
*/
let isDone: boolean = false;
let decimal: number = 6;
let color: string = "blue";
let list: number[] = [1, 2, 3];
let tuple: [string, number] = ["hello", 10];

enum Color {Red, Green, Blue}
let c: Color = Color.Green;

let notSure: any = 4; // Try to avoid using `any`
let u: undefined = undefined;
let n: null = null;

/* 
=========
Advanced Types
=========
*/

// Union type
let multiType: number | string;
multiType = 20; // OK
multiType = "twenty"; // OK

// Type aliases
type StringOrNumber = string | number;
let anotherMultiType: StringOrNumber;

// Type assertions
let someValue: any = "this is a string";
let strLength: number = (someValue as string).length;

// Literal types
let literal: "hello" | "world";
literal = "hello"; // OK
// literal = "anything else"; // Error


/* 
=========
Interfaces
=========
*/

interface LabelledValue {
    label: string;
}

function printLabel(labelledObj: LabelledValue) {
    console.log(labelledObj.label);
}

let myObj = {size: 10, label: "Size 10 Object"};
printLabel(myObj);

/* 
=========
Classes
=========
*/

class Greeter {
    greeting: string;
    constructor(message: string) {
        this.greeting = message;
    }
    greet() {
        return "Hello, " + this.greeting;
    }
}

let greeter = new Greeter("world");

/* 
=========
Functions
=========
*/

function add(x: number, y: number): number {
    return x + y;
}

let myAdd = function(x: number, y: number): number { return x + y; };

/* 
=========
Generics
=========
*/

function identity<T>(arg: T): T {
    return arg;
}

let output = identity<string>("myString");
let outputNumber = identity<number>(100);


/* 
=========
Enums
=========

Enums start numbering their members starting at 0 if you don't specify the value manually. However, in the provided code, the first member of the Color enum is initialized with 1. Consequently, Green would be 2 and Blue would be 3.

*/
enum Size {Small = 1, Medium, Big}
let sizeName: string = Color[2];

// Displays 'Green'
alert(sizeName);

/* 
=========
Modules
=========
*/

// In file some-module.ts
export interface SomeInterface {
    // ...
}
export class SomeClass {
    // ...
}

// In another file
import { SomeClass, SomeInterface } from "./some-module";


/* 
=========
Decorators
=========
*/

function sealed(constructor: Function) {
    Object.seal(constructor);
    Object.seal(constructor.prototype);
}

@sealed
class BugReport {
    type = "report";
    title: string;

    constructor(t: string) {
        this.title = t;
    }
}

/* 
=========
Namespace
=========
*/

namespace Validation {
    export interface StringValidator {
        isAcceptable(s: string): boolean;
    }
}

/* 
=========
Ambient Declarations
=========

These are typically used to describe the shape of existing JavaScript libraries
*/

declare var myLibraryVariable: any;

/* 
=========
Advanced Techniques
=========

- Intersection types
- Type guards and type assertions
- Discriminated unions
- Type mapping
- Conditional types
- Readonly and Partial utility types

*/