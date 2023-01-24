import Person from "./Person";
import Course from "./Course";

let studentIds = 0;

export class Student extends Person {
    _studentId?: number;
    _student_section!: string;
    _student_email?: string;
    _courses !: Course[]; 
    _password !: string;
    _status!: boolean;


    constructor (personName:string, student_section: string, password: string, status:boolean){
        super(personName);
        this._name = personName;
        this._studentId = ++studentIds;
        this._student_section = student_section;
        this._password = password;
        this._status = status;
    }

    setPassword(password: string){
        this._password = password;
    }

    setCourseEnrolled(){
        
    }
}