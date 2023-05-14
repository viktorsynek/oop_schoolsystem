class Person {
	_name;
	_age;
	constructor(name, age) {
		if (!name || !age) {
			throw new Error('name and age must be given.');
		}
		this._name = name;
		this._age = age;
	}
	getName() {
		return this._name;
	}
	getAge() {
		return this._age;
	}
}

class Student extends Person {
	_marks;
	constructor(name, age) {
		super(name, age);
		this._marks = [];
	}
	addMarks(...marks) {
		this._marks.push(...marks);
	}
	getMarks() {
		return this._marks;
	}
}

class Teacher extends Person {
	_students;
	constructor(name, age) {
		super(name, age);
		this._students = [];
	}
	addStudents(...students) {
		for (let i = 0; i < this._students.length; i++) {
			if (!students[i] instanceof Student) {
				throw new Error('Thats not a student type');
			}
		}
		this._students.push(...students);
	}
	getStudents() {
		for (let i = 0; i < this._students.length; i++) {
			console.log(this._students[i]._name, this._students[i].getMarks());
		}
	}
}

let teacher = new Teacher('Mark', 36);
let student1 = new Student('Viktor', 19);
student1.addMarks(1, 3, 2, 4, 5);
let student2 = new Student('Adam', 24);
student2.addMarks(2, 2, 3, 5, 1);
let student3 = new Student('Peter', 19);
student3.addMarks(1, 2, 4, 1, 5);
teacher.addStudents(student1, student2, student3);
teacher.getStudents();
