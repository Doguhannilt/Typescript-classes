interface RectangleInterface{
    width:number;
    height:number;
    getArea(): number;
}


class Rectangle implements RectangleInterface{
    private _width: number;
    private _height:number;

    constructor(width: number, height:number){
        this._width = width;
        this._height = height;
    }


    // Initiliaze the _width variable
    get width():number{
        return this._width;
    }

    // Set up and configuration of width
    set width(width:number){
        if(width <= 0){
            console.error("You can't")
            return
        }
        this._width = width;
    }

    get height():number{
        return this._height = this.height
    }

    set height(height:number){
        if(height <= 0){
            return;
        }
        this._height = height
    }

    getArea(): number{
        return this._height * this._width;
    }

}