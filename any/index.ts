
//Generic classes
class KeyValue<T>{
    constructor(public key:T){}
}

const pair=new KeyValue<number>(1);
const pair2=new KeyValue<string>(`1`);

// pair.key. we can use the string methods but with type of any not
//Generic function
function WrapKey<T>(key:T):T{
    return key;
}

console.log(WrapKey<string>("123"))

//interface generic
// interface Result<T>{
//     data:T | null,
//     error:string | null
// }
// function fetch<T>(url:string):Result<T>{
//     return {data:null,error:null}
// }

// interface person<T>{
//     user:T | null
// }
// interface User {
//     name: string;
//     age: number;
//   }
  
//   function detailPeople<T>(data:T): person<T> {
//     // Generate and return a person object
//     const personData: T | null = null; // Replace null with the actual data
//     const person: person<T> = { user: personData };
//     return person;
//   }
// interface Shayan{
//     name:string,
//     age:number
// }
// const result=detailPeople<Shayan>({name:"shayan",age:18})
// console.log( "age",result.user?.age)


interface Books<T>{
    writer:T
}
function returnBook<T extends string | null>(writer:T):T{
    return writer
}
console.log(returnBook("James Bean"));