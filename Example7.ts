interface Registry{
    name:string;
    age:number;
    id: string;
}


class PersonRegistry{
    private static _registry: Registry[] = [];

    public static addPerson(register: Registry):void{
        this._registry.push(register);
        this.saveToLocalStorage()
    }

    public static getPeople(): Registry[]{
        return this._registry
    }

    public static FindPersonById(id: string):void{
        this._registry = this._registry.filter(registry =>registry.id !== id)
        this.saveToLocalStorage()
    }

    private static saveToLocalStorage():void{
        const serializedregistry = JSON.stringify(this._registry);
        localStorage.setItem("registry", serializedregistry);
    }

    private static loadToLocalStorage():any{
        const storedPeople = localStorage.getItem("registry")
        return storedPeople
    }
}