interface Product{
    name:string;
    price:number;
}

class ProductClass {
    private _name: string;
    private _price: number
    constructor(name: string, price: number) {
        this._name = name
        this._price = price
    }

    
    public get name() : string {
        return this._name
    }

    
    public set name(name : string) {
        if(name.length < 10){
            console.log("Your product name is supposed to be over than 10 character");   
        }
        this._name = name;
    }

    
    public get price() : number {
        return this._price
    }

    
    public set price(price : number) {
        if(price < 0){
            console.log("0 is not available");
            
        }
        this._price = price;
    }
}