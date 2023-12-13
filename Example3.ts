interface CircleInterface{
    radius: number;
    getArea(): number;
    getCircumference(): number;
}

class Circle {
    private _radius: number;
    constructor(radius:number) {
        this._radius = radius;
    }

    
    public get radius() : number {
        return this._radius
    }

    
    public set radius(radius : number) {
        this._radius = radius;
    }
        // Alan hesaplama metodu
        getArea(): number {
            return Math.PI * this._radius ** 2;
        }
    
        // Çevre hesaplama metodu
        getCircumference(): number {
            return 2 * Math.PI * this._radius;
        }
}
