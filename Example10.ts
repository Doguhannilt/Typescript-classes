interface Car {
    brand: string;
    model: string;
    year: number;
}

interface Bicycle {
    brand: string;
    type: string;
}

class VehicleRegistry {
    private static _vehicles: (Car | Bicycle)[] = [];

    static registerVehicle(vehicle: Car | Bicycle): void {
        this._vehicles.push(vehicle);
        this.saveToLocalStorage();
    }

    static getAllVehicles(): (Car | Bicycle)[] {
        return this._vehicles;
    }

    static findVehicleByBrand(brand: string): (Car | Bicycle) | undefined {
        return this._vehicles.find(vehicle => vehicle.brand === brand);
    }

    static removeVehicleByBrand(brand: string): void {
        this._vehicles = this._vehicles.filter(vehicle => vehicle.brand !== brand);
        this.saveToLocalStorage();
    }

    private static saveToLocalStorage(): void {
        const serializedVehicles = JSON.stringify(this._vehicles);
        localStorage.setItem("vehicles", serializedVehicles);
    }

    private static loadFromLocalStorage(): void {
        const storedVehicles = localStorage.getItem("vehicles");
        if (storedVehicles) {
            this._vehicles = JSON.parse(storedVehicles);
        }
    }
}

// Kullanım örneği
const car: Car = { brand: "Toyota", model: "Camry", year: 2022 };
const bicycle: Bicycle = { brand: "Giant", type: "Mountain Bike" };

VehicleRegistry.registerVehicle(car);
VehicleRegistry.registerVehicle(bicycle);

const allVehicles = VehicleRegistry.getAllVehicles();
console.log("All Vehicles:", allVehicles);

const foundVehicle = VehicleRegistry.findVehicleByBrand("Giant");
console.log("Found Vehicle:", foundVehicle);

VehicleRegistry.removeVehicleByBrand("Toyota");
console.log("Vehicles after removal:", VehicleRegistry.getAllVehicles());
