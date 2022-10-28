//Main types

const str: string = "Hello";
const isFetching: boolean = false;

const int: number = 42;
const float: number = 4.2;

const message: string = "Sup wrld";
const numberArray: number[] = [1, 2, 3, 4];

const words: string[] = ["Hello", "Typescript"];

// Tuple
const contact: [string, number] = ["Sergey", 12345];

//Any
let variable: any = 42;
//...
variable = "Str now";
variable = [];

//===
function sayMyName(name: string): void {
  console.log(name);
}
sayMyName("Jon Dow");

//Never
function throwError(message: string): never {
  throw new Error(message);
}

function infinite(): never {
  while (true) {}
}

//Type
type Login = string;

const login: Login = "admin";

type ID = string | number;
const id1: ID = 1234;
const id2: ID = "1234";

type SomeType = string | null | undefined;
