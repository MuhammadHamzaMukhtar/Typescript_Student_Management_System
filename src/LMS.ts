import { Student } from "./Student";
import { Instructor } from "./Instructor";
import Course from "./Course";

export class LMS {
    _students : Student[] = [];
    _instructors: Instructor[] = [];
    _courses: Course[] = [];

    signin (id:number, password:string) {
        const student = this._students.find((student)=>{
            student._id === id;
        });
        if(student){
            
        } else {

        }
    }
}