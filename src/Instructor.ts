import Person from "./Person";


export class Instructor extends Person {
    _instructorId!: number;

    constructor (personName:string, id: number){
        super(personName);
        this._name = personName;
        this._instructorId = id;
    }
}