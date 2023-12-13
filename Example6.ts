interface Product{
    name:string,
    price:number,
}

class Productclass {
    
    private static _products: Product[] = [];

    static getProducts(): Product[]{
        return this._products;
    }

    static addProducts(product: Product): void{
        this._products.push(product);
    }

    static removeProduct(productName: string): void{
        this._products = this._products.filter(product => productName !== productName)
    }
}