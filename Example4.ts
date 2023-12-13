interface person{
    name: string;
    age: number;
}


class Person {
    private _name: string;
    private _age: number;
    constructor(name: string, age: number) {
        this._age = age;
        this._name = name;
    }

    
    public get name(): string {
        return this._name
    }

    
    public set name(name : string) {
        this._name = name;
    }
    
    
    public get age() : number {
        return this._age
    }

    
    public set age(age : number) {
        this._age = age;
    }
    
    
    
}