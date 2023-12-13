interface Car{
    brand: string,
    model: string,
    year: number
}


class CarDefined{
    private static _car: Car[] = [];

    static RegisterCar(car: Car){
        this._car.push(car);
    }

    static getAllCars(): Car[]{
        return this._car
    }

    static findCarsByModel(model:string): Car | undefined{
        return this._car.find(car => car.model === model);

    }

}