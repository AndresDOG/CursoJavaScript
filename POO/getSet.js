class Person{
    constructor(name,lastname){
        this._name = name;
        this._lastname = lastname;
    }

    get name(){
        return this._name
    }

    set name(name){
        this._name = name;
    }
}
const persona = new Person("Andres", "Olea");
persona.name="Jose"
console.log(persona.name);
