/*
School Catalogue:
Let’s put your knowledge of classes to the test by creating a digital school catalog for the New York City Department of Education. The Department of Education wants the catalog to hold quick reference material for each school in the city.

We need to create classes for primary and high schools. Because these classes share properties and methods, each will inherit from a parent School class. Our parent and three child classes have the following properties, getters, setters, and methods:

/School/
Properties: name (string), level (one of three strings: 'primary', 'middle', or 'high'), and numberOfStudents (number)
Getters: all properties have getters
Setters: the numberOfStudents property has a setter
Methods: .quickFacts() and .pickSubstituteTeacher() (this is a static method)

/Primary/
Includes everything in the School class, plus one additional property
Properties: pickupPolicy (string)

/Middle/
Does not include any additional properties or methods

/High/
Includes everything in the School class, plus one additional property
Properties: sportsTeams (array of strings)

*/

class School {
  constructor(name, level, numberOfStudents) {
    this._name = name;
    this._level = level;
    this._numberOfStudents = numberOfStudents;
  }
  get name() {
    return this._name;
  }
  get level() {
    return this._level;
  }
  get numberOfStudents() {
    return this._numberOfStudents;
  }
  set numberOfStudents(studentNum) {
    if (typeof(studentNum) === 'number') {
      this._numberOfStudents = studentNum;
    }
    console.log('Please input a number.');
  }
  quickFacts() {
    console.log(`${this._name} educates ${this._numberOfStudents} students at the ${this._level} school level.`);
  }
  static pickSubstituteTeacher(substituteTeachers) {
    const randomNum = Math.floor(Math.random()*substituteTeachers.length);
    return substituteTeachers[randomNum];
  }
}

const testSchool = new School('Justyna\'s High School', 'high', 300);
//console.log(testSchool.quickFacts());
//console.log(School.pickSubstituteTeacher(['Emily Jones', 'Albert Einstain']));

class PrimarySchool extends School {
  constructor(name, level='primary', numberOfStudents, pickupPolicy) {
    super(name, level='primary', numberOfStudents);
    this._pickupPolicy = pickupPolicy;
  }
  get pickupPolicy() {
    return this._pickupPolicy;
  }
}

class MiddleSchool extends School {
  constructor(name, level='middle', numberOfStudents) {
    super(name, level='middle', numberOfStudents);
  }
}

class HighSchool extends School {
  constructor(name, level='high', numberOfStudents, sportsTeams) {
    super(name, level='high', numberOfStudents);
    this._sportsTeams = sportsTeams;
  }
  get sportsTeams() {
    return this._sportsTeams;
  }
}

const lorraineHansbury = new PrimarySchool('Lorraine Hansbury', 'primary', 514, 'Students must be picked up by a parent, guardian, or a family member over the age of 13.');

lorraineHansbury.quickFacts();
console.log(School.pickSubstituteTeacher(['Jamal Crawford', 'Lou Williams', 'J. R. Smith', 'James Harden', 'Jason Terry', 'Manu Ginobli']));

const alSmith = new HighSchool('Al E. Smith', 'high', 415, ['Baseball', 'Basketball', 'Volleyball', 'Track and Field']);
console.log(alSmith.sportsTeams);

/* How this project can be improved:
- Add more properties to each class (averageTestScores, schoolOverview, etc.)
- Create a class called SchoolCatalog that holds a collection of schools. Create an instance of SchoolCatalog for primary, middle, and high schools.
- Remove the need to use words 'high', 'middle', 'primary' when creating new instances of classes. This can be ommited we can create a class like this:
// const alSmith = new HighSchool('Al E. Smith', 415, ['Baseball', 'Basketball', 'Volleyball', 'Track and Field']);

*/


