
//Generic classes
class KeyValue<T>{
    constructor(public key:T){}
}

const pair=new KeyValue<number>(1);
const pair2=new KeyValue<string>(`1`);

// pair.key. we can use the string methods but with type of any not