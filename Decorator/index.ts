//Decorators
//create a decorator in the class


// function Component(constructor:Function){
//   constructor.prototype.dateNow=Date.now();
//   constructor.prototype.declareName=function(name:string){
//     console.log(name);
//   }
// }

//or we can use inheritance
// class DateNow{
//     constructor(public name:string){}
//      declareName(name:string){
//         console.log(name);
//      }
// }

// class ProfileComponents extends DateNow{
     
// }

// Decorator function
function loggedMethod(originalMethod: any, _context:any) {
 
}

class Person {
  name: string;
  constructor(name: string) {
      this.name = name;
  }

  @loggedMethod
  greet() {
      console.log(`Hello, my name is ${this.name}.`);
  }
}

const p = new Person("Ron");
p.greet();
import { test } from "./main";
test()