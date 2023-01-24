"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Student = void 0;
const Person_1 = __importDefault(require("./Person"));
class Student extends Person_1.default {
    _studentId;
    _student_section;
    _student_email;
    _courses;
    studentIds = 0;
    constructor(personName, student_section) {
        super(personName);
        this._name = personName;
        this._studentId = ++this.studentIds;
        this._student_section = student_section;
    }
}
exports.Student = Student;
